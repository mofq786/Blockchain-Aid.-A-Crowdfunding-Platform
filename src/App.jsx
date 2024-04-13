// library and component imports..
import "./App.css";

// custom imports
// import Feed from "./components/Feed";
import { Box } from "@mui/material";
//import SignIn from "./pages/SignIn";
//import SignUp from "./pages/SignUp";
import CreateCampaignWrapper from "./pages/campaigns/CreateCampaignWrapper";
import FillCampaignDetails from "./pages/campaigns/FillCampaignDetails";
import HomePage from "./pages/HomePage";
import ActiveCampaigns from "./pages/campaigns/ActiveCampaigns";
import ViewCampaign from "./pages/campaigns/ViewCampaign";
import Guide from "./pages/Guide";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// For wallet connection & usage..
import { UseWalletProvider } from "use-wallet";

function App() {
  return (
    <UseWalletProvider
      chainId={4}
      connectors={{
        walletconnect: {
          rpcUrl:
            "https://eth-sepolia.g.alchemy.com/v2/zKcZ0eD-TwTnQ4iMLH9GTNIjl-exhAV1",
        },
      }}
    >
      <Router>
          <Routes>
            <Route index element={<HomePage />} />
            
            <Route
              path="/create-campaign"
              element={
                
                <FillCampaignDetails />
                
              }
            />
            <Route path="/active-campaigns" element={<ActiveCampaigns />} />
            <Route path="/guide" element={<Guide />} />
            <Route path="/campaign/*" element={<ViewCampaign />} />
          </Routes>
        
      </Router>
    </UseWalletProvider>
  );
}

export default App;
