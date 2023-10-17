// class example of functionalities 

export default class camelCase {
    constructor(private _input: string) { }

    public avalibleTransformations: [string] = ["PascalCase"]

    get camelCaseToPascalCase() {
        // logic to camel case
        return this._input
    }
}