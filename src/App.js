import React from 'react';
import { Provider } from 'react-redux';
import BookContainer from './reduxcontainer/BookContainer';
import store from "./reduxcontainer/Store";

function App() {
  return (
    <Provider store={store}>
       <h1 style={{color:"red"}}>Hii, Om We are Practicing React-Redux</h1>
       <div>
        <BookContainer/>
        
       </div>
    </Provider>
  );
}

export default App;
