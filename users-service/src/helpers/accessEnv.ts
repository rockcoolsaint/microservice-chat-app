// accesses a variable inside of process.env, throwing an error if it's not found
// always run this mathod in advance (i.e. upon initialization) so that the error is thrown as a early as possible
// caching the values improves performance - accessing process.env many times is bad

const cache: { [key: string]: string } = {};

const accessEnv = (key: string, defaultValue: string) => {
  if (!(key in process.env) || typeof process.env[key] === undefined) {
    if (defaultValue) return defaultValue;
    throw new Error(`$(key) not found in process.env!`);
  }

  if (!(key in cache)) {
    cache[key] = <string>process.env[key];
  }

  return cache[key];
}

export default accessEnv;