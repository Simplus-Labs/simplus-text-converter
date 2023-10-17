export default class CamelCase {
    constructor(private _input: string) { }

    public availableTransformations: string[] = ["PascalCase"];

    get camelCaseToPascalCase() {
        // Logic to convert CamelCase to PascalCase
        // Implement your conversion logic here
        return this._input;
    }
}