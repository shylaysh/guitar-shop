import React from "react";

const CartItem = ({ item, value }) => {
  const { id, title, img, price, total, count } = item;
  const { increment, decrement, removeItem } = value;

  return (
    <div
      className="row my-4 text-capitalize text-center"
      style={{ fontSize: "1.4rem", fontFamily: "Cambria" }}
    >
      <div className="col-10 mx-auto col-lg-2">
        <img
          src={img}
          style={{ width: "7rem", height: "7rem" }}
          className="img-fluid"
          alt="product"
        ></img>
      </div>

      <div className="col-10 mx-auto col-lg-2 pt-5">
        <span className="d-lg-none">Product: </span> {title}
      </div>

      <div className="col-10 mx-auto col-lg-2 pt-5">
        <span className="d-lg-none">Price: </span> {price}
      </div>
      {/* ------- */}
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0 pt-5">
        <div className="d-flex justify-content-center">
          <div>
            <span className="btn btn-black mx-1" onClick={() => decrement(id)}>
              -
            </span>

            <span className="btn btn-black mx-1">{count}</span>

            <span className="btn btn-black mx-1" onClick={() => increment(id)}>
              +
            </span>
          </div>
        </div>
      </div>

      {/* --------- */}

      <div className="col-10 mx-auto col-lg-2 pt-5">
        <div className="cart-icon" onClick={() => removeItem(id)}>
          <i className="fas fa-trash fa-lg"></i>
        </div>
      </div>

      <div className="col-10 mx-auto col-lg-2 pt-5">
        <strong>Item Total: $ {total}</strong>
      </div>
    </div>
  );
};

export default CartItem;
