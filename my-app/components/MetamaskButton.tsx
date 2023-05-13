import { Button } from '@mui/material'
import { useWeb3React } from '@web3-react/core'
import { InjectedConnector } from '@web3-react/injected-connector'

export default function MetamaskButton() {

  const { active, activate, deactivate } = useWeb3React();
  console.log(`active: ${active}`);

  const injectedConnector = new InjectedConnector({ supportedChainIds: [1, 3, 4, 5, 42, 80001] })

  const activateInjectedConnector = async () => {
    await activate(injectedConnector)
  }

  const deactivateInjectedConnector = async () => {
    await deactivate()
  }
  return (
    <Button variant='contained' color={active ? "error" : "primary"} onClick={active ? deactivateInjectedConnector : activateInjectedConnector}>
       {active ? "Disconnect Wallet" : "Connect Wallet"} 
    </Button>
  )
}
