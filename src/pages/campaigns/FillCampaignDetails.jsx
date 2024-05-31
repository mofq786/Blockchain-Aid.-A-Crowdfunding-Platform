// import {
//   ErrorRounded,
//   LocalConvenienceStoreOutlined,
// } from "@mui/icons-material";
// import {
//   Button,
//   Container,
//   TextField,
//   MenuItem,
//   Typography,
//   styled,
//   Avatar,
//   Link,
//   Box,
//   Grid,
//   FormControlLabel,
//   Checkbox,
// } from "@mui/material";
// import React, { useEffect, useState } from "react";
// import Snackbar from "@mui/material/Snackbar";
// import Alert from "@mui/material/Alert";
// import { LoadingButton } from "@mui/lab";
// // local imports...
// import NavBar from "../../components/NavBar";
// import Footer from "../../components/Footer";
// // service imports..
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { useForm } from "react-hook-form";
// import moment from "moment";

// // Wallet connection..
// import { useWallet } from "use-wallet";

// // smart-contract interaction -- for campaign creation..
// import blockchainAid from "../../../utils/contract/BlockchainAid";
// import web3 from "../../../utils/web3";

// const api_url =
//   "https://eth-sepolia.g.alchemy.com/v2/zKcZ0eD-TwTnQ4iMLH9GTNIjl-exhAV1";
// //const api_url = "http://localhost:5173/";

// function FillCampaignDetails() {
//   const wallet = useWallet();
//   const navigate = useNavigate();

//   // hooks for getting form data..
//   const {
//     handleSubmit,
//     register,
//     formState: { isSubmitting, errors },
//   } = useForm({
//     mode: "onChange",
//   });
//   const [data, setData] = React.useState("");
//   const [error, setError] = React.useState("");

//   // hooks to handle acknowledgements..
//   // hooks..
//   const [responseMsg, setResponseMsg] = React.useState(""); // to display error messages.
//   const [showResponse, setShowResponse] = React.useState(false); // To know whether error occured. ⁉ why not use length of error message
//   const [responseSeverity, setResponseSeverity] = React.useState("error");

//   const [ethAmount, setEthAmount] = useState("");
//   const [ethMax, setEthMax] = useState("");

//   const [selectedCurrency, setSelectedCurrency] = useState("INR");
//   const [convertedAmount, setConvertedAmount] = useState("");
//   const [convertedAmount1, setConvertedAmount1] = useState("");
//   const [conversionRates, setConversionRates] = useState({});

//   const currencies = ["USD", "EUR", "GBP", "INR"]; // List of supported currencies

//   useEffect(() => {
//     // Fetch conversion rates when the component mounts
//     fetchConversionRates();
//   }, []);

//   const fetchConversionRates = async () => {
//     try {
//       const response = await axios.get(
//         "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd,eur,gbp,inr"
//       );
//       setConversionRates(response.data.ethereum);
//     } catch (error) {
//       console.error("Error fetching conversion rates:", error);
//     }
//   };

//   const handleEthAmountChange = (event) => {
//     const { value } = event.target;
//     setEthAmount(value);

//     // Convert the entered ETH amount to the selected currency
//     convertEthToSelectedCurrency(value, selectedCurrency);
//   };

//   const handleEthMaxChange = (event) => {
//     const { value } = event.target;
//     setEthMax(value);

//     // Convert the entered ETH amount to the selected currency
//     convertEthToSelectedCurrency1(value, selectedCurrency);
//   };

//   const handleCurrencyChange = (event) => {
//     const { value } = event.target;
//     setSelectedCurrency(value);

//     // Convert the entered ETH amount to the newly selected currency
//     convertEthToSelectedCurrency(ethAmount, value);
//   };

//   const handleCurrencyChange1 = (event) => {
//     const { value } = event.target;
//     setSelectedCurrency(value);

//     // Convert the entered ETH amount to the newly selected currency
//     convertEthToSelectedCurrency1(ethMax, value);
//   };

//   const convertEthToSelectedCurrency = (amountInEth, currency) => {
//     // Check if conversion rates have been fetched
//     if (Object.keys(conversionRates).length === 0) return;
//     const Currency = currency.toLowerCase();
//     console.log(currency);
//     // Use the fetched rate to calculate the converted amount for the selected currency
//     let rate = conversionRates[Currency];
//     let convertedAmount = amountInEth * rate;
//     setConvertedAmount(convertedAmount.toFixed(2)); // Round to 2 decimal places
//   };

