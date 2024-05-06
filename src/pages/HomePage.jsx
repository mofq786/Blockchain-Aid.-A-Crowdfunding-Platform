import React, { useEffect } from "react";

// UI imports
import { Stack } from "@mui/system";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";
import RM from "../assets/fonts/static/ROBIMA MERTTHA SANS SERIF.otf";
import Divider from '@mui/material/Divider';
// [block-chain] smart-contract related imports..
import {
  getDeployedCampaigns,
  getCampaignsSummary,
} from "../../utils/getCampaigns";

import video from "../assets/WelcomeVideo.mp4";


// local imports..
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import CampaignCard from "../components/CampaignCard";

// service imports..
import axios from "axios";

const api_url = "https://eth-sepolia.g.alchemy.com/v2/zKcZ0eD-TwTnQ4iMLH9GTNIjl-exhAV1";
//const api_url = "http://localhost:5173/";

function HomePage() {
  // for navigation..
  const navigate = useNavigate();

  // hooks..
  const [campaignsList, setCampaignsList] = React.useState([]);

  useEffect(() => {
    // console.log("useEffect called");
    let ignore = false;
    // fetch the campaigns..
    const fetchData = async () => {
      const deployedCampaignsList = await getDeployedCampaigns(); // call the function to fetch the data
      //console.log(deployedCampaignsList);
      setCampaignsList(await getCampaignsSummary(deployedCampaignsList));
      console.log("fetched campaigns");
      console.log(campaignsList);
    };

    // fetch the data..
    fetchData();
    return () => {
      ignore = true; // to avoid rendering multiple times..
    };
  }, []);

  return (
    
    <Box className="App" sx={{background: "linear-gradient(to bottom right, #000099 0%, #000099 100%)", minHeight:'100vh'}}>
      
      <NavBar />
      {/* <Stack direction="row" spacing={2}></Stack> */}
      <CssBaseline />
      <Container maxWidth="x1" >
      <Grid container spacing={4}>
        <Grid item xs={12}>
        <Box >
        <Box sx={{ position: 'relative', width: '100%', paddingBottom: '35%' }}>
        <video width="100%" autoPlay loop controls={false} disablePictureInPicture muted style={{ position: 'absolute', height: '100%', objectFit: 'cover' }}>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Box>
        </Box>
        <Divider variant="middle" color="white" sx={{ my: 1 }} />

        <Box sx={{ background: "linear-gradient(to bottom right, #339966 28%, #339966 100%)", p: 4, borderRadius: 4, mt:1,mb:2 }}>
          
          <Typography variant="body1" paragraph sx={{ fontSize: {xs: '1rem', sm: '1.25rem', md: '1.5rem', lg: '1.75rem', xl: '2rem'}, color: '#fbfbfb' }} style={{ textAlign: 'justify',fontFamily:'monospace' }}>
            A revolutionary platform where technology meets compassion, where blockchain empowers dreams, and where your support transforms lives. We're dedicated to harnessing the potential of blockchain technology to create a more transparent, efficient, and connected world for NGOs and their supporters.
          </Typography>
          </Box>

          <Box sx={{ background: "linear-gradient(to bottom right, #339966 28%, #339966 100%)", p: 4, borderRadius: 4, mt:1,mb:2 }}>
          <Typography variant="body1" fontWeight="bold" color="#ffffff" paragraph sx={{fontSize: {xs: '1.5rem', sm: '1.75rem', md: '2rem', lg: '2.25rem', xl: '2.5rem'},fontFamily:'monospace'}}>
            Why BlockchainAid?
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize:  {xs: '1rem', sm: '1.25rem', md: '1.5rem', lg: '1.75rem', xl: '2rem'}, color: '#ffffff' }} style={{ textAlign: 'justify',fontFamily:'monospace' }}>
            <strong>Unparalleled Transparency:</strong> Blockchain technology ensures that every transaction is recorded, traceable, and immutable. Know exactly where your contributions are going and see the impact of your support.
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize:  {xs: '1rem', sm: '1.25rem', md: '1.5rem', lg: '1.75rem', xl: '2rem'}, color: '#ffffff' }} style={{ textAlign: 'justify',fontFamily:'monospace' }}> 
            <strong>Empowerment Through Technology:</strong> We empower NGOs to harness the power of blockchain for fundraising, enabling them to focus more on their missions and less on administrative challenges.
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize:  {xs: '1rem', sm: '1.25rem', md: '1.5rem', lg: '1.75rem', xl: '2rem'}, color: '#ffffff' }} style={{ textAlign: 'justify',fontFamily:'monospace' }}>
            <strong>A Global Community for Change:</strong> Join a network of donors, NGOs, and changemakers from around the world, all united by a common goal: to foster positive change across the globe.
          </Typography>
          </Box>
          
          <Box sx={{ background: "linear-gradient(to bottom right, #339966 28%, #339966 100%)", p: 4, borderRadius: 4, mt:1,mb:2 }}>
          <Typography variant="body1" fontWeight="bold" color="#ffffff" paragraph sx={{fontSize: {xs: '1.5rem', sm: '1.75rem', md: '2rem', lg: '2.25rem', xl: '2.5rem'},fontFamily:'monospace'}}>
            For Visionaries and Changemakers: The FundRaiser
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize:  {xs: '1rem', sm: '1.25rem', md: '1.5rem', lg: '1.75rem', xl: '2rem'}, color: '#ffffff' }} style={{ textAlign: 'justify',fontFamily:'monospace' }}>
            Your mission is vital. Your dreams are powerful. Your projects can change the world. At BlockchainAid, we understand the challenges NGOs face in funding and visibility. That's why we've created a space that leverages blockchain technology to offer unmatched transparency, security, and efficiency in fundraising.
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize:  {xs: '1rem', sm: '1.25rem', md: '1.5rem', lg: '1.75rem', xl: '2rem'}, color: '#ffffff' }} style={{ textAlign: 'justify',fontFamily:'monospace' }}>
            Here, every campaign is a beacon of hope. Share your story with a global community eager to support initiatives that make a real difference. With BlockchainAid, you're not just launching a campaign; you're joining a movement dedicated to making the world a better place, one block at a time.
          </Typography>
          </Box>

          <Box sx={{ background: "linear-gradient(to bottom right, #339966 28%, #339966 100%)", p: 4, borderRadius: 4, mt:1,mb:2 }}>
          <Typography variant="body1" fontWeight="bold" color="#ffffff" paragraph sx={{fontSize: {xs: '1.5rem', sm: '1.75rem', md: '2rem', lg: '2.25rem', xl: '2.5rem'},fontFamily:'monospace'}}>
            For Our Donors and Supporters:
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize:  {xs: '1rem', sm: '1.25rem', md: '1.5rem', lg: '1.75rem', xl: '2rem'}, color: '#ffffff' }} style={{ textAlign: 'justify',fontFamily:'monospace' }}>
            Your contribution is the key to unlocking change. On BlockchainAid, you have the unique opportunity to support NGOs with missions that resonate with your values. Thanks to the blockchain, every donation is traceable, secure, and direct, ensuring that your generosity achieves maximum impact.
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize:  {xs: '1rem', sm: '1.25rem', md: '1.5rem', lg: '1.75rem', xl: '2rem'}, color: '#ffffff' }} style={{ textAlign: 'justify',fontFamily:'monospace' }}>
            Explore campaigns that ignite your passion, contribute to causes you believe in, and witness the tangible difference your donations make, with full transparency and accountability.
          </Typography>
          </Box>

          <Box sx={{ background: "linear-gradient(to bottom right, #339966 28%, #339966 100%)", p: 4, borderRadius: 4, mt:1,mb:2 }}>
          <Typography variant="body1" fontWeight="bold" color="#ffffff" paragraph sx={{fontSize: {xs: '1.5rem', sm: '1.75rem', md: '2rem', lg: '2.25rem', xl: '2.5rem'},fontFamily:'monospace'}}>
            Join the BlockchainAid Movement
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize:  {xs: '1rem', sm: '1.25rem', md: '1.5rem', lg: '1.75rem', xl: '2rem'}, color: '#ffffff' }} style={{ textAlign: 'justify',fontFamily:'monospace' }}>
            BlockchainAid isn't just a platform; it's a testament to the power of combining technology with human compassion. Whether you're an NGO looking to amplify your impact or a donor seeking to make meaningful contributions, you're in the right place.
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize:  {xs: '1rem', sm: '1.25rem', md: '1.5rem', lg: '1.75rem', xl: '2rem'}, color: '#ffffff' }} style={{ textAlign: 'justify',fontFamily:'monospace' }}>
            Together, we can transcend borders, overcome obstacles, and transform lives. Dive into a world of possibility, discover projects that inspire, and take part in a movement that's reshaping the future of philanthropy.
          </Typography>
          </Box>
          <Box sx={{ background: "linear-gradient(to bottom right, #339966 28%, #339966 100%)", p: 4, borderRadius: 4, mt:1,mb:2 }}>
          <Typography variant="body1" paragraph sx={{ fontSize:  {xs: '1rem', sm: '1.25rem', md: '1.5rem', lg: '1.75rem', xl: '2rem'}, color: '#ffffff'}} style={{ textAlign: 'justify',fontFamily:'monospace' }}>
            <strong>BlockchainAid: Empowering NGOs for Change</strong> - where your support, powered by blockchain, paves the way for a better world.
          </Typography>
          </Box>
          <Box sx={{background: "#000000",p:4,borderRadius:10}}>
          <Grid container spacing={2}>
          <Grid item xs={8} >
          <Typography variant="body1" fontWeight="bold" color="#ffffff" paragraph sx={{fontSize: {xs: '1.5rem', sm: '1.75rem', md: '2rem', lg: '2.25rem', xl: '2.5rem'},fontFamily:'monospace'}}>
          Want to Contribute ?
        </Typography>
        <Typography variant="body1" color="#ffffff" paragraph sx={{fontSize: {xs: '1rem', sm: '1.25rem', md: '1.5rem', lg: '1.75rem', xl: '2rem'},fontFamily:'monospace'}}>
          Explore and contribute to our active campaigns to make a difference.
        </Typography>
        </Grid>
        {/* <Grid item xs={2}>

        </Grid> */}
        <Grid item xs={2} alignContent="center">
      <Button
              
              variant="contained"
              color = "primary"
              sx={{ mt: 3, mb: 2,fontSize:{xs: '0.75rem', sm: '1rem', md: '1.25rem', lg: '1.5rem', xl: '2rem'}}}
              onClick={() => navigate("/active-campaigns")}
            >
              View Campaigns
            </Button>
        </Grid>
        </Grid>
          </Box>
        </Grid>
      </Grid>
    </Container>
      <Footer />
    </Box>
  );
}

export default HomePage;
