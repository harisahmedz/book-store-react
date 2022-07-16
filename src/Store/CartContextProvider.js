import CartContext from './cart-context';
import { useReducer } from 'react';


const defaultCartstate = {
    items:[],
    totalAmount:0
}

const cartReducer = (state, action)=>{
    if(action.type==="INPUT"){

        //
        const updatedAmount = state.totalAmount +(action.item.price*action.item.amount);
        
        const existingCartIndex = state.items.findIndex((item)=>
            item.id === action.item.id
        );
        const existingCartItem = state.items[existingCartIndex];
        let updatedItems;
        if(existingCartItem){
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount+1
            }
           updatedItems=[...state.items];
           updatedItems[existingCartIndex]=updatedItem; 
        }
        else{
            updatedItems = state.items.concat(action.item);
        }

        return {
            items:updatedItems,
            totalAmount:updatedAmount,
        }
    }
    if(action.type==="REMOVE"){
        const existingitemIndex = state.items.findIndex((item)=> item.id ===action.id);
        const existingItem = state.items[existingitemIndex];
        const updatedAmount = state.totalAmount - existingItem.price;
        let updatedItems;
        if(existingItem.amount ===1){
            updatedItems = state.items.filter(item =>item.id !==action.id);
        }
        else{
            const updatedItem = {...existingItem, amount:existingItem.amount-1}
            updatedItems = [...state.items];
            updatedItems[existingitemIndex]= updatedItem;
        }
        return{
            items:updatedItems,
            totalAmount:updatedAmount,
        }
    }
    if(action.type==="CLEAR"){
        return defaultCartstate;
    }
    return defaultCartstate;
}


const CartContextProvider = (props)=>{
    const [CartState, dispatchCartAction] = useReducer(cartReducer,defaultCartstate )
    const addItemHandler = (item)=>{
        dispatchCartAction({type:"INPUT",item: item});
    }
    const removeItemHandler = (id) =>{
        dispatchCartAction({type:"REMOVE", id:id});
    }
    const clearItemHandler=()=>{
        dispatchCartAction({type:"CLEAR"});
    }

    const cartContext = {
        items:CartState.items,
        amount:CartState.totalAmount,
        addItems:addItemHandler,
        removeItems:removeItemHandler,
        clearItems:clearItemHandler,
    }
    return(
    <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>

    )

};

export default CartContextProvider;