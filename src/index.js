import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import DataFetch from './components/DataFetch';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DataFetch />
  </React.StrictMode>
);

