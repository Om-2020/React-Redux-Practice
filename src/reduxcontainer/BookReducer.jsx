import {buy_book}  from "./Booktype";

const initialstate = {
    NumberofBooks :200,
}

const BookReducer = (state=initialstate,action) =>{
    switch (action.type) {
        case buy_book: return{
            ...state, NumberofBooks : state.NumberofBooks-1
        }
        default: return state
            
    }

}
export default BookReducer;