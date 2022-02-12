import { Link } from "react-router-dom";
import CartAddress from "../Components/CartAddress";
import CartProduct from "../Components/CartProduct";
import CartSummary from "../Components/CartSummary";

function Cart() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 my-3">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Cart
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 p-3">
          <h2>Cart</h2>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <nav>
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
              <button
                class="nav-link active"
                id="nav-home-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-home"
                type="button"
                role="tab"
                aria-controls="nav-home"
                aria-selected="true"
              >
                Products
              </button>
              <button
                class="nav-link"
                id="nav-address-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-address"
                type="button"
                role="tab"
                aria-controls="nav-address"
                aria-selected="false"
              >
                Address
              </button>
              <button
                class="nav-link"
                id="nav-summary-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-summary"
                type="button"
                role="tab"
                aria-controls="nav-summary"
                aria-selected="false"
              >
                Summary
              </button>
            </div>
          </nav>
          {/* tab augšas beigas, sākas product daļa */}
          <div className="tab-content" id="nav-tabContent">
          <div
            className="tab-pane fade show active"
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
          >
            <CartProduct />
          </div>
          <div
            className="tab-pane fade"
            id="nav-address"
            role="tabpanel"
            aria-labelledby="nav-address-tab"
          >
            <CartAddress />
          </div>
          <div
            className="tab-pane fade"
            id="nav-summary"
            role="tabpanel"
            aria-labelledby="nav-summary-tab"
          >
            <CartSummary />
          </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Cart;
