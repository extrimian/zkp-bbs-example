import { blsSign, generateBls12381G2KeyPair } from "@mattrglobal/node-bbs-signatures";
import { GetPredicates } from "./get-predicates";

export async function issuerSignMessage() {
    const keyPair = await generateBls12381G2KeyPair();

    console.log(`Public key base64`, Buffer.from(keyPair.publicKey).toString("base64"));
    console.log(`Private key key base64`, Buffer.from(keyPair.secretKey!).toString("base64"));

    const messages = GetPredicates();

    console.log("Signing a message set of " + messages);

    //Create the signature
    const signature = await blsSign({
        keyPair,
        messages: messages,
    });

    console.log(`Output signature base64`, Buffer.from(signature).toString("base64"));
}