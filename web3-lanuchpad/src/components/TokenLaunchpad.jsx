import { createInitializeMint2Instruction, createMint, getMinimumBalanceForRentExemptMint, MINT_SIZE, TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { Keypair, SystemProgram, Transaction } from "@solana/web3.js";

export function TokenLaunchpad() {

    const wallet = useWallet();
    const {connection} = useConnection();

    async function createToken() {
        const name = document.getElementById('name').value;
        const symbol = document.getElementById('symbol').value;
        const ImageUrl = document.getElementById('ImageUrl').value;
        const initialsupply = document.getElementById('initialsupply').value;

        console.log(
            "name:",name,
            "symbol:",symbol,
            "ImageUrl:",ImageUrl,
            "initialsupply:",initialsupply
        );
        
        // createMint();

        const lamports = await getMinimumBalanceForRentExemptMint(connection);
        const keypair = Keypair.generate();

        const transaction = new Transaction().add(
            SystemProgram.createAccount({
                fromPubkey: wallet.publicKey,
                newAccountPubkey: keypair.publicKey,
                space: MINT_SIZE,
                lamports,
                programId:TOKEN_PROGRAM_ID,
            }),
            createInitializeMint2Instruction(keypair.publicKey,6,wallet.publicKey,wallet.publicKey,TOKEN_PROGRAM_ID)
        )

        const recentBlockhash = await connection.getLatestBlockhash();
        transaction.recentBlockhash = recentBlockhash.blockhash;
        transaction.feePayer = wallet.publicKey;
        
        transaction.partialSign(keypair);
       let res = await wallet.sendTransaction(transaction,connection);

        console.log(res);
        
        
    }
    return  <div style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    }}>
        <h1>Solana Token Launchpad</h1>
        <input id="name" className='inputText' type='text' placeholder='Name'></input> <br />
        <input id="symbol" className='inputText' type='text' placeholder='Symbol'></input> <br />
        <input id="ImageUrl" className='inputText' type='text' placeholder='Image URL'></input> <br />
        <input id="initialsupply" className='inputText' type='text' placeholder='Initial Supply'></input> <br />
        <button onClick={createToken} className='btn'>Create a token</button>
    </div>
}
































// import { useWallet, useConnection } from "@solana/wallet-adapter-react";
// import { Keypair, Transaction, SystemProgram, PublicKey } from "@solana/web3.js";
// import { TOKEN_PROGRAM_ID, MINT_SIZE, createInitializeMint2Instruction, getMinimumBalanceForRentExemptMint, createMintToInstruction } from "@solana/spl-token";

// const wallet = useWallet();
// const { connection } = useConnection();

// async function createToken() {
//     try {
//         const name = document.getElementById("name").value;
//         const symbol = document.getElementById("symbol").value;
//         const initialsupply = Number(document.getElementById("initialsupply").value);

//         if (!wallet.connected) {
//             alert("Connect your wallet first!");
//             return;
//         }

//         // 1️⃣ Calculate rent-exempt balance
//         const lamports = await getMinimumBalanceForRentExemptMint(connection);

//         // 2️⃣ Create new Keypair for the mint
//         const mintKeypair = Keypair.generate();

//         // 3️⃣ Create transaction to create & initialize mint
//         const transaction = new Transaction().add(
//             SystemProgram.createAccount({
//                 fromPubkey: wallet.publicKey,
//                 newAccountPubkey: mintKeypair.publicKey,
//                 space: MINT_SIZE,
//                 lamports,
//                 programId: TOKEN_PROGRAM_ID,
//             }),
//             createInitializeMint2Instruction(
//                 mintKeypair.publicKey,
//                 9, // decimals
//                 wallet.publicKey, // mint authority
//                 wallet.publicKey, // freeze authority
//                 TOKEN_PROGRAM_ID
//             )
//         );

//         // 4️⃣ Sign & send transaction
//         transaction.feePayer = wallet.publicKey;
//         const { blockhash } = await connection.getLatestBlockhash();
//         transaction.recentBlockhash = blockhash;

//         transaction.partialSign(mintKeypair); // sign with mint account
//         const txSignature = await wallet.sendTransaction(transaction, connection);
//         await connection.confirmTransaction(txSignature, "confirmed");

//         console.log("✅ Token Mint Created:", mintKeypair.publicKey.toBase58());

//         // 5️⃣ Create token account for wallet to receive tokens
//         const tokenAccountPubkey = await (async () => {
//             const associatedToken = await PublicKey.findProgramAddress(
//                 [wallet.publicKey.toBuffer(), TOKEN_PROGRAM_ID.toBuffer(), mintKeypair.publicKey.toBuffer()],
//                 new PublicKey("ATokenGPv..." /* Associated Token Program ID */)
//             );
//             return associatedToken[0];
//         })();

//         // 6️⃣ Mint initial supply to your wallet
//         const mintTx = new Transaction().add(
//             createMintToInstruction(
//                 mintKeypair.publicKey,
//                 tokenAccountPubkey,
//                 wallet.publicKey,
//                 initialsupply * 10 ** 9 // account for decimals
//             )
//         );

//         const mintSignature = await wallet.sendTransaction(mintTx, connection);
//         await connection.confirmTransaction(mintSignature, "confirmed");

//         console.log(`✅ Minted ${initialsupply} tokens to your wallet`);
//         alert(`Token created! Mint: ${mintKeypair.publicKey.toBase58()}`);
//     } catch (err) {
//         console.error("Error creating token:", err);
//     }
// }