//   const convertEthToSelectedCurrency1 = (amountInEth, currency) => {
//     // Check if conversion rates have been fetched
//     if (Object.keys(conversionRates).length === 0) return;
//     const Currency = currency.toLowerCase();
//     console.log(currency);
//     // Use the fetched rate to calculate the converted amount for the selected currency
//     let rate = conversionRates[Currency];
//     let convertedAmount1 = amountInEth * rate;
//     setConvertedAmount1(convertedAmount1.toFixed(2)); // Round to 2 decimal places
//   };

//   // helpers..
//   async function handleFilledCampaignDetails(data) {
//     console.log("About to print data");
//     console.log(data);
//     console.log("deadline: " + data.deadlineDate + " " + data.deadlineTime);
//     const timestamp = moment(
//       data.deadlineDate + " " + data.deadlineTime,
//       "YYYY-MM-DD HH:mm"
//     ).valueOf();
//     console.log(timestamp);
//     console.log("timestamp printed");

//     try {
//       const accounts = await web3.eth.getAccounts();
//       // Create campaign by taking all the details..
//       await blockchainAid.methods
//         .createCampaign(
//           data.title,
//           data.description,
//           web3.utils.toWei(data.minContribAmount, "ether"),
//           web3.utils.toWei(data.ethRaised, "ether"),
//           timestamp,
//           data.bannerUrl
//         )
//         .send({
//           from: accounts[0],
//         });

//       // After successful creation..
//       ///// REQUIRED: Find way to get the created campaign address, so that, can navigate to that page.
//       navigate("/"); // navigate to home page
//     } catch (err) {
//       // upon error.. be on the same page and show the error.
//       setError(err.message);
//       console.log(err);
//     } finally {
//       console.log("job done");
//     }
//   }

//   const StyledDivLayout = styled("div")(({ theme }) => ({
//     width: "auto",
//     marginLeft: theme.spacing(2),
//     marginRight: theme.spacing(2),
//     [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
//       width: 600,
//       marginLeft: "auto",
//       marginRight: "auto",
//     },
//   }));

//   const StyledDivPaper = styled("div")(({ theme }) => ({
//     marginTop: theme.spacing(3),
//     marginBottom: theme.spacing(3),
//     padding: theme.spacing(2),
//     [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
//       marginTop: theme.spacing(6),
//       marginBottom: theme.spacing(6),
//       padding: theme.spacing(3),
//     },
//   }));

//   const StyledContainer = styled(Container)(({ theme }) => ({
//     [theme.breakpoints.up("sm")]: {
//       width: "80%",
//     },
//     [theme.breakpoints.down("sm")]: {
//       width: "40%",
//     },
//   }));

//   const handleClose = (event, reason) => {
//     if (reason === "clickaway") {
//       return;
//     }
//     setShowResponse(false);
//   };

//   return (
//     <>
//       <NavBar />
//       <StyledContainer
//         sx={{
//           width: "80%",
//         }}
//       >
//         <StyledDivLayout>
//           <StyledDivPaper>
//             <Typography
//               variant="h5"
//               textAlign={"center"}
//               fontWeight="bold"
//               sx={{ paddingBottom: 2.5, paddingTop: 0 }}
//             >
//               Campaign Details
//             </Typography>
//             {/* Handle wallet connection here.. */}
//             {wallet.status !== "connected" ? (
//               <Alert
//                 sx={{ marginBottom: 2 }}
//                 severity="warning"
//                 action={
//                   <Button
//                     color="inherit"
//                     size="small"
//                     onClick={() => wallet.connect()}
//                   >
//                     Connect
//                   </Button>
//                 }
//               >
//                 Please connect your wallet to proceed.
//               </Alert>
//             ) : (
//               wallet.status === "error" && (
//                 <Alert
//                   sx={{ marginBottom: 2 }}
//                   severity="error"
//                   action={
//                     <Button
//                       color="inherit"
//                       size="small"
//                       onClick={() => wallet.connect()}
//                     >
//                       Try again
//                     </Button>
//                   }
//                 >
//                   Error connecting to wallet.
//                 </Alert>
//               )
//             )}

