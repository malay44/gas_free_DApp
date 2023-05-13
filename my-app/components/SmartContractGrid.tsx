import { Grid, TextField } from '@mui/material'
import { ethers } from 'ethers';
import React, { useEffect, useState } from 'react'
import MetamaskButton from './MetamaskButton'
import abi from '../abi/abi.json'
import { useWeb3React } from '@web3-react/core';
import StoreButton from './StoreButton';

export default function SmartContractGrid() {
    const [val, setVal] = useState(0);
    const [newVal, setNewVal] = useState(val);
    const {library, account} = useWeb3React();
    const provider = new ethers.providers.JsonRpcProvider("https://data-seed-prebsc-1-s1.binance.org:8545")
    useEffect(() => {
        const init = async () => {
            const contract = new ethers.Contract("0x3253753f5DbF6f8C638dcEb465702C19131299c3", abi.abi, library || provider);
            console.log(contract);
            const value = await contract.retrieve();
            setVal(value);
        }
        init();
    }, [])


    return (
        <Grid container spacing={2}>
            <Grid item>
                <TextField
                    label="Data"
                    variant="filled"
                    color="success"
                    focused
                    placeholder={val.toString()}
                    onChange={(e) => setNewVal(parseInt(e.target.value))}
                />
            </Grid>
            <Grid item>
                <StoreButton val={newVal} setVal={setVal}/>
            </Grid>
        </Grid>
    )
}
