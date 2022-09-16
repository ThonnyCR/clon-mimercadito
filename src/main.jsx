import React from 'react'
import ReactDOM from 'react-dom/client'
import { LangProvider } from './context/langContext';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick.js'
import 'slick-carousel/slick/slick-theme.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { Navbar } from './components/Navbar/Navbar';
import {Body} from './components/Body/Body'
import { Footer } from './components/Footer/Footer';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <LangProvider>
    <Navbar/>
    <Body/>
    <Footer/>
  </LangProvider>
  /* </React.StrictMode> */
)
