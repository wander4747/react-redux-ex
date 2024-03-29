import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import CounterReducer from './counter/CounterReducer'
import Counter from './counter/Counter';

const reducers = combineReducers({
    counter: CounterReducer
});

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <Counter initialValue="Teste" />
    </Provider>  ,
  document.getElementById('root')
);
