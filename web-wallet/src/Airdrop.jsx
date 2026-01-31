import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { useEffect, useState } from "react";

export default function Airdrop() {
  const { connection } = useConnection();
  const wallet = useWallet();

  const [balance, setBalance] = useState(null);

  async function getBalance() {
    if (!wallet.publicKey) return;

    const bal = await connection.getBalance(wallet.publicKey);
    setBalance(bal / 1000000000); 
  }

  async function sendAirdropToUser() {
    const amount = document.getElementById("publickey").value;

    await connection.requestAirdrop(
      wallet.publicKey,
      amount * 1000000000
    );

    alert("Airdrop successful 🚀");
    getBalance(); 
  }

  useEffect(() => {
    getBalance();
  }, [wallet.publicKey]);

  return (
    <div className="airdrop-card">
      <h1>
        Public Key:
        <br />
        {wallet?.publicKey?.toString()}
      </h1>

      <p>
        <b>Balance:</b>{" "}
        {balance !== null ? `${balance} SOL` : "Loading..."}
      </p>

      <input
        id="publickey"
        className="airdrop-input"
        placeholder="Amount in SOL"
      />

      <button
        className="airdrop-button"
        onClick={sendAirdropToUser}
        disabled={!wallet.publicKey}
      >
        Send Airdrop
      </button>
    </div>
  );
}
