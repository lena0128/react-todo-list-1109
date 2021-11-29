import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


// the first argument in the render method is an element that either can be a string or a component
// we want to attach the first argument to the second argument - attach the app into the root div
// If the first argument is a component, behind the scene it is taking the component class, instatiating an object. On that object it is calling the render method. Whatever retrurns from that render method is what automatically attached here
ReactDOM.render(
  <React.StrictMode>
    <App />  
  </React.StrictMode>,
  document.getElementById('root')

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
