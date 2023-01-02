import "./App.css";
import BillingAddress from "./components/BillingAddress/BillingAddress";
import ShippingAddress from "./components/ShippingAddress/ShippingAddress";

function App() {
  return (
    <div className="App">
      <div className="shipping-container">
        <BillingAddress />
        <ShippingAddress />
      </div>
    </div>
  );
}

export default App;
