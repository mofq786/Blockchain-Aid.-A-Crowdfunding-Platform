import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import "./config/firebase-config"; 
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Create a theme with the desired font
const theme = createTheme({
  typography: {
    fontFamily: 'monospace', // Use the imported font
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ThemeProvider>
);
