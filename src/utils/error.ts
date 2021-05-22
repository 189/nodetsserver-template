import { logger } from "./logger";
console.log(1);
console.log(1);
console.log(1);
console.log(1);
console.log(1);
console.log(1);
console.log(1);
console.log(1);
console.log(1);
console.log(1);
export function catcher<T>(fn: (...args: any[]) => any): T | "" {
  try {
    return fn();
  } catch (ex) {
    logger.error(ex);
    return "";
  }
}
