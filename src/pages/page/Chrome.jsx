import React from 'react';
import { Typography, Paper, Grid, Box, Card, CardMedia } from '@mui/material';
import Chrome1 from "../../assets/Install_MetaMask_Chrome_1.png"
import Chrome2 from "../../assets/Install_MetaMask_Chrome_2.png"


const Chrome = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 2 }}>
          <Typography variant="body1" fontWeight="bold" color="#000000" paragraph sx={{fontSize: {xs: '1rem', sm: '1.25rem', md: '1.5rem', lg: '1.75rem', xl: '2rem'},fontFamily:'monospace'}}>
              Install Metamask on Chrome
            </Typography>
        
          
          <Typography variant="body1" paragraph sx={{ fontSize:  {xs: '0.75rem', sm: '1rem', md: '1.25rem', lg: '1.5rem', xl: '1.75rem'}, color: '#000000', mt:6 }} style={{ textAlign: 'justify',fontFamily:'monospace' }}>
            1.  Visit <a href="https://metamask.io/" >https://metamask.io/</a> <br/>
            2.  Hit "Download" in the menu bar.<br/>
            3.  Click “Install MetaMask for Chrome”. You will be directed to the Chrome Web Store.<br/>
            </Typography>
            <Card elevation={3} sx={{mt:2,mb:2}}>
            <CardMedia
              component="img"
              sx={{ height: 400, width: '100%', objectFit: 'contain' }}
              image={Chrome1}
              alt="Install in Chrome image"
              
            />
          </Card>
          <Typography variant="body1" paragraph sx={{ fontSize:  {xs: '0.75rem', sm: '1rem', md: '1.25rem', lg: '1.5rem', xl: '1.75rem'}, color: '#000000', mt:6 }} style={{ textAlign: 'justify',fontFamily:'monospace' }}>
            4.  Click “Add to Chrome” <br/>
            5.  On the pop up, click “Add extension”. <br/>
            </Typography>
            <Card elevation={3} sx={{mt:2,mb:2}}>
            <CardMedia
              component="img"
              sx={{ height: 400, width: '100%', objectFit: 'contain' }}
              image={Chrome2}
              alt="Install in Chrome Image"
              
            />
          </Card>
          <Typography variant="body1" paragraph sx={{ fontSize:  {xs: '0.75rem', sm: '1rem', md: '1.25rem', lg: '1.5rem', xl: '1.75rem'}, color: '#000000', mt:6 }} style={{ textAlign: 'justify',fontFamily:'monospace' }}>
            After adding MetaMask Extension, MetaMask will automatically open. You can also make sure it's easily accessible in your toolbar by clicking the jigsaw icon in the top-right of the screen, and hitting the pin icon. <br/>
            </Typography>

          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Chrome;
