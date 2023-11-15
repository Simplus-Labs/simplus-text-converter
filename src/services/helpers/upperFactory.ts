export type Locale = string[] | string | false | undefined;


export function upperFactory(locale: Locale): (input: string) => string {
    return locale === false
        ? (input: string) => input.toUpperCase()
        : (input: string) => input.toLocaleUpperCase(locale);
}
