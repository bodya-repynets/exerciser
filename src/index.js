import React from 'react'
import  ReactDOM from 'react-dom/client'
import './index.css'
import AppContext from './context';
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <AppContext/>
    </React.StrictMode>
)