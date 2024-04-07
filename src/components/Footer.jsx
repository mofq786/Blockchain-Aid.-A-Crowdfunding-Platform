import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Copyright from "./Copyright.jsx";

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
          <Typography variant="body1" color="#ffffff" sx={{mt:1,mb:1}} style={{textAlign:"center", fontSize:"24px"}}>
          &copy; 2024 BLOCKCHAIN-AID. All rights reserved.
          </Typography>

        </Container>
      </Box>
    </Box>
  );
}
