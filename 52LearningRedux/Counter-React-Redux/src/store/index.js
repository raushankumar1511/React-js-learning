import {createStore} from 'redux';

const INITIAL_VALUE = {
  counter : 0,
  privacy : false,
}
//creating reducer
const counterReducer = (store = INITIAL_VALUE, action) =>{
  let newStore = store;
  if(action.type === 'INCREAMENT'){
    newStore = {...store, 
      counter : store.counter + 1
    }
  }
  else if(action.type === 'DECREAMENT'){
    newStore = {...store,
      counter : store.counter - 1
    }
  }
 else if(action.type === 'ADD'){
    newStore = {...store,
      counter : store.counter + action.paylod
    }
  }
  else if(action.type === 'SUBTRACT'){
    newStore = {...store,
      counter : store.counter - action.paylod
    }
  }
  else if(action.type == 'TOGGLE_PRIVACY')
  {
      newStore = {...store,privacy : !store.privacy}
  }
  else if(action.type === 'RESET'){
    newStore = {
      counter : 0
    }
  }
  return newStore;
}

const counterStore = createStore(counterReducer);

export default counterStore;