function CartAddress() {
  return (
    <div>
      <form>
        <div className="row m-3">
          <div className="col-md-6 px-3">
            <div className="form-outline">
              <label className="form-label" for="Message">
                Shipping address
              </label>
              <textarea
                className="form-control"
                id="message"
                rows="5"
              ></textarea>
            </div>
          </div>
          <div className="col-md-6 px-3">
            <div className="form-outline">
              <label className="form-label" for="Message">
                Billing address
              </label>
              <textarea
                className="form-control"
                id="message"
                rows="5"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="row px-5">
          <div className="col-md-12 d-flex justify-content-end">
            <button className="btn btn-success">Add Addresses</button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default CartAddress;
