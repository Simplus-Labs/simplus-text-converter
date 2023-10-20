export type Locale = string[] | string | false | undefined;

export function lowerFactory(locale: Locale): (input: string) => string {
    return locale === false
        ? (input: string) => input.toLowerCase()
        : (input: string) => input.toLocaleLowerCase(locale);
}