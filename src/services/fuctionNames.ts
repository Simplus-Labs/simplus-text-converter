import { camelCase, pascalCase, pascalSnakeCase, capitalCase, constantCase, dotCase, kebabCase, pathCase, sentenceCase, snakeCase, trainCase } from "./textFunctions"

export const ConverterFunctions = {
    camelCase: camelCase,
    pascalCase: pascalCase,
    pascalSnakeCase: pascalSnakeCase,
    capitalCase: capitalCase,
    constantCase: constantCase,
    dotCase: dotCase,
    kebabCase: kebabCase,
    pathCase: pathCase,
    sentenceCase: sentenceCase,
    snakeCase: snakeCase,
    trainCase: trainCase,

}

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