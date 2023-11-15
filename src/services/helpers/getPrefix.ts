// The default characters to keep after transforming case.
const DEFAULT_PREFIX_CHARACTERS = "";

export function getPrefix(
    input: string,
    prefixCharacters = DEFAULT_PREFIX_CHARACTERS,
): string {
    let prefix = "";
    for (let i = 0; i < input.length; i++) {
        const char = input.charAt(i);
        if (prefixCharacters.includes(char)) {
            prefix += char;
        } else {
            break;
        }
    }
    return prefix;
}
