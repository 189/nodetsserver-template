import fetch, { Response } from "node-fetch";
import { logger } from "../utils/logger";

const TIMEOUT = 10000;

function checkStatus(response: Response) {
  if (response.ok) {
    return response;
  }
  const error = new Error(response.statusText);
  logger.error(response);
  return Promise.reject(error);
}

class Fetcher {
  constructor() {}

  doFetch<T>(url: string, options = {}): Promise<T> {
    const opt = Object.assign(options, {
      timeout: TIMEOUT,
    });
    return fetch(url, opt)
      .then(checkStatus)
      .then((r) => r.json());
  }
}

export default Fetcher;
