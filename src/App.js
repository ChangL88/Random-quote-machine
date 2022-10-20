import React from 'react';
import Main from './redux/Main';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'
import {  Quotes, SelectQuote, RandomColor } from './redux/action';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css'

export const store = configureStore({
    reducer: { Quotes, SelectQuote, RandomColor},
  })

function App() {
  return (
    <div className="App">
      <Provider store={store}>
            <div className="App">
                <Main />
            </div>
        </Provider>
    </div>
  );
}

export default App;