//             {/* For displaying errors.. */}
//             {error && (
//               <Alert sx={{ marginBottom: 2, marginTop: 2 }} severity="error">
//                 {error}
//               </Alert>
//             )}
//             {errors.title ||
//             errors.description ||
//             errors.bannerUrl ||
//             errors.minContribAmount ||
//             errors.ethRaised ||
//             errors.walletAddress ||
//             errors.deadlineDate ||
//             errors.deadlineTime ? (
//               <Alert sx={{ marginBottom: 2, marginTop: 2 }} severity="error">
//                 All fields are required
//               </Alert>
//             ) : null}

//             <form
//               autoComplete="on"
//               onSubmit={handleSubmit(handleFilledCampaignDetails)}
//             >
//               <Grid
//                 container
//                 spacing={1.5}
//                 direction="row"
//                 justify="center"
//                 alignItems="stretch"
//               >
//                 <Grid item xs={6} spacing={0}>
//                   <Box display={"flex"} flexDirection="column" gap={2}>
//                     <TextField
//                       id="title"
//                       {...register("title", { required: true })}
//                       label="Campaign Title&nbsp; &nbsp;"
//                       size="small"
//                       fullWidth
//                       disabled={isSubmitting}
//                       variant="outlined"
//                       helperText="About this campaign in 2-3 words"
//                     />

//                     <TextField
//                       id="bannerUrl"
//                       {...register("bannerUrl", { required: true })}
//                       label="Banner Image URL &nbsp;"
//                       type="url"
//                       size="small"
//                       fullWidth
//                       title="This image will be shown as a banner"
//                       helperText="Preferably from unsplash.com, flaticon.com, pexels.com."
//                       disabled={isSubmitting}
//                     />
//                   </Box>
//                 </Grid>
//                 <Grid item xs={6}>
//                   <Grid styl={{ height: "70%" }}>
//                     <TextField
//                       id="description"
//                       name="description"
//                       {...register("description", { required: true })}
//                       label="Campaign Description &nbsp; &nbsp;"
//                       size="small"
//                       multiline
//                       rows={4.3}
//                       fullWidth
//                       helperText="Help people know about this campaign. Keep it simple and short."
//                       disabled={isSubmitting}
//                     />
//                   </Grid>
//                 </Grid>

//                 <Grid item xs={6} sm={6}>
//                   <TextField
//                     id="ethRaised"
//                     {...register("ethRaised", { required: true })}
//                     label="Goal (ETH)&nbsp;&nbsp;"
//                     fullWidth
//                     size="medium"
//                     type="number"
//                     helperText="Amount to be raised"
//                     inputProps={{
//                       // min: 0.00000001,
//                       step: 0.00001,
//                     }}
//                     value={ethMax}
//                     onChange={handleEthMaxChange}
//                     disabled={isSubmitting}
//                   />
//                 </Grid>
//                 <Grid item xs={6} sm={6}>
//                   {/* Display the converted amount of ETH in the selected currency */}
//                   <TextField
//                     id="convertedAmount1"
//                     label={`Converted amount (${selectedCurrency})`}
//                     size="medium"
//                     type="text"
//                     fullWidth
//                     value={convertedAmount1}
//                     InputProps={{
//                       endAdornment: (
//                         <TextField
//                           variant="standard"
//                           id="currency-select"
//                           select
//                           label="Select currency"
//                           value={selectedCurrency}
//                           onChange={handleCurrencyChange1}
//                           fullWidth
//                           size="small"
//                         >
//                           {currencies.map((currency) => (
//                             <MenuItem key={currency} value={currency}>
//                               {currency}
//                             </MenuItem>
//                           ))}
//                         </TextField>
//                       ),
//                     }}
                    
