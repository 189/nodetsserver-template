import crypto, { RsaPublicKey, RsaPrivateKey, KeyLike } from "crypto";
import { catcher } from "./error";

type Key = RsaPublicKey | RsaPrivateKey | KeyLike;
type BufferOrEmpty = Buffer | "";

/*
 * const message = "吃葡萄不吐葡萄皮不吃葡萄到吐葡萄皮";
 * const cryptMessage = publicEncrypt(pubKey, Buffer.from(message));
 * const hexContent = cryptMessage.toString("hex");
 */

// const deCryptMessage = privateDecrypt(privKey, Buffer.from(hexContent, "hex"));

/*
 * console.log(hexContent);
 * console.log(deCryptMessage.toString(), deCryptMessage.toString() === message);
 */

export function publicEncrypt(key: Key, buffer: NodeJS.ArrayBufferView): BufferOrEmpty {
  return catcher<BufferOrEmpty>(() => crypto.publicEncrypt(key, buffer));
}

export function publicDecrypt(key: Key, buffer: NodeJS.ArrayBufferView): BufferOrEmpty {
  return catcher<BufferOrEmpty>(() => crypto.publicDecrypt(key, buffer));
}

export function privateEncrypt(key: Key, buffer: NodeJS.ArrayBufferView): BufferOrEmpty {
  return catcher<BufferOrEmpty>(() => crypto.privateEncrypt(key, buffer));
}

export function privateDecrypt(key: Key, buffer: NodeJS.ArrayBufferView): BufferOrEmpty {
  return catcher<BufferOrEmpty>(() => crypto.privateDecrypt(key, buffer));
}
