import { Provider } from "react-redux";
import ProductStore from "./redux/store";
import ProductPage from "./pages/product/product.layout"
import ProductCart from './pages/product/productCart.layout'

function App() {


  return <Provider store={ProductStore}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ width: '40%' }}>
          <ProductPage />
        </div>
        <div style={{ marginLeft: "auto",width: '30%' }}>
          <ProductCart />
        </div>
      </div>
  </Provider>;
}

export default App;
