/** Check if all the vals in an object are not empty strings
 *
 * @returns: boolean
 */
export function isValsFilled(obj: Record<string, any>): boolean {
    return Object.values(obj).every(v => v);
}

/**
 * Zip an array into keys with empty string values
 *
 * @param arr - Array of strings to be used as keys
 * @returns Object with keys from the array and empty string values
 *
 * @example ["key1", "key2",...] => {"key1": "", "key2": "",...}
 */
export function zipArrToObj(arr: string[]): Record<string, string> {
    return Object.fromEntries(arr.map(key => [key, ""]));
}