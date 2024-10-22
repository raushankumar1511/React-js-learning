const redux = require('redux');


const INITIAl_VALUE = {
  counter : 0,
}
const reducer = (store = INITIAl_VALUE, action) =>{
  let newStore = store;
  if(action.type === 'INCREAMENT'){
    newStore = {counter : store.counter + 1};
  }
  if(action.type === 'DECREAMENT'){
    newStore = {counter : store.counter - 1};
  }
  else if(action.type === 'ADDITION'){
    newStore = {counter : store.counter + action.payload.number};
  }
  return newStore;
}

//creating redux store
const store = redux.createStore(reducer);

const subscriber = ()  =>{
   const state = store.getState();
    console.log(state);
} 
 
store.subscribe(subscriber);

store.dispatch({type : 'INCREAMENT'});
store.dispatch({type : 'DECREAMENT'});
store.dispatch({type : 'INCREAMENT'});
store.dispatch({type : 'ADDITION' , payload : {number : 8}}); 
store.dispatch({type : 'DECREAMENT'});