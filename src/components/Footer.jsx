import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
//import DiscordIcon from "@mui/icons-material/Discord";
import GitHubIcon from "@mui/icons-material/GitHub";
//import logo from "../assets/logo7.png";
import Grid from "@mui/material/Grid";

export default function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "140px",
      }}
    >
      <CssBaseline />

      <Box
        component="footer"
        sx={{
          py: 0,
          px: 0,
          mt: "auto",
          background:"#000000",
          position: 'relative',        
          bottom: 0,
          width: '100%',
        }}
      >
        <Container maxWidth="sm">
          <Grid container spacing={2}>
            <Grid item xs={6}>
          <Typography variant="body1" color="#ffffff" sx={{mt:1, mb:1}} style={{textAlign:"center", fontSize:  {xs: '1rem', sm: '1.25rem', md: '1.5rem', lg: '1.75rem', xl: '2rem'}}}>
            &copy; Blockchain Aid 2024
          </Typography>
          </Grid>
          <Grid item xs={6} alignContent="center">
            {/* Social media icons */}
            <a href="https://www.linkedin.com" target="blank">
            <LinkedInIcon sx={{ fontSize:  {xs: '1rem', sm: '1.25rem', md: '1.5rem', lg: '1.75rem', xl: '2rem'}, mr: 1, color:"#ffffff" }}  />
            </a>

            <a href="https://www.linkedin.com" target="blank">
            <InstagramIcon sx={{fontSize:  {xs: '1rem', sm: '1.25rem', md: '1.5rem', lg: '1.75rem', xl: '2rem'}, mr: 1, color:"#ffffff" }} />
            </a>

            <a href="https://www.linkedin.com" target="blank">
            <FacebookIcon sx={{ fontSize:  {xs: '1rem', sm: '1.25rem', md: '1.5rem', lg: '1.75rem', xl: '2rem'}, mr: 1, color:"#ffffff" }} />
            </a>
           
            <a href="https://www.linkedin.com" target="blank">
            <GitHubIcon sx={{ fontSize:  {xs: '1rem', sm: '1.25rem', md: '1.5rem', lg: '1.75rem', xl: '2rem'}, mr: 1, color:"#ffffff" }} />
            </a>
          </Grid>
          </Grid>
        </Container>

      </Box>
    </Box>
  );
}
