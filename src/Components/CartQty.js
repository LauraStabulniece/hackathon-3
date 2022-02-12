function CartQty() {
    return (
      <div className="col-md-5 d-flex">
        <button className="btn qt-minus">
          -<i className="fas fa-plus"></i>
        </button>
        <input
          min="0"
          name="quantity"
          value="1"
          type="number"
          className="form-control form-control-sm quantity-input qt"
        />
        <button className="btn qt-plus">
          +<i className="fas fa-plus"></i>
        </button>
      </div>
    );
  }
  
  export default CartQty;