import { PredicadoEdad, PredicadoNacionalidad, PredicadoTipoLicencia } from "./enums/predicate";
import { stringToUInt8Array } from "./helper/string-to-uint8array";

export function GetPredicates() {
    return [
        stringToUInt8Array("Juan Perez"),
        stringToUInt8Array(PredicadoTipoLicencia.Profesional),
        stringToUInt8Array(PredicadoNacionalidad.Argentino),
        stringToUInt8Array(PredicadoEdad.Menor65),
    ]
}