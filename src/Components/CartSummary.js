function CartSummary() {
  return (
    <div>
      <div>
        <div className="row p-2">
          <div className="col-sm-11 col-md-4">
            <div className="px-5 pt-5">
              <h5>Shipping address</h5>
              <div>
                <ul className="list-unstyled">
                  <li>Jānis Rainis</li>
                  <li>Pils iela 1</li>
                  <li>Rīga,</li>
                  <li>Latvia,</li>
                  <li>LV-1111</li>
                </ul>
              </div>
            </div>
            <div className="px-5">
              <h5>Billing address</h5>
              <div>
                <ul className="list-unstyled">
                  <li>Jānis Rainis</li>
                  <li>Pils iela 1</li>
                  <li>Rīga,</li>
                  <li>Latvia,</li>
                  <li>LV-1111</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-8 pt-3">
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
                      src="images/catecnack.jpg"
                      width="90"
                      height="90"
                      alt=""
                    />
                  </td>
                  <td>Bali</td>
                  <td>
                    <div className="col-md-5 d-flex">
                      <button className="btn btn-link px-2 quantity-change">
                        <i className="fas fa-minus"></i>
                      </button>
                      <input
                        id="product1Quantity"
                        min="0"
                        name="quantity"
                        value="1"
                        type="number"
                        className="form-control form-control-sm quantity-input"
                      />
                      <button className="btn btn-link px-2 quantity-change">
                        <i className="fas fa-plus"></i>
                      </button>
                    </div>
                  </td>
                  <td className="price">2000</td>
                  <td className="product-total-price">2000</td>
                  <td>
                    <button className="btn btn-danger">Remove</button>
                  </td>
                </tr>
                <tr id="product-2" className="cart-row">
                  <th scope="row">2</th>
                  <td>
                    <img
                      src="images/product-img/fancyCat.png"
                      width="90"
                      height="90"
                      alt=""
                    />
                  </td>
                  <td>Winter paradise</td>
                  <td>
                    <div className="col-md-5 d-flex">
                      <button className="btn btn-link px-2 quantity-change">
                        <i className="fas fa-minus"></i>
                      </button>
                      <input
                        id="product2Quantity"
                        min="0"
                        name="quantity"
                        value="1"
                        type="number"
                        className="form-control form-control-sm quantity-input"
                      />
                      <button className="btn btn-link px-2 quantity-change">
                        <i className="fas fa-plus"></i>
                      </button>
                    </div>
                  </td>
                  <td className="price" id="product-2-price">
                    550
                  </td>
                  <td>550</td>
                  <td>
                    <button className="btn btn-danger">Remove</button>
                  </td>
                </tr>
                <tr id="product-3" className="cart-row">
                  <th scope="row">3</th>
                  <td>
                    <img
                      src="images/cat_fish_800x.jpg"
                      width="90"
                      height="90"
                      alt=""
                    />
                  </td>
                  <td>Spa Weekend in Saaremaa</td>
                  <td>
                    <div className="col-md-5 d-flex">
                      <button className="btn btn-link px-2 quantity-change">
                        <i className="fas fa-minus"></i>
                      </button>
                      <input
                        id="product3Quantity"
                        min="0"
                        name="quantity"
                        value="1"
                        type="number"
                        className="form-control form-control-sm quantity-input"
                      />
                      <button className="btn btn-link px-2 quantity-change">
                        <i className="fas fa-plus"></i>
                      </button>
                    </div>
                  </td>
                  <td>200</td>
                  <td>200</td>
                  <td>
                    <button className="btn btn-danger">Remove</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="row">
          <div className="col-md-11 d-flex justify-content-end">
            <h2>Total: 2750,-</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CartSummary;
