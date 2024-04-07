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
    
    <Box className="App" sx={{background: "linear-gradient(to bottom right, #990099 28%, #990099 100%)"}}>
      <NavBar />
      {/* <Stack direction="row" spacing={2}></Stack> */}
      <CssBaseline />
      <Box sx={{background: "linear-gradient(to top left, #9966ff 0%, #6600ff 100%)",mt:1,mb:1,px:4,borderRadius: 3 }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
      <div>
        <Typography variant="h2" color="#ffffff" gutterBottom>
          Campaigns
        </Typography>
      </div>
      <div style={{ marginLeft: 'auto' }}>
      <Typography variant="body" color="#ffffff" paragraph style={{textAlign:'center',fontSize:'32px'}}>
        {campaignsList.length} Campaigns Already Deployed
      </Typography>
      </div>
    </div>
      </Box>
      
      <Container
        component="main"
        sx={{ mt: 3, mb: 2 }}
        justifyContent="center"
        maxWidth="md"
        background="linear-gradient(to bottom right, #990099 28%, #990099 100%)"
      >

    <Box sx={{ mt: 4, mb: 2, background: "linear-gradient(to bottom right, #990099 28%, #990099 100%)" }}>
          <Stack>
            <Stack
              direction={"row"}
              justifyContent="space-between"
              alignItems="center"
              // width={10}
    >
              
            </Stack>
            <Container sx={{ py: 2 }} Width="90%" background= "linear-gradient(to bottom right, #990099 28%, #990099 100%)">
              {/* End hero unit */}
              {/* load as long as data is not fetched. */}
              {campaignsList.length == 0 && (
                <CircularProgress color="success" />
              )}
              <Grid container spacing={4}>
                {campaignsList.map((activeCampaign, idx) => (
                  <Grid item key={idx} xs={12} sm={6} md={4}>
                    <CampaignCard details={activeCampaign} />
                  </Grid>
                ))}
              </Grid>
            </Container>
          </Stack>
        </Box>
      </Container>
      
    </Box>
  );
}

export default ActiveCampaigns;
