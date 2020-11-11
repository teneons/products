import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';
import {Provider} from 'react-redux';


  const initState = []

  //func handler
  function productArr(state = initState, action) {
    if(action.type === 'ADD_PRODUCT') {
      return[
        ...state, action.payload
      ]
    } else if (action.type === 'REMOVE_PRODUCT') {
      return state;
    }
    return state
  }

  //create store
  const store = createStore(productArr);

  //out action
  // store.subscribe(() => {
  //   console.log(`REDUX STORE: ${store.getState()}`)
  // })

  //add item
  //store.dispatch({type: 'ADD_PRODUCT', payload: ''})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
