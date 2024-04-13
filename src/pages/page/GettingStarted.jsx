import React from 'react';
import { Typography, Paper, Grid, Box, Card, CardMedia } from '@mui/material';

import GettingStarted1 from "../../assets/getstartedmetamask.png"
import GettingStarted2 from "../../assets/getstartedmetamask2.png"
import GettingStarted3 from "../../assets/getstartedmetamask3.png"
import GettingStarted4 from "../../assets/getstartedmetamask4.png"
import GettingStarted5 from "../../assets/getstartedmetamask5.png"
import GettingStarted6 from "../../assets/getstartedmetamask6.png"
import GettingStarted7 from "../../assets/getstartedmetamask7.png"
import GettingStarted8 from "../../assets/getstartedmetamask8.png"
import GettingStarted9 from "../../assets/getstartedmetamask9.png"


const GettingStarted = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 2 }}>
          <Typography variant="body1" fontWeight="bold" color="#000000" paragraph sx={{fontSize: {xs: '1rem', sm: '1.25rem', md: '1.5rem', lg: '1.75rem', xl: '2rem'},fontFamily:'monospace'}}>
              Getting Started with Metamask After Installation
            </Typography>
           
          
            <Typography variant="body1" paragraph sx={{ fontSize:  {xs: '0.75rem', sm: '1rem', md: '1.25rem', lg: '1.5rem', xl: '1.75rem'}, color: '#000000', mt:6 }} style={{ textAlign: 'justify',fontFamily:'monospace' }}>
            
            <strong>Step 1:</strong> Once installation is complete this page will be displayed. Click on the Get Started button.
            <br/>
            </Typography>
            <Card elevation={3} sx={{mt:2,mb:2}}>
            <CardMedia
              component="img"
              
              sx={{ height: 400, width: '100%', objectFit: 'contain' }}
              image={GettingStarted1}
              alt="Install in Getting Started image"
              
            />
          </Card>

          <Typography variant="body1" paragraph sx={{ fontSize:  {xs: '0.75rem', sm: '1rem', md: '1.25rem', lg: '1.5rem', xl: '1.75rem'}, color: '#000000', mt:6 }} style={{ textAlign: 'justify',fontFamily:'monospace' }}>
            <br/>
            <strong>Step 2:</strong> This is the first time creating a wallet, so click the Create a Wallet button. If there is already a wallet then import the already created using the Import Wallet button.
            <br/>
            </Typography>
            <Card elevation={3} sx={{mt:2,mb:2}}>
            <CardMedia
              component="img"
              sx={{ height: 400, width: '100%', objectFit: 'contain' }}
              image={GettingStarted2}
              alt="Install in Getting Started image"
              
            />
          </Card>

          <Typography variant="body1" paragraph sx={{ fontSize:  {xs: '0.75rem', sm: '1rem', md: '1.25rem', lg: '1.5rem', xl: '1.75rem'}, color: '#000000', mt:6 }} style={{ textAlign: 'justify',fontFamily:'monospace' }}>
            <br/>
            <strong>Step 3:</strong> Click I Agree button to allow data to be collected to help improve MetaMask or else click the No Thanks button. The wallet can still be created even if the user will click on the No Thanks button.
            <br/>
            </Typography>
            <Card elevation={3} sx={{mt:2,mb:2}}>
            <CardMedia
              component="img"
              sx={{ height: 400, width: '100%', objectFit: 'contain' }}
              image={GettingStarted3}
              alt="Install in Getting Started image"
              
            />
          </Card>

          <Typography variant="body1" paragraph sx={{ fontSize:  {xs: '0.75rem', sm: '1rem', md: '1.25rem', lg: '1.5rem', xl: '1.75rem'}, color: '#000000', mt:6 }} style={{ textAlign: 'justify',fontFamily:'monospace' }}>
            <br/>
            <strong>Step 4:</strong> Create a password for your wallet. This password is to be entered every time the browser is launched and wants to use MetaMask. A new password needs to be created if chrome is uninstalled or if there is a switching of browsers. In that case, go through the Import Wallet button. This is because MetaMask stores the keys in the browser. Agree to Terms of Use.
            <br/>
            </Typography>
            <Card elevation={3} sx={{mt:2,mb:2}}>
            <CardMedia
              component="img"
              sx={{ height: 400, width: '100%', objectFit: 'contain' }}
              image={GettingStarted4}
              alt="Install in Getting Started image"
              
            />
          </Card>

          <Typography variant="body1" paragraph sx={{ fontSize:  {xs: '0.75rem', sm: '1rem', md: '1.25rem', lg: '1.5rem', xl: '1.75rem'}, color: '#000000', mt:6 }} style={{ textAlign: 'justify',fontFamily:'monospace' }}>
            <br/>
            <strong>Step 5:</strong> Click on the dark area which says Click here to reveal secret words to get your secret phrase. 

            <strong>Step 6:</strong> This is the most important step. Back up your secret phrase properly. Do not store your secret phrase on your computer. Please read everything on this screen until you understand it completely before proceeding. The secret phrase is the only way to access your wallet if you forget your password. Once done click the Next button.
            <br/>
            </Typography>
            <Card elevation={3} sx={{mt:2,mb:2}}>
            <CardMedia
              component="img"
              sx={{ height: 400, width: '100%', objectFit: 'contain' }}
              image={GettingStarted5}
              alt="Install in Getting Started image"
              
            />
          </Card>

          <Typography variant="body1" paragraph sx={{ fontSize:  {xs: '0.75rem', sm: '1rem', md: '1.25rem', lg: '1.5rem', xl: '1.75rem'}, color: '#000000', mt:6 }} style={{ textAlign: 'justify',fontFamily:'monospace' }}>
            <br/>
            <strong>Step 7:</strong> Click the buttons respective to the order of the words in your seed phrase. In other words, type the seed phrase using the button on the screen. If done correctly the Confirm button should turn blue.
            <br/>
            </Typography>
            <Card elevation={3} sx={{mt:2,mb:2}}>
            <CardMedia
              component="img"
              sx={{ height: 400, width: '100%', objectFit: 'contain' }}
              image={GettingStarted6}
              alt="Install in Getting Started image"
              
            />
          </Card>

          <Typography variant="body1" paragraph sx={{ fontSize:  {xs: '0.75rem', sm: '1rem', md: '1.25rem', lg: '1.5rem', xl: '1.75rem'}, color: '#000000', mt:6 }} style={{ textAlign: 'justify',fontFamily:'monospace' }}>
            <br/>
            <strong>Step 8:</strong> Click the Confirm button. Please follow the tips mentioned.
            <br/>
            </Typography>
            <Card elevation={3} sx={{mt:2,mb:2}}>
            <CardMedia
              component="img"
              sx={{ height: 400, width: '100%', objectFit: 'contain' }}
              image={GettingStarted7}
              alt="Install in Getting Started image"
              
            />
          </Card>

          <Typography variant="body1" paragraph sx={{ fontSize:  {xs: '0.75rem', sm: '1rem', md: '1.25rem', lg: '1.5rem', xl: '1.75rem'}, color: '#000000', mt:6 }} style={{ textAlign: 'justify',fontFamily:'monospace' }}>
            <br/>
            <strong>Step 9:</strong>: One can see the balance and copy the address of the account by clicking on the Account 1 area.
            <br/>
            </Typography>
            <Card elevation={3} sx={{mt:2,mb:2}}>
            <CardMedia
              component="img"
              sx={{ height: 400, width: '100%', objectFit: 'contain' }}
              image={GettingStarted8}
              alt="Install in Getting Started image"
              
            />
          </Card>

          <Typography variant="body1" paragraph sx={{ fontSize:  {xs: '0.75rem', sm: '1rem', md: '1.25rem', lg: '1.5rem', xl: '1.75rem'}, color: '#000000', mt:6 }} style={{ textAlign: 'justify',fontFamily:'monospace' }}>
            <br/>
            <strong>Step 10:</strong> One can access MetaMask in the browser by clicking the Foxface icon on the top right. If the Foxface icon is not visible, then click on the puzzle piece icon right next to it.
            <br/>
            </Typography>
            <Card elevation={3} sx={{mt:2,mb:2}}>
            <CardMedia
              component="img"
              sx={{ height: 400, width: '100%', objectFit: 'contain' }}
              image={GettingStarted9}
              alt="Install in Getting Started image"
              
            />
          </Card>
            
            

          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default GettingStarted;
