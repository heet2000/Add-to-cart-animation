import "./App.css";
import "./temp.js";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ProductList from "./components/ProductList";

function App() {
  return (
    <>
      <ProductList />
      <div className="shopping-cart" data-product-count="0">
        <ShoppingCartIcon className="cart-icon" />
      </div>
    </>
  );
}

export default App;
