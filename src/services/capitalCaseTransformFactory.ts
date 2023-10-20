export function capitalCaseTransformFactory(
    lower: (input: string) => string,
    upper: (input: string) => string,
) {
    return (word: string) => `${upper(word[0])}${lower(word.slice(1))}`;
}