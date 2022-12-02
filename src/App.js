import React from 'react';
import AccountRoute from './routes/AccountRoute';
import './App.css';
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <>
    <ToastContainer position='top-center' />
    <AccountRoute />
    </>
  );
}

export default App;