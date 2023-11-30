import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {NextUIProvider} from "@nextui-org/react";
import { register as registerSW } from 'swiper/element/bundle';


registerSW();
ReactDOM.createRoot(document.getElementById('root')).render(
  <NextUIProvider>
  <React.StrictMode>
    <main className="light text-foreground bg-background">
        <App  />
    </main>
  </React.StrictMode>
  </NextUIProvider>
)
