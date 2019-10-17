export interface QueryStringOptions {
  readonly [key: string]:
    | string
    | boolean
    | number
    | string[]
    | boolean[]
    | number[]
    | undefined
    | null;
}

export enum ArrayFormat {
  simple = 'SIMPLE',
  comma = 'COMMA'
}

const qString = (
  baseurl: string,
  options: QueryStringOptions,
  arrayFormat: ArrayFormat = ArrayFormat.simple
) => {
  // Build query string parameters
  const parameters: string[] = [];

  Object.keys(options).forEach((key: string) => {
    const value = options[key];

    // Only add parameter if we get a truthy value
    if (Boolean(value) || value === false) {
      if (Array.isArray(value)) {
        if (arrayFormat === ArrayFormat.comma) {
          parameters.push(`${key}=${value.join(',')}`);
        }
        if (arrayFormat === ArrayFormat.simple) {
          parameters.push(`${key}=${value.join(`&${key}=`)}`);
        }
      } else {
        parameters.push(`${key}=${value}`);
      }
    }
  });

  if (parameters.length > 0) {
    return encodeURI(`${baseurl}?${parameters.join('&')}`);
  }

  return encodeURI(baseurl);
};

export default qString;
