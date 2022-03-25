import { blsCreateProof } from "@mattrglobal/node-bbs-signatures";
const base64ToBuffer = require("base64-to-uint8array");
import { stringToUInt8Array } from "./helper/string-to-uint8array";
import data from "./data/message-signed.json"
import keys from "./data/keys.json";
import { GetPredicates } from "./get-predicates";

export async function deriveProof() {
    const signature = new Uint8Array(base64ToBuffer(data.messageSigned));

    const proof = await blsCreateProof({
        signature,
        publicKey: new Uint8Array(base64ToBuffer(keys.publicKey)),
        messages: GetPredicates(),
        nonce: stringToUInt8Array("nonce"),
        revealed: [1],
    });

    console.log(`Output proof base64 = ${Buffer.from(proof).toString("base64")}`);
}