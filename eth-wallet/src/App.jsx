import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Wagmi from "./component/Wagmi";
import { http, createConfig, WagmiProvider } from 'wagmi'
import { base, mainnet, optimism } from 'wagmi/chains'
import { injected, metaMask, safe, walletConnect } from 'wagmi/connectors'
import { WalletOptions } from "./component/Wallet";
import { Account } from "./component/Balance";
import { SendTransaction } from "./component/Sendtrans";

// const projectId = '<WALLETCONNECT_PROJECT_ID>'

export const config = createConfig({
  chains: [mainnet],
  connectors: [
    injected()
  ],
  transports: {
    [mainnet.id]: http(),
    [base.id]: http(),
  },
})

const queryClient = new QueryClient()



function App() {

  return (
    <>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>

            <WalletOptions />
            <Wagmi />
            <Account />
            <SendTransaction />

        </QueryClientProvider>
      </WagmiProvider>
    </>
  )
}

export default App




















// import Tood from "./component/Tood"
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// const queryClient = new QueryClient();

// function App() {

//   return (
//     <QueryClientProvider client={queryClient}>  
//     <Tood />
// // <Viem />
//     </QueryClientProvider>
//   )
// }

// export default App
