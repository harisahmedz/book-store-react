import CartIcon from '../Cart/CartIcon';
import classes from './Css/HeaderCartButton.module.css';
import CartContext from '../../Store/cart-context';
import { useContext} from 'react';

const HeaderCartButton = (props)=>{
    const CartCtx = useContext(CartContext);
    const numberOfCartItems = CartCtx.items.reduce((currentNumber, item)=>{
        return currentNumber + item.amount;
    },0);


    return(
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}><CartIcon/></span>
            <span >Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    )
};

export default HeaderCartButton;