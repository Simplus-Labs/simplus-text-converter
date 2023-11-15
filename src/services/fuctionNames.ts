import {
  camelCase,
  pascalCase,
  pascalSnakeCase,
  capitalCase,
  constantCase,
  dotCase,
  kebabCase,
  pathCase,
  sentenceCase,
  snakeCase,
  trainCase,
} from './textFunctions';

// https://refactoring.guru/es/design-patterns/command/typescript/example#lang-features

export type ConverterFunctionName =
  | 'camelcase'
  | 'pascalcase'
  | 'pascalsnakecase'
  | 'capitalcase'
  | 'constantcase'
  | 'dotcase'
  | 'kebabcase'
  | 'pathcase'
  | 'sentencecase'
  | 'snakecase'
  | 'traincase';

export type ConverterFunction = (input: string) => string;

export type ConverterFunctionsObject = {
  [key in ConverterFunctionName]: ConverterFunction;
};

export const ConverterFunctions: ConverterFunctionsObject = {
  camelcase: (input: string) => camelCase(input),
  pascalcase: (input: string) => pascalCase(input),
  pascalsnakecase: (input: string) => pascalSnakeCase(input),
  capitalcase: (input: string) => capitalCase(input),
  constantcase: (input: string) => constantCase(input),
  dotcase: (input: string) => dotCase(input),
  kebabcase: (input: string) => kebabCase(input),
  pathcase: (input: string) => pathCase(input),
  sentencecase: (input: string) => sentenceCase(input),
  snakecase: (input: string) => snakeCase(input),
  traincase: (input: string) => trainCase(input),
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
