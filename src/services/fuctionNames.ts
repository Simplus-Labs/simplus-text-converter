import { camelCase, pascalCase, pascalSnakeCase, capitalCase, constantCase, dotCase, kebabCase, pathCase, sentenceCase, snakeCase, trainCase } from "./textFunctions"

// https://refactoring.guru/es/design-patterns/command/typescript/example#lang-features

export type ConverterFunctionName =
    | "camelCase"
    | "pascalCase"
    | "pascalSnakeCase"
    | "capitalCase"
    | "constantCase"
    | "dotCase"
    | "kebabCase"
    | "pathCase"
    | "sentenceCase"
    | "snakeCase"
    | "trainCase";

export type ConverterFunction = (input: string) => string;

interface ConverterFunctionsObject {
    [key: string]: ConverterFunction;
}

export const ConverterFunctions: ConverterFunctionsObject = {
    camelCase: (input: string) => camelCase(input),
    pascalCase: (input: string) => pascalCase(input),
    pascalSnakeCase: (input: string) => pascalSnakeCase(input),
    capitalCase: (input: string) => capitalCase(input),
    constantCase: (input: string) => constantCase(input),
    dotCase: (input: string) => dotCase(input),
    kebabCase: (input: string) => kebabCase(input),
    pathCase: (input: string) => pathCase(input),
    sentenceCase: (input: string) => sentenceCase(input),
    snakeCase: (input: string) => snakeCase(input),
    trainCase: (input: string) => trainCase(input),
};



/*
    camelCase          =>  (`fooBar`)
    pascalCase         =>  (`FooBar`)    
    pascalSnakeCase    =>  (`Foo_Bar`)       
    capitalCase        =>  (`Foo Bar`)
    constantCase       =>  (`FOO_BAR`)   
    dotCase            =>  (`foo.bar`)
    kebabCase          =>  (`foo-bar`)
    pathCase           =>  (`foo/bar`)
    sentenceCase       =>  (`Foo bar`)    
    snakeCase          =>  (`foo_bar`)
    trainCase          =>  (`Foo-Bar`)
*/