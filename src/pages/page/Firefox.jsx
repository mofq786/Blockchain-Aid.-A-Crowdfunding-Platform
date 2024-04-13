import React from 'react';
import { Typography, Paper, Grid, Box, Card, CardMedia } from '@mui/material';
import Firefox1 from "../../assets/Install_MetaMask_Firefox_1.gif"
import Firefox2 from "../../assets/Install_MetaMask_Firefox_2.png"


const Firefox = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 2 }}>
          <Typography variant="body1" fontWeight="bold" color="#000000" paragraph sx={{fontSize: {xs: '1rem', sm: '1.25rem', md: '1.5rem', lg: '1.75rem', xl: '2rem'},fontFamily:'monospace'}}>
              Install Metamask on Firefox
            </Typography>
            {/* <Card elevation={3} sx={{mt:2,mb:2}}>
            <CardMedia
              component="img"
              height="400"
              image={MetaMask}
              alt="MetaMask Image"
              
            />
          </Card> */}
          
          <Typography variant="body1" paragraph sx={{ fontSize:  {xs: '0.75rem', sm: '1rem', md: '1.25rem', lg: '1.5rem', xl: '1.75rem'}, color: '#000000', mt:6 }} style={{ textAlign: 'justify',fontFamily:'monospace' }}>
            
             1.  Visit <a href="https://metamask.io/" >https://metamask.io/</a><br/>
             2.  Click on "Download".<br/>
             3.  Hit "Install MetaMask for Firefox".<br/>
             4.  In the new window that opens, click on "Add to Firefox"<br/>
            
            <br/>
            </Typography>
            <Card elevation={3} sx={{mt:2,mb:2}}>
            <CardMedia
              component="img"
              sx={{ height: 400, width: '100%', objectFit: 'contain' }}
              image={Firefox1}
              alt="Install in Firefox image"
              
            />
          </Card>
          <Typography variant="body1" paragraph sx={{ fontSize:  {xs: '0.75rem', sm: '1rem', md: '1.25rem', lg: '1.5rem', xl: '1.75rem'}, color: '#000000', mt:6 }} style={{ textAlign: 'justify',fontFamily:'monospace' }}>
            <br/>
            
            5.  On the pop up, click “Add” <br/>
            
            <br/>
            </Typography>
            <Card elevation={3} sx={{mt:2,mb:2}}>
            <CardMedia
              component="img"
              
              sx={{ height: 400, width: '100%', objectFit: 'contain' }}
              image={Firefox2}
              alt="Install in Firefox Image"
              
            />
          </Card>
          <Typography variant="body1" paragraph sx={{ fontSize:  {xs: '0.75rem', sm: '1rem', md: '1.25rem', lg: '1.5rem', xl: '1.75rem'}, color: '#000000', mt:6 }} style={{ textAlign: 'justify',fontFamily:'monospace' }}>
            <br/>
                <strong>NOTE: Don't be alarmed by the fact that the Firefox plugin is listed as being published by "danfinlay, kumavis" -- they're a couple of the main minds behind MetaMask!</strong><br/>
                
                <br/>
            After adding MetaMask Extension, MetaMask will automatically open. You can also make sure it's easily accessible in your toolbar by clicking the jigsaw icon in the top-right of the screen, and hitting the pin icon. <br/>
            </Typography>

          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Firefox;
