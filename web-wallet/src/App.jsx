import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton
} from '@solana/wallet-adapter-react-ui';

import '@solana/wallet-adapter-react-ui/styles.css';
import Airdrop from './Airdrop';


function App() {

  return (
    //replace this url with Alchemy solana devnet url  
   <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/UsUCdyu8G71bFZLNaKgQz"}>
  <WalletProvider wallets={[]} autoConnect>
    <WalletModalProvider>
      <div className="wallet-page">
        <div className="wallet-wrapper">

          <div className="wallet-buttons">
            <WalletMultiButton />
            <WalletDisconnectButton />
          </div>

          <div className="wallet-greeting">
            <b>hii there</b>
          </div>

          <Airdrop />

        </div>
      </div>
    </WalletModalProvider>
  </WalletProvider>
</ConnectionProvider>

  )
}

export default App
