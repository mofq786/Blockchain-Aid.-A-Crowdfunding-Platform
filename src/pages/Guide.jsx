import React, { useState } from 'react';
import { Paper, Grid, Box, Typography, List, ListItem, ListItemText, Collapse, IconButton } from '@mui/material';
import CssBaseline from "@mui/material/CssBaseline";
import NavBar from "../components/NavBar";
import Footer from '../components/Footer';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Menu } from '@mui/icons-material';
import MetamaskPage from './page/Metamask';
import ChromePage from './page/Chrome';
import BravePage from './page/Brave';
import FirefoxPage from './page/Firefox';
import EdgePage from './page/Edge';
import GettingStartedPage from './page/GettingStarted';

const Guide = () => {
  const [open, setOpen] = useState(false);
  const [selectedPage, setSelectedPage] = useState('Metamask');
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Box className="App" sx={{ background: "linear-gradient(to bottom right, #C70039  0%, #C70039  100%)" }}>
      <NavBar />
      <CssBaseline />
      <Grid container spacing={2} style={{px:2}}>
      <Grid item xs={12} md={3}>
      <Paper elevation={3} sx={{ height: '100%', paddingLeft: 2, paddingRight: 2 }}>
        <Typography variant="body1" fontWeight="bold" color="#000000" paragraph sx={{ fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem', lg: '1.75rem', xl: '2rem' }, py: 2, fontFamily: 'monospace', textAlign: 'center' }}>
          Table of Contents
        </Typography>

        <List component="nav">
          <ListItem button onClick={() => setSelectedPage('Metamask')} selected={selectedPage === 'Metamask'}>
            <ListItemText primary="Metamask" />
          </ListItem>
          <ListItem button onClick={() => handleClick('HowToInstall')} selected={selectedPage === 'HowToInstall'}>
            <ListItemText primary="How to Install" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button onClick={() => setSelectedPage('Chrome')} selected={selectedPage === 'Chrome'} sx={{ paddingLeft: 4 }}>
                <ListItemText primary="Chrome" />
              </ListItem>
              <ListItem button onClick={() => setSelectedPage('Firefox')} selected={selectedPage === 'Firefox'} sx={{ paddingLeft: 4 }}>
                <ListItemText primary="Firefox" />
              </ListItem>
              <ListItem button onClick={() => setSelectedPage('Edge')} selected={selectedPage === 'Edge'} sx={{ paddingLeft: 4 }}>
                <ListItemText primary="Edge" />
              </ListItem>
              <ListItem button onClick={() => setSelectedPage('Brave')} selected={selectedPage === 'Brave'} sx={{ paddingLeft: 4 }}>
                <ListItemText primary="Brave" />
              </ListItem>
            </List>
          </Collapse>
          <ListItem button onClick={() => setSelectedPage('GettingStarted')} selected={selectedPage === 'GettingStarted'}>
            <ListItemText primary="Getting Started" />
          </ListItem>
        </List>
      </Paper>
    </Grid>
        <Grid item xs={12} md={9} style={{ }}>
          <Paper elevation={3} style={{ height: '100%' }}>
            {/* Render selected page based on state */}
            {selectedPage === 'GettingStarted' && <GettingStartedPage />}
            {selectedPage === 'Metamask' && <MetamaskPage />}
            {selectedPage === 'Chrome' && <ChromePage />}
            {selectedPage === 'Firefox' && <FirefoxPage />}
            {selectedPage === 'Edge' && <EdgePage />}
            {selectedPage === 'Brave' && <BravePage />}
          </Paper>
        </Grid>
      </Grid>
      <Footer />
    </Box>
  );
};

export default Guide;
