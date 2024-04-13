import React from 'react';
import { useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, ButtonBase, IconButton, Stack } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import LinearProgress from '@mui/material/LinearProgress';

// const fetchETHRate = async () => {
//   try {
//     const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=INR');
//     return response.data.ethereum.inr;  // Extract the INR rate from the response
//   } catch (error) {
//     console.error('Error fetching ETH to INR rate:', error);
//     return null;
//   }
// };

function CampaignCard(props) {
  const navigate = useNavigate();
  const {
    bannerUrl,
    campaignStatus,
    title,
    description,
    ethRaised,
    ethFunded,
    deadline,
    id,
  } = props.details;

  // useEffect(() => {
  //   const getRate = async () => {
  //     const rate = await fetchETHRate();
  //     setEthToInrRate(rate);
  //   };
  //   getRate();
  // }, []);

  // Calculate days left
  const today = Date.now();
  const deadlineDate = new Date(deadline).getTime();
  const diffTime = Math.abs(deadlineDate - today);
  const daysLeft = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  function LinearProgressWithLabel({ value }) {
    return (
      <Box sx={{ display: "flex", alignItems: "center", width: '100%' }}>
        <LinearProgress variant="determinate" color="success" value={value} sx={{ flexGrow: 1 }} />
        <Box sx={{ minWidth: 35, marginLeft: 1 }}>
          <Typography variant="body2" color="#ffffff">{`${Math.round(value)}%`}</Typography>
        </Box>
      </Box>
    );
  }

  const progress = ethRaised > 0 ? (ethFunded / ethRaised) * 100 : 0;

  return (
    <Card sx={{ maxWidth: 288, bgcolor: '#1c1c24', cursor: 'pointer', borderRadius: 2 }}>
      <ButtonBase component="div" sx={{ display: 'block', width: '100%' }} onClick={() => navigate(`/campaign/${id}`)}>
        <CardMedia
          component="img"
          height="158"
          image={bannerUrl}
          alt={title}
          sx={{ width: '100%', objectFit: 'cover', borderTopLeftRadius: 15, borderTopRightRadius: 15 }}
        />
        <CardContent sx={{ p: 2, '&:last-child': { pb: 3 }, minHeight: 150 }}>
          <Stack spacing={2}>
          <Stack flexDirection="row" justifyContent="space-between" alignItems="center">
            <Typography
              component="p"
              fontSize={12}
              color={campaignStatus === "ACTIVE" || campaignStatus === "SUCCESS" ? "orange" : "red"}
              fontWeight="bold"
              sx={{mb:1}}
            >
              {campaignStatus}
            </Typography>
          </Stack>
          </Stack>
          <Stack spacing={2}>
          <Typography variant="subtitle1" sx={{ fontWeight: 'medium', color: '#ffffff', mb: 1, lineHeight: 'normal', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: '#808191', lineHeight: 'normal', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
            {description}
          </Typography>
          <LinearProgressWithLabel value={progress} />
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1.5, flexWrap: 'wrap', gap: 1 }}>
            <Box>
              <Typography variant="body2" sx={{ color: '#b2b3bd', fontWeight: 'medium' }}>
                {ethFunded} ETH
              </Typography>
              <Typography variant="caption" sx={{ color: '#808191', mt: 0.5 }}>
                Raised of {ethRaised} ETH
              </Typography>
            </Box>
            <Box>
              <Typography variant="body2" sx={{ color: '#b2b3bd', fontWeight: 'medium' }}>
                {daysLeft}
              </Typography>
              <Typography variant="caption" sx={{ color: '#808191', mt: 0.5 }}>
                Days Left
              </Typography>
              {/* <Typography variant="body2" sx={{ color: '#b2b3bd', fontWeight: 'medium' }}>
                ₹ {fundedInINR.toLocaleString()}
              </Typography>
              <Typography variant="caption" sx={{ color: '#808191', mt: 0.5 }}>
                Raised of ₹ {raisedInINR.toLocaleString()}
              </Typography> */}
            </Box>
          </Box>
          </Stack>
        </CardContent>
      </ButtonBase>
    </Card>
  );
}

export default CampaignCard;