//                     disabled={isSubmitting}
//                   />
//                 </Grid>
//                 <Grid item xs={6} sm={6}>
//                   <TextField
//                     id="minContribAmount"
//                     label="Minimum contribution amount (ETH)"
//                     size="medium"
//                     type="number"
//                     inputProps={{
//                       min: 0,
//                       step: 0.00001,
//                     }}
//                     fullWidth
//                     value={ethAmount}
//                     onChange={handleEthAmountChange}
//                     disabled={isSubmitting}
//                   />
//                 </Grid>
//                 <Grid item xs={6} sm={6}>
//                   {/* Display the converted amount of ETH in the selected currency */}
//                   <TextField
//                     id="convertedAmount"
//                     label={`Converted amount (${selectedCurrency})`}
//                     size="medium"
//                     type="text"
//                     fullWidth
//                     value={convertedAmount}
//                     InputProps={{
//                       endAdornment: (
//                         <TextField
//                           variant="standard"
//                           id="currency-select"
//                           select
//                           value={selectedCurrency}
//                           onChange={handleCurrencyChange}
//                           size="small"
//                           label="Select Currency"
//                           fullWidth
//                         >
//                           {currencies.map((currency) => (
//                             <MenuItem key={currency} value={currency}>
//                               {currency}
//                             </MenuItem>
//                           ))}
//                         </TextField>
//                       ),
//                     }}
//                     disabled={isSubmitting}
//                   />
//                 </Grid>

//                 <Grid item xs={12} sm={6}>
//                   <Box sx={{ padding: 0, margin: 0 }}>
//                     <Typography variant="caption" color="GrayText">
//                       Campaign ends at
//                     </Typography>
//                     <Box display={"flex"} flexDirection="row" gap={2}>
//                       <TextField
//                         id="deadlineDate"
//                         {...register("deadlineDate", { required: true })}
//                         type={"date"}
//                         inputProps={{
//                           min: `${new Date(
//                             new Date().getTime() + 1 * 1 * 60 * 60 * 1000 // +1 day
//                           )
//                             .toJSON()
//                             .slice(0, 10)}`,
//                         }}
//                         size="small"
//                         disabled={isSubmitting}
//                       />
//                       <TextField
//                         id="deadlineTime"
//                         {...register("deadlineTime", { required: true })}
//                         type={"time"}
//                         size="small"
//                         disabled={isSubmitting}
//                       />
//                     </Box>
//                     <Typography variant="caption" color="GrayText">
//                       Please set a reasonable range, neither too short nor too
//                       long.
//                     </Typography>
//                   </Box>
//                 </Grid>

//                 <Grid item xs={12} sm={6}>
//                   {/* Just to be aligned with the date&time. */}
//                   <Typography variant="caption">&nbsp;</Typography>
//                   <TextField
//                     id="walletAddress"
//                     name="walletAddress"
//                     label="Wallet Address &nbsp; &nbsp;"
//                     fullWidth
//                     value={wallet.account}
//                     inputProps={{
//                       readOnly: "read-only",
//                     }}
//                     title="Read-only value"
//                     size="small"
//                     helperText={
//                       wallet.status === "connected"
//                         ? "This is connected wallet's address. To switch please re-login with required wallet."
//                         : "Please connect to the wallet"
//                     }
//                     disabled={isSubmitting}
//                   />
//                 </Grid>

//                 <Grid item xs={12}>
//                   <FormControlLabel
//                     control={
//                       <Checkbox
//                         required
//                         color="secondary"
//                         name="acceptConditions"
//                         value="yes"
//                       />
//                     }
//                     label="I/We understand that, once these fields are set cannot be updated."
//                   />
//                 </Grid>
//               </Grid>
//               <LoadingButton
//                 type="submit"
//                 loading={isSubmitting}
//                 variant="contained"
//                 color="success"
//                 disabled={isSubmitting}
//               >
//                 Create Campaign
//               </LoadingButton>
//             </form>
//           </StyledDivPaper>
//         </StyledDivLayout>
//       </StyledContainer>
//       <Snackbar
//         open={showResponse}
//         autoHideDuration={4000}
//         onClose={handleClose}
//         anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
//       >
//         <Alert onClose={handleClose} severity={responseSeverity}>
//           {responseMsg}
//         </Alert>
//       </Snackbar>
//       <Footer />
//     </>
//   );
// }

// export default FillCampaignDetails;




