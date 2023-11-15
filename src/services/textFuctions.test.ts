import { camelCase, pascalCase, pascalSnakeCase, capitalCase, constantCase, dotCase, kebabCase, pathCase, sentenceCase, snakeCase, trainCase } from "./textFunctions"
import { expect, test } from 'vitest'

test('camelCase', () => {
    expect(camelCase("Simplus Labs Toolbox")).toBe("simplusLabsToolbox")
})

test('pascalCase', () => {
    expect(pascalCase("Simplus Labs Toolbox")).toBe("SimplusLabsToolbox")
})

test('pascalSnakeCase', () => {
    expect(pascalSnakeCase("Simplus Labs Toolbox")).toBe("Simplus_Labs_Toolbox")
})

test('capitalCase', () => {
    expect(capitalCase("Simplus Labs Toolbox")).toBe("Simplus Labs Toolbox")
})

test('constantCase', () => {
    expect(constantCase("Simplus Labs Toolbox")).toBe("SIMPLUS_LABS_TOOLBOX")
})

test('dotCase', () => {
    expect(dotCase("Simplus Labs Toolbox")).toBe("simplus.labs.toolbox")
})

test('pathCase', () => {
    expect(pathCase("Simplus Labs Toolbox")).toBe("simplus/labs/toolbox")
})

test('sentenceCase', () => {
    expect(sentenceCase("Simplus Labs Toolbox")).toBe("Simplus labs toolbox")
})


test('snakeCase', () => {
    expect(snakeCase("Simplus Labs Toolbox")).toBe("simplus_labs_toolbox")
})
test('kebabCase', () => {
    expect(kebabCase("Simplus Labs Toolbox")).toBe("simplus-labs-toolbox")
})
test('trainCase', () => {
    expect(trainCase("Simplus Labs Toolbox")).toBe("Simplus-Labs-Toolbox")
})