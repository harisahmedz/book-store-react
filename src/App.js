import React,{useState} from 'react';

import Header from './components/Header/Header';
import Books from './components/Book/Books';
import Cart from './components/Cart/Cart';
import CartContextProvider from './Store/CartContextProvider';

function App() {
  const [showCart, setShowCart] = useState(false);
  const ShowCartHandler = ()=>{
    setShowCart(true);
  }
  const RemoveCartHandler = ()=>{
    setShowCart(false);
  }

  return (
    <CartContextProvider>
    {showCart &&<Cart onClose={RemoveCartHandler}/>}
    <Header onShowCart={ShowCartHandler}/>
    <Books/>
    </CartContextProvider>
    
  );
}

export default App;
