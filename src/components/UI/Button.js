import classes from './Button.module.css';

const Button = (props)=>{
    return(
        <button className={classes.btn} disabled={props.disabled} onClick={props.onClick}>
            {props.children}
        </button>
    );
}

export default Button;