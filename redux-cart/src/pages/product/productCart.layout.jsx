import { useDispatch, useSelector } from "react-redux";

import {
  ProductCard,
  ProductCardImage,
  ProductTitle,
} from "./ProductList.Styles";

const productCart = () => {
  const dispatch = useDispatch();
  const productsCartlist = useSelector((state) => state.products.cart);
  console.log("productsCartlist", productsCartlist);


  return productsCartlist.map((product) => (
    <ProductCard key={product.id}>
      <ProductCardImage src={product.image} />
      <ProductTitle>{product.title}</ProductTitle>
      <ProductTitle>$ {product.price}</ProductTitle>
      {/* <ProductTitle>{product.description}</ProductTitle> */}
      {/* <ProductTitle>{product.count}</ProductTitle> */}
      {/* <p>
        Items <span class="w3-badge">{product.count}</span>
      </p> */}
    
        <p  style={{ backgroundColor: "lightblue", padding: "5px 10px", borderRadius: "10px" }}>
          Items <span className="badge">{product.count}</span>
        </p>

    </ProductCard>
  ));
};

export default productCart;
