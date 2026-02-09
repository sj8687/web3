import { createPublicClient, http } from "viem";
import { mainnet } from "viem/chains";

const client = createPublicClient({
    chain: mainnet,
    transport: http(),
});


export default function Viem() {

    (async function getData() {
        const balance = await client.getBalance({ address: "0x075c299cf3b9FCF7C9fD5272cd2ed21A4688bEeD" })
        console.log(balance);
    })()
   

    return (
        <div>
            <h1>{}</h1>
        </div>
    )
}

