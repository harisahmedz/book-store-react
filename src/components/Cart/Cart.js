import { useContext, useState } from "react";
import CartContext from "../../Store/cart-context";
import Button from "../UI/Button";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import CheckOut from "./CheckOut";
import classes from "./Css/Cart.module.css";
import React from "react";

const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isdidSubmit, setIsdidSubmit] = useState(false);
  const CartCtx = useContext(CartContext);
  const HasItem = CartCtx.items.length > 0;
  const totalPrice = CartCtx.items.reduce((currentNumber, item) => {
    return currentNumber + parseInt(item.price * item.amount);
  }, 0);
  const cartItemAddHandler = (item) => {
    CartCtx.addItems(item);
  };
  const cartItemRemoveHandler = (id) => {
    CartCtx.removeItems(id);
  };

  const cartItem = CartCtx.items.map((item) => (
    <CartItem
      key={item.id}
      title={item.title}
      author={item.author}
      price={item.price}
      imagePath={item.imagePath}
      amountofItems={item.amount}
      onAdd={cartItemAddHandler.bind(null, item)}
      onRemove={cartItemRemoveHandler.bind(null, item.id)}
    />
  ));
  const totalAmount = `$${totalPrice.toFixed(2)}`;
  const confirmOrderHandler = async (userData) => {
    setIsSubmitting(true);
    await fetch(
      "https://react-app-38514-default-rtdb.firebaseio.com/BookStoreOrder.json",
      {
        method: "POST",
        body: JSON.stringify({ userData, orderedItems: CartCtx.items }),
      }
    );
    setIsSubmitting(false);
    setIsdidSubmit(true);
    CartCtx.clearItems();
  };

  const OrderHandler = () => {
    setIsCheckout(true);
  };
  const modalAction = (
    <React.Fragment>
      <div className={classes.actions}>
        <Button onClick={props.onClose}>Close</Button>
        {HasItem && <Button onClick={OrderHandler}>Order</Button>}
      </div>
    </React.Fragment>
  );
  const modalOrderAction = (
    <React.Fragment>
      {cartItem}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && (
        <CheckOut onConfirm={confirmOrderHandler} onCancel={props.onClose} />
      )}
      {!isCheckout && modalAction}
    </React.Fragment>
  );

  const isSubmittingModalContent = <p>Sending order data...</p>;

  const didSubmitModalContent = (
    <React.Fragment>
      <p>Succefully sent the order!</p>
      <div className={classes.actions}>
      <Button onClick={props.onClose}>Close</Button>
      </div>
    </React.Fragment>
  );
  return (
    <Modal onClose={props.onClose}>
      {!isSubmitting && !isdidSubmit && modalOrderAction}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && isdidSubmit && didSubmitModalContent}
    </Modal>
  );
};

export default Cart;
