export function stringToUInt8Array(text: string) {
    return Uint8Array.from(Buffer.from(text, "utf-8"));
}