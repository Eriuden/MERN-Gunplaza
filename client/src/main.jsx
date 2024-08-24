import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom"
import {Provider} from "react-redux"
import {reducers} from "./redux/reducers/indexReducer"
import {configureStore} from "@reduxjs/toolkit"
import './index.css'

const store = configureStore({reducer: reducers})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
