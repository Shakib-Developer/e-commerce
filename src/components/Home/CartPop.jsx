import React from "react";

const CartPop = ({
  cartProducts,
  removeFromCart,
  addToCart,
  removeProduct,
}) => {
  return (
    <div className="cart-popup border mt-3 p-2">
      <h5 className="text-center">Cart List</h5>
      <ul className="cart-list">
        {cartProducts.map((product, index) => (
          <li key={index}>
            {/* Display product details */}
            <div>
              <img className="cart-img" src={product.img1} alt="" />
              <p>{product.title}</p>
              <p>${product.price}.00</p>
            </div>

            {/* Quantity controls */}
            <div>
              <button
                className="cart-dec"
                onClick={() => removeFromCart(product.id)}
              >
                -
              </button>
              <span className="mx-2">{product.quantity}</span>
              <button
                className="cart-inc"
                onClick={() => addToCart(null, product)}
              >
                +
              </button>
              <button
                className="ms-2 btn btn-sm btn-outline-danger"
                onClick={() => removeProduct(product.id)}
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartPop;
