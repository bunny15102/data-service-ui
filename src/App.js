import React from 'react';
import './App.css';
import BulkExport from './components/BulkExport';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>User Data</h1>
      </header>
      <BulkExport /> 
      <ToastContainer position="top-right" />
    </div>
  );
}

export default App;
