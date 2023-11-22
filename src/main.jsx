import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {NextUIProvider} from "@nextui-org/react";
import {BrowserRouter} from "react-router-dom";
import { register as registerSW } from 'swiper/element/bundle';


registerSW();
ReactDOM.createRoot(document.getElementById('root')).render(
  <NextUIProvider>
  <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>
  </NextUIProvider>
)
