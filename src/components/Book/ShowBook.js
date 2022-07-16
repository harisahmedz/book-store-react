import React, { useState, useEffect } from 'react';
import BookItem from "./BooksItem";
import classes from './Css/BookItem.module.css'


const ShowBook = ()=>{
    const [BooksData, setBooksData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState(null);
    useEffect(() => {
        const FetchBooks =async()=>{
            const response = await fetch ('https://react-app-38514-default-rtdb.firebaseio.com/bookStore.json');
            if(!response.ok){
                throw new Error("Something is Wrong");
            }
            const responseData = await response.json();
            const LoadedBooks = [];
            for(const key in responseData){
                LoadedBooks.push({
                    id:key,
                    title: responseData[key].title,
                    author : responseData[key].author,
                    price:responseData[key].price,
                    imagePath:responseData[key].imagePath,
                })
            } 
            setBooksData(LoadedBooks);
            setIsLoading(false);
        }
    
        FetchBooks().catch((error)=>{
            setIsLoading(false);
            setHttpError(error.message);
        });
    }, [])
    const BookList = BooksData.map((book)=>(
        <BookItem 
        key={book.id}
        id = {book.id}
        title={book.title}
        author={book.author}
        price ={book.price}
        imagePath= {book.imagePath}
         />
    ));
    if(httpError){
        return (<div className={classes["grid-container"]}>
            <p>{httpError}</p>
            </div>)
    }

    return(<React.Fragment>
             <div className={classes["grid-container"]}>
        {!isLoading ? BookList : <p>Loading...</p>}
            </div>
      </React.Fragment>
    )
};

export default ShowBook;