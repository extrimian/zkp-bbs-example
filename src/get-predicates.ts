import { AgePredicate, NationalityPredicate } from "./enums/predicate";
import { stringToUInt8Array } from "./helper/string-to-uint8array";

export function GetPredicates() {
    return [
        stringToUInt8Array(NationalityPredicate.Argentinian),
        stringToUInt8Array(AgePredicate.Adult),
    ]
}