import { logger } from "./logger";

export function catcher<T>(fn: (...args: any[]) => any): T | "" {
  try {
    return fn();
  } catch (ex) {
    logger.error(ex);
    return "";
  }
}
