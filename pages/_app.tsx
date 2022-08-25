import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { Web3ReactProvider } from '@web3-react/core'
import { ExternalProvider, JsonRpcFetchFunc, Web3Provider } from '@ethersproject/providers'

const getLibrary = (provider: any) => {
  return new Web3Provider(provider);
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </Web3ReactProvider>
  )
}

export default MyApp
