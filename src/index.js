import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, Link} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import HomePage from './WebPage/HomePage';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <BrowserRouter>
    <Routes>
        <Route path="/app" element={<App/>}/>
        <Route path="/" element={<HomePage/>}/>
        <Route path="*" element={<Navigate to="/" replace/>}/>
    </Routes>
  </BrowserRouter>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
