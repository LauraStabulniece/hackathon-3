import CartQty from "./CartQty";

function CartProduct() {
  return (
    
      <div>
        <div className="row p-5">
          <div className="col-md-10 text-start">
            <table className="table">
              <thead>
                <tr className="cart-row">
                  <th scope="col"></th>
                  <th scope="col"></th>
                  <th scope="col">Product</th>
                  <th scope="col">Qty</th>
                  <th scope="col">Price</th>
                  <th scope="col">Total</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody className="cart-items">
                <tr className="cart-row">
                  <th scope="row">1</th>
                  <td>
                    <img
                      src="/images/1bali.jpg"
                      width="90"
                      height="90"
                      alt=""
                    />
                  </td>
                  <td>Bali</td>
                  <td>
                    <div>
                      <CartQty />
                    </div>
                  </td>
                  <td className="price">2000</td>
                  <td className="product-total-price">2000</td>
                  <td>
                    <button className="btn btn-secondary">Remove</button>
                  </td>
                </tr>
                <tr id="product-2" className="cart-row">
                  <th scope="row">2</th>
                  <td>
                    <img
                      src="/images/7alpine.jpg"
                      width="90"
                      height="90"
                      alt=""
                    />
                  </td>
                  <td>Winter paradise</td>
                  <td>
                    <div>
                    <CartQty />
                    </div>
                  </td>
                  <td className="price">
                    550
                  </td>
                  <td>550</td>
                  <td>
                    <button className="btn btn-secondary">Remove</button>
                  </td>
                </tr>
                <tr id="product-3" className="cart-row">
                  <th scope="row">3</th>
                  <td>
                    <img
                      src="/images/3.jpg"
                      width="90"
                      height="90"
                      alt=""
                    />
                  </td>
                  <td>Spa Weekend in Saaremaa</td>
                  <td>
                    <div>
                    <CartQty />
                    </div>
                  </td>
                  <td>200</td>
                  <td>200</td>
                  <td>
                    <button className="btn btn-secondary">Remove</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-md-10 d-flex justify-content-end">
            <h4>
              Total:
              <span className="p-1">2750,-</span>
            </h4>
          </div>
        </div>
      </div>
    
  );
}
export default CartProduct;
