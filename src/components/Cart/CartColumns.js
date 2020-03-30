import React from "react";

export default function CartColumns() {
  return (
    <div className="container-fluid text-center d-lg-block mt-5 mb-3">
      <div className="row">
        <div className="col-10 xm-auto col-lg-2">
          <h4 className="text-uppercase">Products</h4>
        </div>
        <div className="col-10 xm-auto col-lg-2">
          <h4 className="text-uppercase">Name of Product</h4>
        </div>
        <div className="col-10 xm-auto col-lg-2">
          <h4 className="text-uppercase">Price</h4>
        </div>
        <div className="col-10 xm-auto col-lg-2">
          <h4 className="text-uppercase">Quantity</h4>
        </div>
        <div className="col-10 xm-auto col-lg-2">
          <h4 className="text-uppercase">Remove</h4>
        </div>
        <div className="col-10 xm-auto col-lg-2">
          <h4 className="text-uppercase">Total</h4>
        </div>
      </div>
    </div>
  );
}
