import {
  Button,
  Container,
  TextField,
  Typography,
  styled,
  Avatar,
  Link,
  List,
  ListItem,
  Box,
  Grid,
  ListItemText,
} from "@mui/material";
import React from "react";

const addresses = [
  "MVSR Engineering College",
  "Affiliated to O.U",
  "Nadergul",
  "Hyderabad",
  "TS",
];
const milestones = [
  { name: "Milestone 1", detail: "1st Jan" },
  { name: "Milestone 2", detail: "1st Feb" },
  { name: "Milestone 3", detail: "1st March" },
];

const campaignDetails = [
  { name: "Campaign Title", detail: "Student help connect" },
  {
    name: "Campaign Description",
    detail: "To help the people.",
  },
  { name: "State", detail: "Telangana" },
  { name: "City", detail: "Hyderabad" },
  { name: "Category", detail: "Engineering" },
  { name: "Amount to be raised", detail: "50 ETH" },
  { name: "Timeline", detail: "3rd March" },
];

const StyledTypographyTitle = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

function ReviewCampaignDetails() {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Campaign Details
      </Typography>
      <Grid container>
        {campaignDetails.map((campaignDetail) => (
          <React.Fragment key={campaignDetail.name}>
            <Grid item xs={6}>
              <Typography gutterBottom>{campaignDetail.name}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>{campaignDetail.detail}</Typography>
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <StyledTypographyTitle variant="h6" gutterBottom>
            Shipping
          </StyledTypographyTitle>
          <Typography gutterBottom>Fund Raiser Name</Typography>
          <Typography gutterBottom>{addresses.join(", ")}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <StyledTypographyTitle variant="h6" gutterBottom>
            Milestones summary
          </StyledTypographyTitle>
          <Grid container>
            {milestones.map((milestone) => (
              <React.Fragment key={milestone.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{milestone.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{milestone.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default ReviewCampaignDetails;
