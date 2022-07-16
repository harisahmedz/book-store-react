
import React, {useContext} from 'react'
import classes from './Css/BookItem.module.css';
import Button from '../UI/Button';
import CartContext from '../../Store/cart-context';

const BookItem =(props)=>{
    const CartCtx = useContext(CartContext);
    const addtoCartHandler =()=>{
        CartCtx.addItems(
            {
                id:props.id,
                title:props.title,
                author:props.author,
                price:props.price,
                imagePath:props.imagePath,
                amount:1
            }
        )
    }

    return (

            <div className={classes["grid-item"]}>
                <img src={props.imagePath} alt={props.title} />
                <h3>{props.title} </h3>
                <p>{props.author}</p>
                <h4>$ {props.price}</h4>
                <Button onClick={addtoCartHandler}>Add to Cart</Button>
            </div>   

    );
}

export default BookItem;
