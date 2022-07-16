import classes from './Css/CartItem.module.css';


const CartItem = (props)=>{

    const price = `$${(+props.price).toFixed(2)}`;

    return (
      <div className={classes["cart-items"]}>
        <div className={classes.itemImage}>
          <img src={props.imagePath} alt={props.title} />
        </div>
        <div className={classes.itemDetails}>
          <h2>{props.title}</h2>
          <p>{props.author}</p>
          <div className={classes["items-actions"]}>
            <div className={classes["items-actions"]}>
              <h4>{price}</h4>
              <span className={classes.amount}>x {props.amountofItems} </span>
            </div>
            <div className={classes.IncDec}>
              <button onClick={props.onRemove}>−</button>
              <button onClick={props.onAdd}>+</button>
            </div>
          </div>
        </div>
      </div>
    );

};

export default CartItem;