import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom"
import {Provider} from "react-redux"
import thunk from "redux-thunk"
import reducers from "./redux/reducers/indexReducer"
import { applyMiddleware } from 'redux'
import {configureStore} from "@reduxjs/toolkit"
import { composeWithDevTools } from 'redux-devtools-extension'


const composedEnchancer = composeWithDevTools(applyMiddleware(thunk))
const store = configureStore({reducer:reducers}, composedEnchancer)
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
