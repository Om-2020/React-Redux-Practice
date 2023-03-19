import React from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import purchase_book from './BookAction';


function BookContainer() {

    const noofbooks = useSelector(state => state.NumberofBooks) // useSelector Hooks ke helps ham state ko access kar sakate hai
    const dispatch =  useDispatch();
    //console.log(noofbooks);
    return (
        <>
            <div>BookContainer</div>
            <h2>No of Books = {noofbooks}</h2>
           
            <div>
                <button onClick={()=>(dispatch(purchase_book()))}>Buy Book</button>
            </div>

        </>
        
    )
}

export default BookContainer;