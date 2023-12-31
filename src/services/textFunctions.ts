import type { SplitOptions } from './helpers/split';
import { split } from './helpers/split';
import { getPrefix } from './helpers/getPrefix';
import { lowerFactory } from './helpers/lowerFactory';
import { upperFactory } from './helpers/upperFactory';
import { capitalCaseTransformFactory } from './helpers/capitalCaseTransformFactory';
import { pascalCaseTransformFactory } from './helpers/pascalCaseTransformFactory';

export type Locale = string[] | string | false | undefined;

export interface Options extends SplitOptions {
  locale?: Locale;
  prefixCharacters?: string;
}

export function noCase(input: string, options?: Options): string {
  const prefix = getPrefix(input, options?.prefixCharacters);
  return (
    prefix +
    split(input, options)
      .map(lowerFactory(options?.locale))
      .join(' ')
  );
}

export function camelCase(input: string, options?: Options): string {
  const prefix = getPrefix(input, options?.prefixCharacters);
  const lower = lowerFactory(options?.locale);
  const upper = upperFactory(options?.locale);
  const transform = pascalCaseTransformFactory(lower, upper);
  return (
    prefix +
    split(input, options)
      .map((word, index) => {
        if (index === 0) return lower(word);
        return transform(word, index);
      })
      .join('')
  );
}

export function pascalCase(input: string, options?: Options): string {
  const prefix = getPrefix(input, options?.prefixCharacters);
  const lower = lowerFactory(options?.locale);
  const upper = upperFactory(options?.locale);
  return prefix + split(input, options).map(pascalCaseTransformFactory(lower, upper)).join('');
}

export function pascalSnakeCase(input: string, options?: Options): string {
  const prefix = getPrefix(input, options?.prefixCharacters);
  const lower = lowerFactory(options?.locale);
  const upper = upperFactory(options?.locale);
  return prefix + split(input, options).map(capitalCaseTransformFactory(lower, upper)).join('_');
}

export function capitalCase(input: string, options?: Options): string {
  const prefix = getPrefix(input, options?.prefixCharacters);
  const lower = lowerFactory(options?.locale);
  const upper = upperFactory(options?.locale);
  return prefix + split(input, options).map(capitalCaseTransformFactory(lower, upper)).join(' ');
}

export function constantCase(input: string, options?: Options): string {
  const prefix = getPrefix(input, options?.prefixCharacters);
  const upper = upperFactory(options?.locale);
  return prefix + split(input, options).map(upper).join('_');
}

export function dotCase(input: string, options?: Options): string {
  const prefix = getPrefix(input, options?.prefixCharacters);
  const lower = lowerFactory(options?.locale);
  return prefix + split(input, options).map(lower).join('.');
  // "Jonnier Martinez"
  // "jonnier.martinez"
}

export function kebabCase(input: string, options?: Options): string {
  const prefix = getPrefix(input, options?.prefixCharacters);
  const lower = lowerFactory(options?.locale);
  return prefix + split(input, options).map(lower).join('-');
}

export function pathCase(input: string, options?: Options): string {
  const prefix = getPrefix(input, options?.prefixCharacters);
  const lower = lowerFactory(options?.locale);
  return prefix + split(input, options).map(lower).join('/');
}

export function sentenceCase(input: string, options?: Options): string {
  const prefix = getPrefix(input, options?.prefixCharacters);
  const lower = lowerFactory(options?.locale);
  const upper = upperFactory(options?.locale);
  const transform = capitalCaseTransformFactory(lower, upper);
  return (
    prefix +
    split(input, options)
      .map((word, index) => {
        if (index === 0) return transform(word);
        return lower(word);
      })
      .join(' ')
  );
}

export function snakeCase(input: string, options?: Options): string {
  const prefix = getPrefix(input, options?.prefixCharacters);
  const lower = lowerFactory(options?.locale);
  return prefix + split(input, options).map(lower).join('_');
}

export function trainCase(input: string, options?: Options): string {
  const prefix = getPrefix(input, options?.prefixCharacters);
  const lower = lowerFactory(options?.locale);
  const upper = upperFactory(options?.locale);
  return prefix + split(input, options).map(capitalCaseTransformFactory(lower, upper)).join('-');
}
