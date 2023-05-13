import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Web3ReactProvider } from '@web3-react/core'
import {Web3Provider} from '@ethersproject/providers'

export default function App({ Component, pageProps }: AppProps) {
  function getLibrary(provider: any, connecter: any){
    return new Web3Provider(provider)
  }
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Component {...pageProps} />
    </Web3ReactProvider>
    )
}
