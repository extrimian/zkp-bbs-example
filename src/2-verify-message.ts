import { blsVerify } from "@mattrglobal/node-bbs-signatures";
import keys from "./data/keys.json";
import { PredicadoEdad, PredicadoNacionalidad, PredicadoTipoLicencia } from "./enums/predicate";
const base64ToBuffer = require("base64-to-uint8array");
import { stringToUInt8Array } from "./helper/string-to-uint8array";
import data from "./data/message-signed.json"

export async function verifyMessage() {
    const messageSigned = data.messageSigned;
    const signature = new Uint8Array(await base64ToBuffer(messageSigned));

    const issuerPublicKey = keys.publicKey;
    
    const isVerified = await blsVerify({
        publicKey: new Uint8Array(await base64ToBuffer(issuerPublicKey)),
        messages: [
            stringToUInt8Array("Juan Perez"),
            stringToUInt8Array(PredicadoTipoLicencia.Profesional),
            stringToUInt8Array(PredicadoNacionalidad.Argentino),
            stringToUInt8Array(PredicadoEdad.Menor65),
        ],
        signature,
    });

    const isVerifiedString = JSON.stringify(isVerified);
    console.log(`Signature verified ? ${isVerifiedString}`);
}