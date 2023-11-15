// Regexps involved with splitting words in various case formats.
const SPLIT_LOWER_UPPER_RE = /([\p{Ll}\d])(\p{Lu})/gu;
const SPLIT_UPPER_UPPER_RE = /(\p{Lu})([\p{Lu}][\p{Ll}])/gu;
const SPLIT_NUMBER_LOWER_RE = /(\d)(\p{Ll})/gu;
const SPLIT_LETTER_NUMBER_RE = /(\p{L})(\d)/gu;

// Regexp involved with stripping non-word characters from the result.
const DEFAULT_STRIP_REGEXP = /[^\p{L}\d]+/giu;

// The replacement value for splits.
const SPLIT_REPLACE_VALUE = '$1\0$2';

export interface SplitOptions {
  separateNumbers?: boolean;
}

export function split(input: string, options: SplitOptions = {}): string[] {
  /* 
    The final result is an arrangement of divided words,

    with the option to separate numbers from letters if specified in the parameter options.
    */
  const { separateNumbers } = options;
  let result = input.trim();

  result = result.replace(SPLIT_LOWER_UPPER_RE, SPLIT_REPLACE_VALUE).replace(SPLIT_UPPER_UPPER_RE, SPLIT_REPLACE_VALUE);

  if (separateNumbers != null) {
    result = result
      .replace(SPLIT_NUMBER_LOWER_RE, SPLIT_REPLACE_VALUE)
      .replace(SPLIT_LETTER_NUMBER_RE, SPLIT_REPLACE_VALUE);
  }

  result = result.replace(DEFAULT_STRIP_REGEXP, '\0');

  let start = 0;
  let end = result.length;

  // Trim the delimiter from around the output string.
  while (result.charAt(start) === '\0') start++;
  if (start === end) return [];
  while (result.charAt(end - 1) === '\0') end--;

  return result.slice(start, end).split(/\0/g);

  // ""
}
