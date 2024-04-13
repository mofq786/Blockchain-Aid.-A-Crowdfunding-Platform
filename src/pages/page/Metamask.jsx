import React from 'react';
import { Typography, Paper, Grid, Box, Card, CardMedia } from '@mui/material';
import MetaMask from "../../assets/Metamask.png";

const Metamask = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 2 }}>
          <Typography variant="body1" fontWeight="bold" color="#000000" paragraph sx={{fontSize: {xs: '1rem', sm: '1.25rem', md: '1.5rem', lg: '1.75rem', xl: '2rem'},fontFamily:'monospace'}}>
              Getting started with MetaMask
            </Typography>
            <Card elevation={3} sx={{mt:2,mb:2}}>
            <CardMedia
              component="img"
              sx={{ height: 400, width: '100%', objectFit: 'contain' }}
              image={MetaMask}
              alt="MetaMask Image"
              
            />
          </Card>
          
          <Typography variant="body1" paragraph sx={{ fontSize:  {xs: '0.75rem', sm: '1rem', md: '1.25rem', lg: '1.5rem', xl: '1.75rem'}, color: '#000000', mt:6 }} style={{ textAlign: 'justify',fontFamily:'monospace' }}>
              <strong>What is MetaMask?</strong><br/>
              Public blockchains like Ethereum are the next evolution of Internet databases, and MetaMask is the next evolution of the browser.
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize:  {xs: '0.75rem', sm: '1rem', md: '1.25rem', lg: '1.5rem', xl: '1.75rem'}, color: '#000000', mt:6 }} style={{ textAlign: 'justify',fontFamily:'monospace' }}>
              MetaMask is a web browser extension and mobile app that allows you to manage your Ethereum private keys. By doing so, it serves as a wallet for Ether and other tokens, and allows you to interact with decentralized applications, or dapps. Unlike some wallets, MetaMask keeps no information on you: not your email address, not your password, and not your Secret Recovery Phrase or other private keys. You retain all power over your crypto-identity.
            </Typography>

            <Box mt={2} style={{textAlign:'center'}}>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/YVgfHZMFFFQ?si=112KUBRpnYPVVyaR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Metamask;
