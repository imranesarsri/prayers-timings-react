import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ClockLoader } from 'react-spinners';

const RootComponent = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set a timeout to simulate the loading process
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the time (in milliseconds) as needed

    return () => clearTimeout(timeout);
  }, []);

  return (
    <React.StrictMode>
      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <ClockLoader color="#3ABEF9" size={200} />
        </div>
      ) : (
        <App />
      )}
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<RootComponent />);
