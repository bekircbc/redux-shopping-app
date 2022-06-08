import "./App.scss";
import { ShopArea } from "../common/components/ShopArea";
import { ShoppingCart } from "../common/components/ShoppingCart";

function App() {
  return (
    <div className="App">
      <h1>Shopping App</h1>
      <ShopArea />
      <ShoppingCart />
    </div>
  );
}

export default App;
