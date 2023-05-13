import { Grid } from '@mui/material'
import React from 'react'
import MetamaskButton from './MetamaskButton'
import WalletAddress from './WalletAddress'

export default function ConnectWalletGrid() {
    return (
        <Grid container spacing={2}>
            <Grid item>
                <MetamaskButton />
            </Grid>
            <Grid item>
                <WalletAddress />
            </Grid>
        </Grid>
    )
}
