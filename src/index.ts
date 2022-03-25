import { issuerSignMessage } from "./1-issuer-sign-message"
import { verifyMessage } from "./2-verify-message";
import { deriveProof } from "./3-derive-proof";
import { verifyDerivedProof } from "./4-verify-derived-proof";

const main = async () => {
    // 1. Generar claves del Issuer y firmar un mensaje
    await issuerSignMessage();

    // 2. Verificar el mensaje con la clave publica del issuer.
    // await verifyMessage();
    
    // 3. Derivar el mensaje
    // await deriveProof();
    
    // 4. Verificar el mensaje derivado
    // await verifyDerivedProof();
}

main();