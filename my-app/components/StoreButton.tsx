import { Button } from '@mui/material'
import { useWeb3React } from '@web3-react/core'
import { InjectedConnector } from '@web3-react/injected-connector'
import { ethers } from 'ethers'
import { useState } from 'react'
import abi from '../abi/abi.json'

export default function StoreButton({val, setVal}: {val: number, setVal: (val: number) => void}){
    const [dataSent, setDataSent] = useState(true)
    const {library, account} = useWeb3React();
    const provider = new ethers.providers.JsonRpcProvider("https://data-seed-prebsc-1-s1.binance.org:8545")
    const handleSend = async () => {
        setDataSent(false);
        const contract = new ethers.Contract("0x3253753f5DbF6f8C638dcEb465702C19131299c3", abi.abi, library || provider).connect(library.getSigner());
        await contract.store(val).then(()=>{setDataSent(true); setVal(val);});
    }
  return (
    <Button variant='contained' color={"primary"} onClick={handleSend}>
       {dataSent ? "Send" : "Sending..."} 
    </Button>
  )
}
