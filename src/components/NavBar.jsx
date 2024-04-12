import * as React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AppBar, Toolbar, Button, IconButton, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Box, Menu, MenuItem } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import CampaignIcon from '@mui/icons-material/HowToVote';
import GuideIcon from '@mui/icons-material/MenuBook';
import CreateIcon from '@mui/icons-material/Create';
import logo from "../assets/logo7.png";
import { useWallet } from "use-wallet";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LoadingButton from '@mui/lab/LoadingButton';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { useState } from "react";

function NavBar() {
  const wallet = useWallet();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  // Changed initial state to null
  const navigate = useNavigate();
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [profileMenuDisplayStatus, setProfileMenuDisplayStatus] =
    useState(false);
  // hooks..
  const [responseMsg, setResponseMsg] = React.useState(""); // to display error messages.
  const [showResponse, setShowResponse] = React.useState(false); // To know whether error occured. ⁉ why not use length of error message
  const [responseSeverity, setResponseSeverity] = React.useState("error");

  const menuItems = [
    { name: "Home", icon: <HomeIcon />, path: "/" },
    { name: "Campaigns", icon: <CampaignIcon />, path: "/active-campaigns" },
    { name: "Guide", icon: <GuideIcon />, path: "/guide" },
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <List>
        {menuItems.map((item, index) => (
          <ListItem disablePadding key={index}>
            <ListItemButton 
              onClick={() => navigate(item.path)} 
              selected={location.pathname === item.path}
              sx={{ 
                paddingY: 1, 
                backgroundColor: location.pathname === item.path ? 'rgba(255, 255, 255, 0.08)' : 'inherit'
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="sticky" sx={{ mb: 2, background: "#000000" }}>
      <Toolbar>
        <Button
          variant="text"
          onClick={() => navigate("/")}
          sx={{ flexGrow: 0, display: { xs: 'block', sm: 'block' } }} // Logo is always visible
        >
          <img src={logo} alt="Blockchain-Aid" style={{ maxHeight: "80px" }} />
        </Button>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' }, justifyContent: 'space-evenly' }}>
          <Button variant="text" onClick={() => navigate("/active-campaigns")} 
          color={location.pathname === "/active-campaigns" ? 'warning' : 'inherit'}
          
          >
            Campaigns
          </Button>
          <Button variant="text" onClick={() => navigate("/guide")} sx={{ color: "#ffffff", mr:12 }}>
            Guide
          </Button>
          
          <Button variant="contained" color="success" onClick={() => navigate("/create-campaign")} sx={{ color: "#ffffff",ml:4 }}>
            Create Campaign
          </Button>
          {wallet.status === "connected" ? (
            <>
              <Button
                variant="contained"
                
                endIcon={<ExpandMoreIcon />}
                onClick={() => setProfileMenuDisplayStatus(true)}
                color="primary"
              >
                {wallet.account.substr(0, 10) + "..."}
              </Button>
            </>
          ) : (
            <>
              <LoadingButton
                variant="contained"
                loading={wallet.status === "connecting"}
                loadingIndicator="Connecting..."

                endIcon={<AccountBalanceWalletIcon />}
                onClick={() => wallet.connect("injected")}
              >
                Connect Wallet
              </LoadingButton>
            </>
          )}
          <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        // anchorEl={anchorEl}
        open={profileMenuDisplayStatus}
        onClose={(e) => setProfileMenuDisplayStatus(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem onClick={() =>{ wallet.reset(); setProfileMenuDisplayStatus(false);}}>
          <ListItemIcon>
            <AccountBalanceWalletIcon fontSize="small" />
          </ListItemIcon>
          Disconnect Wallet
        </MenuItem>
      
      </Menu>
        </Box>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerToggle}
          sx={{ ml: 'auto', display: { xs: 'flex', sm: 'none' } }} // Menu icon only on xs screens
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
}

export default NavBar;
