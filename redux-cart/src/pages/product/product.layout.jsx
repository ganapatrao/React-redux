
import { useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux'
// import  fetchData from './Product.Slice'
 import {callApi,addToCart} from './Product.Slice'
import axios from "axios";
import {ProductsContainer,ProductCard,ProductCardImage,ProductTitle,AddToCartButton} from './ProductList.Styles'

const products =()=>{
    const  dispatch = useDispatch();
    const productslist =useSelector((state)=>state.products.data)

    // useEffect(() => {
    //     // Dispatch the fetchProducts action when the component mounts
    //     dispatch(fetchData);
    //   }, [dispatch]);


    useEffect(() => {
        (async () => {
          const result = await axios.get(
            `https://fakestoreapi.com/products`
          );
          dispatch(callApi(result.data))
        })();
    
        return () => {
          console.log("Unmouting Details");
        };
      }, [dispatch]);


// console.log(productslist)

return productslist.map((item) => (
    <ProductCard key={item.id}>
        <ProductCardImage src={item.image} />
        <ProductTitle>{item.title}</ProductTitle>
        < AddToCartButton onClick={()=>dispatch(addToCart(item))}>add to cart</AddToCartButton>
    </ProductCard>

));

}

export default products