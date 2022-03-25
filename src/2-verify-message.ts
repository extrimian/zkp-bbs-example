import { blsVerify } from "@mattrglobal/node-bbs-signatures";
import keys from "./data/keys.json";
import { AgePredicate, NationalityPredicate } from "./enums/predicate";
const base64ToBuffer = require("base64-to-uint8array");
import { stringToUInt8Array } from "./helper/string-to-uint8array";
import data from "./data/message-signed.json"

export async function verifyMessage() {
    const signature = new Uint8Array(await base64ToBuffer(data.messageSigned));
    const issuerPublicKey = keys.publicKey;
    const isVerified = await blsVerify({
        publicKey: new Uint8Array(await base64ToBuffer(issuerPublicKey)),
        messages: [
            stringToUInt8Array(NationalityPredicate.Argentinian),
            stringToUInt8Array(AgePredicate.Adult),
        ],
        signature,
    });

    const isVerifiedString = JSON.stringify(isVerified);
    console.log(`Signature verified ? ${isVerifiedString}`);
}