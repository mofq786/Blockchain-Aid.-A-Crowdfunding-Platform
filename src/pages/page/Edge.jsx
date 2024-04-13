import React from 'react';
import { Typography, Paper, Grid, Box, Card, CardMedia } from '@mui/material';
import Edge1 from "../../assets/Install_MetaMask_Edge_1.gif"
import Edge2 from "../../assets/Install_MetaMask_Edge_2.png"


const Edge = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 2 }}>
          <Typography variant="body1" fontWeight="bold" color="#000000" paragraph sx={{fontSize: {xs: '1rem', sm: '1.25rem', md: '1.5rem', lg: '1.75rem', xl: '2rem'},fontFamily:'monospace'}}>
              Install Metamask on Edge
            </Typography>
           
          
            <Typography variant="body1" paragraph sx={{ fontSize:  {xs: '0.75rem', sm: '1rem', md: '1.25rem', lg: '1.5rem', xl: '1.75rem'}, color: '#000000', mt:6 }} style={{ textAlign: 'justify',fontFamily:'monospace' }}>
            
             1.  Visit <a href="https://metamask.io/" >https://metamask.io/</a><br/>
             2.  Click on "Download".<br/>
             3.  Hit "Install MetaMask for Edge".<br/>
             4.  In the new window that opens, click "Get".<br/>
            
            <br/>
            </Typography>
            <Card elevation={3} sx={{mt:2,mb:2}}>
            <CardMedia
              component="img"
              sx={{ height: 400, width: '100%', objectFit: 'contain' }}
              image={Edge1}
              alt="Install in Edge image"
              
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
              image={Edge2}
              alt="Install in Edge Image"
              
            />
          </Card>
          <Typography variant="body1" paragraph sx={{ fontSize:  {xs: '0.75rem', sm: '1rem', md: '1.25rem', lg: '1.5rem', xl: '1.75rem'}, color: '#000000', mt:6 }} style={{ textAlign: 'justify',fontFamily:'monospace' }}>
            <br/>
            After adding MetaMask Extension, MetaMask will automatically open. You can also make sure it's easily accessible in your toolbar by clicking the jigsaw icon in the top-right of the screen, and hitting the pin icon. <br/>
            </Typography>

          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Edge;
