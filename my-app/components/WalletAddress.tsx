import { Typography } from "@mui/material";
import { useWeb3React } from "@web3-react/core";

export default function WalletAddress() {
    const {account} = useWeb3React();
  return (
    <div>
        <Typography>
            Wallet Address:- {account}
        </Typography>
    </div>
  )
}
