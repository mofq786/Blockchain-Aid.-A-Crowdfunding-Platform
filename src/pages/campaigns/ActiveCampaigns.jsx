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
import "../../assets/fonts/static/RobotoMono-Regular.ttf";
// [block-chain] smart-contract related imports..
import {
  getDeployedCampaigns,
  getCampaignsSummary,
} from "../../../utils/getCampaigns";

// local imports..
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import CampaignCard from "../../components/CampaignCard";

// service imports..
import axios from "axios";
import { Campaign } from "@mui/icons-material";

const api_url = "https://eth-sepolia.g.alchemy.com/v2/zKcZ0eD-TwTnQ4iMLH9GTNIjl-exhAV1";
//const api_url = "http://localhost:5173/";

function ActiveCampaigns() {
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
    
    <Box className="App" sx={{background: "linear-gradient(to bottom right, #C70039  0%, #C70039  100%)", minHeight:'100vh'}}>
      <NavBar />
      {/* <Stack direction="row" spacing={2}></Stack> */}
      <CssBaseline />
      <Box sx={{background: "linear-gradient(to right, #0f0c29, #302b63, #24243e)",mt:1,px:4,borderRadius: 12, alignItems:'center',justifyContent:'center', justifyItems:'center' }}>
      <Grid container>
        <Grid item xs={6}>
        <Typography variant="body1" color="#ffffff" paragraph sx={{fontSize: {xs: '1.5rem', sm: '1.75rem', md: '2rem', lg: '2.25rem', xl: '2.5rem'},fontFamily:'revert', textAlign:'start',mt:0.5,py:1,px:2}} >
          CAMPAIGNS
        </Typography>
        </Grid>
        <Grid item xs={6}>
        <Typography variant="body1" color="#ffffff" paragraph sx={{fontSize: {xs: '1rem', sm: '1.25rem', md: '1.5rem', lg: '1.75rem', xl: '2rem'},fontFamily:'revert', textAlign:'end',mt:1.5,mb:1, py:1,px:2}} >
        {campaignsList.length} Campaigns Deployed
      </Typography>
      </Grid>
      </Grid>
      </Box>
      
      <Container
        component="main"
        sx={{ mt: 3, mb: 2 }}
        justifyContent="center"
        background="linear-gradient(to bottom right, #C70039  0%, #C70039  100%)"
      >

    <Box sx={{ mt: 4, mb: 2, background: "linear-gradient(to bottom right, #C70039  0%, #C70039  100%)" }}>
          <Stack>
            <Stack
              direction={"row"}
              justifyContent="space-between"
              alignItems="center"
              // width={10}
    >
              
            </Stack>
            <Container sx={{ py: 2 }} Width="90%" background= "linear-gradient(to bottom right, #C70039  0%, #C70039  100%)">
              {/* End hero unit */}
              {/* load as long as data is not fetched. */}
              {campaignsList.length == 0 && (
                <CircularProgress color="success" />
              )}
              <Grid container spacing={4}>
                {campaignsList.map((activeCampaign, idx) => (
                  <Grid item key={idx} xs={6} sm={3} md={2} xl={3}>
                    <CampaignCard details={activeCampaign} />
                  </Grid>
                ))}
              </Grid>
            </Container>
          </Stack>
        </Box>
      </Container>
      <Footer/>
    </Box>
  );
}

export default ActiveCampaigns;