import {
  ErrorRounded,
  LocalConvenienceStoreOutlined,
} from "@mui/icons-material";
import {
  Button,
  Container,
  TextField,
  Typography,
  styled,
  Avatar,
  Link,
  Box,
  Grid,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import React, { useEffect } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { LoadingButton } from "@mui/lab";
// local imports...
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
// service imports..
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import moment from "moment";
// Wallet connection..
import { useWallet } from "use-wallet";
// smart-contract interaction -- for campaign creation..
import blockchainAid from "../../../utils/contract/BlockchainAid";
import web3 from "../../../utils/web3";

const api_url = "https://eth-sepolia.g.alchemy.com/v2/zKcZ0eD-TwTnQ4iMLH9GTNIjl-exhAV1";
//const api_url = "http://localhost:5173/";

function FillCampaignDetails() {
  const wallet = useWallet();
  const navigate = useNavigate();
  // hooks for getting form data..
  const {
    handleSubmit,
    register,
    formState: { isSubmitting, errors },
  } = useForm({
    mode: "onChange",
  });
  const [data, setData] = React.useState("");
  const [error, setError] = React.useState("");
  // hooks to handle acknowledgements..
  // hooks..
  const [responseMsg, setResponseMsg] = React.useState(""); // to display error messages.
  const [showResponse, setShowResponse] = React.useState(false); // To know whether error occured. ⁉ why not use length of error message
  const [responseSeverity, setResponseSeverity] = React.useState("error");

  // helpers..
  async function handleFilledCampaignDetails(data) {
    console.log("About to print data");
    console.log(data);
    console.log("deadline: " + data.deadlineDate + " " + data.deadlineTime);
    const timestamp = moment(
      data.deadlineDate + " " + data.deadlineTime,
      "YYYY-MM-DD HH:mm"
    ).valueOf();
    console.log(timestamp);
    console.log("timestamp printed");
    try {
      const accounts = await web3.eth.getAccounts();
      // Create campaign by taking all the details..
      await blockchainAid.methods
        .createCampaign(
          data.title,
          data.description,
          web3.utils.toWei(data.minContribAmount, "ether"),
          web3.utils.toWei(data.ethRaised, "ether"),
          timestamp,
          data.bannerUrl
        )
        .send({
          from: accounts[0],
        });
      // After successful creation..
      ///// REQUIRED: Find way to get the created campaign address, so that, can navigate to that page.
      navigate("/"); // navigate to home page
    } catch (err) {
      // upon error.. be on the same page and show the error.
      setError(err.message);
      console.log(err);
    } finally {
      console.log("job done");
    }
  }
  const StyledDivLayout = styled("div")(({ theme }) => ({
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
  }));
  const StyledDivPaper = styled("div")(({ theme }) => ({
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  }));
  const StyledContainer = styled(Container)(({ theme }) => ({
    [theme.breakpoints.up("sm")]: {
      width: "80%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "40%",
    },
  }));
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setShowResponse(false);
  };
  return (
    <>
      <NavBar />
      <StyledContainer
        sx={{
          width: "80%",
        }}
      >
        <StyledDivLayout>
          <StyledDivPaper>
            <Typography
              variant="h5"
              textAlign={"center"}
              fontWeight="bold"
              sx={{ paddingBottom: 2.5 }}
            >
              Campaign Details
            </Typography>
            {/* Handle wallet connection here.. */}
            {wallet.status !== "connected" ? (
              <Alert
                sx={{ marginBottom: 2 }}
                severity="warning"
                action={
                  <Button
                    color="inherit"
                    size="small"
                    onClick={() => wallet.connect()}
                  >
                    Connect
                  </Button>
                }
              >
                Please connect your wallet to proceed.
              </Alert>
            ) : (
              wallet.status === "error" && (
                <Alert
                  sx={{ marginBottom: 2 }}
                  severity="error"
                  action={
                    <Button
                      color="inherit"
                      size="small"
                      onClick={() => wallet.connect()}
                    >
                      Try again
                    </Button>
                  }
                >
                  Error connecting to wallet.
                </Alert>
              )
            )}
            {/* For displaying errors.. */}
            {error && (
              <Alert sx={{ marginBottom: 2, marginTop: 2 }} severity="error">
                {error}
              </Alert>
            )}
            {errors.title ||
            errors.description ||
            errors.bannerUrl ||
            errors.minContribAmount ||
            errors.ethRaised ||
            errors.walletAddress ||
            errors.deadlineDate ||
            errors.deadlineTime ? (
              <Alert sx={{ marginBottom: 2, marginTop: 2 }} severity="error">
                All fields are required
              </Alert>
            ) : null}
            <form
              autoComplete="on"
              onSubmit={handleSubmit(handleFilledCampaignDetails)}
            >
              <Grid
                container
                spacing={1.5}
                direction="row"
                justify="center"
                alignItems="stretch"
              >
                <Grid item xs={6} spacing={0}>
                  <Box display={"flex"} flexDirection="column" gap={2}>
                    <TextField
                      id="title"
                      {...register("title", { required: true })}
                      label="Campaign Title"
                      size="small"
                      fullWidth
                      disabled={isSubmitting}
                      variant="outlined"
                      helperText="About this campaign in 2-3 words"
                    />
                    <TextField
                      id="minContribAmount"
                      {...register("minContribAmount", { required: true })}
                      label="Minimum contribution amount"
                      size="small"
                      type="number"
                      inputProps={{
                        min: 0,
                        step: 0.00001,
                      }}
                      fullWidth
                      variant="outlined"
                      helperText="How much minimum amount you are expecting from Contributors ?"
                      disabled={isSubmitting}
                    />
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Grid styl={{ height: "70%" }}>
                    <TextField
                      id="description"
                      name="description"
                      {...register("description", { required: true })}
                      label="Campaign Description"
                      size="small"
                      multiline
                      rows={4.3}
                      fullWidth
                      helperText="Help people know about this campaign. Keep it simple and short."
                      disabled={isSubmitting}
                    />
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="ethRaised"
                    {...register("ethRaised", { required: true })}
                    label="Goal (ETH)"
                    fullWidth
                    size="small"
                    type="number"
                    helperText="Amount to be raised"
                    inputProps={{
                      // min: 0.00000001,
                      step: 0.00001,
                    }}
                    disabled={isSubmitting}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="bannerUrl"
                    {...register("bannerUrl", { required: true })}
                    label="Banner Image URL"
                    type="url"
                          size="small"
                          fullWidth
                    title="This image will be shown as a banner"
                    helperText="Preferably from unsplash.com, flaticon.com, pexels.com."
                    disabled={isSubmitting}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Box sx={{ padding: 0, margin: 0 }}>
                    <Typography variant="caption" color="GrayText">
                      Campaign ends at
                    </Typography>
                    <Box display={"flex"} flexDirection="row" gap={2}>
                      <TextField
                        id="deadlineDate"
                        {...register("deadlineDate", { required: true })}
                        type={"date"}
                        inputProps={{
                          min: `${new Date(
                            new Date().getTime() + 1 * 1 * 60 * 60 * 1000 // +1 day
                          )
                            .toJSON()
                            .slice(0, 10)}`,
                        }}
                        size="small"
                        disabled={isSubmitting}
                      />
                      <TextField
                        id="deadlineTime"
                        {...register("deadlineTime", { required: true })}
                        type={"time"}
                        size="small"
                        disabled={isSubmitting}
                      />
                    </Box>
                    <Typography variant="caption" color="GrayText">
                      Please set a reasonable range, neither too short nor too
                      long.
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  {/* Just to be aligned with the date&time. */}
                  <Typography variant="caption">&nbsp;</Typography>
                  <TextField
                    required
                    id="walletAddress"
                    name="walletAddress"
                    label="Wallet Address"
                    fullWidth
                    value={wallet.account}
                    inputProps={{
                      readOnly: "read-only",
                    }}
                    title="Read-only value"
                    size="small"
                    helperText={
                      wallet.status === "connected"
                        ? "This is connected wallet's address. To switch please re-login with required wallet."
                        : "Please connect to the wallet"
                    }
                    disabled={isSubmitting}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        required
                        color="secondary"
                        name="acceptConditions"
                        value="yes"
                      />
                    }
                    label="I/We understand that, once these fields are set cannot be updated."
                  />
                </Grid>
              </Grid>
              <LoadingButton
                type="submit"
                loading={isSubmitting}
                variant="contained"
                color="success"
                disabled={isSubmitting}
              >
                Create Campaign
              </LoadingButton>
            </form>
          </StyledDivPaper>
        </StyledDivLayout>
      </StyledContainer>
      <Snackbar
        open={showResponse}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <Alert onClose={handleClose} severity={responseSeverity}>
          {responseMsg}
        </Alert>
      </Snackbar>
      <Footer />
    </>
  );
}
export default FillCampaignDetails;