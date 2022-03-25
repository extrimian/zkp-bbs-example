import { blsVerify, blsVerifyProof } from "@mattrglobal/node-bbs-signatures";
import keys from "./data/keys.json";
import { AgePredicate, NationalityPredicate } from "./enums/predicate";
const base64ToBuffer = require("base64-to-uint8array");
import { stringToUInt8Array } from "./helper/string-to-uint8array";
import data from "./data/derived-message.json";

export async function verifyDerivedProof() {
    const derivedProof = data.derivedMessage;
    console.log("Derived Proof", derivedProof);

    const proof = new Uint8Array(base64ToBuffer(derivedProof));

    const issuerPublicKeyBase64 = keys.publicKey;
    const issuerPublicKey = new Uint8Array(base64ToBuffer(issuerPublicKeyBase64));

    const isProofVerified = await blsVerifyProof({
        proof,
        publicKey: issuerPublicKey,
        messages: [
            stringToUInt8Array(AgePredicate.Adult),
        ],
        nonce: stringToUInt8Array("nonce"),
    });

    const isProofVerifiedString = JSON.stringify(isProofVerified);
    console.log(`Proof verified ? ${isProofVerifiedString}`);
}