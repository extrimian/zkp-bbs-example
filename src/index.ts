import { issuerSignMessage } from "./1-issuer-sign-message"
import { verifyMessage } from "./2-verify-message";
import { deriveProof } from "./3-derive-proof";
import { verifyDerivedProof } from "./4-verify-derived-proof";

const main = async () => {
    await issuerSignMessage();
    await verifyMessage();
    await deriveProof();
    await verifyDerivedProof();
}

main();