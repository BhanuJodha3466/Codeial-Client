import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
// toast notification css
import 'react-toastify/dist/ReactToastify.min.css';

import App from './components/App';
import "./styles/index.css";
import { AuthProvider } from './providers/AuthProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>

    {/* Notification services */}
    <ToastContainer autoClose={5000} style={{marginBlockStart: "50px"}} newestOnTop={true} position={'top-right'}/>
  </React.StrictMode>
);


