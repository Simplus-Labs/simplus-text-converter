
export function pascalCaseTransformFactory(
    lower: (input: string) => string,
    upper: (input: string) => string,
) {
    return (word: string, index: number) => {
        const char0 = word[0];
        const initial =
            index > 0 && char0 >= "0" && char0 <= "9" ? "_" + char0 : upper(char0);
        return initial + lower(word.slice(1));
    };
}