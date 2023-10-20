function toCamelCase(text: string) {
    return text
}

function SnakeCase(text: string) {
    return text
}

export const ConverterFunctions = {
    camelCase: toCamelCase,
    SnakeCase: SnakeCase
}


/*
camelCase               =>   firstName
PascalCase              =>   FirstName
SnakeCase               =>   first_name
KebabCase               =>   first-name
UpperCase + SnakeCase   =>   FIRST_NAME
lowercase               =>   firstname
*/