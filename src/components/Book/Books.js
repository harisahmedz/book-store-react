import BooksSummary from './BooksSummary'
import React from 'react';

import ShowBook from './ShowBook';

const Books = ()=>{
    return(
        <React.Fragment>
            <BooksSummary/>
            <ShowBook/>
        </React.Fragment>
    )
}
export default Books;