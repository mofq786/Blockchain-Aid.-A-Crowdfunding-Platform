// MetaMaskGuidePage.js

import React from 'react';
import { Container, Typography, Button, Link, Paper, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import CssBaseline from "@mui/material/CssBaseline";
import NavBar from "../components/NavBar";

const Guide = () => {
  return (
    <Box className="App" sx={{background: "linear-gradient(to bottom right, #000099 0%, #000099 100%)"}}>
      <NavBar />
      {/* <Stack direction="row" spacing={2}></Stack> */}
      <CssBaseline />
    <Container maxWidth="md" sx={{ mt: 4 }}>
        
        <Typography variant="h3" color="primary" gutterBottom>
          MetaMask Installation and Usage Guide
        </Typography>
        <Typography variant="body1">
          Welcome to the MetaMask Installation and Usage Guide. Follow the steps below to get started:
        </Typography>

        <Typography variant="h5" mt={3} color="primary">
          Step 1: Install MetaMask
        </Typography>
        <Typography variant="body1">
          Visit the official MetaMask website at{' '}
          <Link href="https://metamask.io/" target="_blank" rel="noopener noreferrer" color="primary">
            https://metamask.io/
          </Link>{' '}
          and follow the instructions to install the MetaMask extension for your browser.
        </Typography>

        <Typography variant="h5" mt={3} color="primary">
          Step 2: Create a Wallet
        </Typography>
        <Typography variant="body1">
          Once MetaMask is installed, click on the extension icon in your browser's toolbar. Follow the prompts to create
          a new wallet. Make sure to save your secret backup phrase in a secure place.
        </Typography>

        <Typography variant="h5" mt={3} color="primary">
          Step 3: Connect to our DApp
        </Typography>
        <Typography variant="body1">
          Visit our DApp and navigate to the section where MetaMask integration is required. Click the "Connect with
          MetaMask" button, and approve the connection in the MetaMask pop-up.
        </Typography>

        <Typography variant="h5" mt={3} color="primary">
          Step 4: Transaction Confirmation
        </Typography>
        <Typography variant="body1">
          When interacting with our DApp, MetaMask may prompt you to confirm transactions. Review the details and click
          "Confirm" to proceed.
        </Typography>

        <Typography variant="body1" mt={4}>
          Congratulations! You've successfully installed MetaMask and connected it to our DApp. If you encounter any
          issues, feel free to reach out for assistance.
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 4 }}>
          <Button
            component={RouterLink}
            to="/"
            variant="contained"
            color="primary"
            sx={{ backgroundColor: '#4caf50', '&:hover': { backgroundColor: '#45a049' } }}
          >
            Back to Home
          </Button>
        </Box>
      
    </Container>
    </Box>
  );
};

export default Guide;
