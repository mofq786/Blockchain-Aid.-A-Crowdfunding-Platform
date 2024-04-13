import React from 'react';
import { Typography, Paper, Grid, Box, Card, CardMedia } from '@mui/material';
import Brave1 from "../../assets/Install_MetaMask_Brave_1.png"
import Brave2 from "../../assets/Install_MetaMask_Brave_2.png"


const Brave = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 2 }}>
          <Typography variant="body1" fontWeight="bold" color="#000000" paragraph sx={{fontSize: {xs: '1rem', sm: '1.25rem', md: '1.5rem', lg: '1.75rem', xl: '2rem'},fontFamily:'monospace'}}>
              Install Metamask on Brave
              
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
             3. Click on "Install MetaMask for Chrome". Ignore the alarm bells that are ringing: the reason it says "Chrome" here is because Brave is a Chromium-based browser and shares the Web Store with Chrome itself. 
             4.  In the Chrome Store that opens, click 'Add to Brave'.
            
            <br/>
            </Typography>
            <Card elevation={3} sx={{mt:2,mb:2}}>
            <CardMedia
              component="img"
              sx={{ height: 400, width: '100%', objectFit: 'contain' }}
              image={Brave1}
              alt="Install in Brave image"
              
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
              image={Brave2}
              alt="Install in Brave Image"
              
            />
          </Card>
          <Typography variant="body1" paragraph sx={{ fontSize:  {xs: '0.75rem', sm: '1rem', md: '1.25rem', lg: '1.5rem', xl: '1.75rem'}, color: '#000000', mt:6 }} style={{ textAlign: 'justify',fontFamily:'monospace' }}>
            <br/>
            After adding MetaMask Extension, you’ll return to your browser page. MetaMask will appear on your browser. You may click on it to open MetaMask. <br/>
            </Typography>

          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Brave;
