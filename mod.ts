import { randomBytes } from 'https://deno.land/std@0.97.0/node/crypto.ts'
import { Buffer } from 'https://deno.land/std@0.97.0/node/buffer.ts'

export async function randomUid(len: number = 128, enc: string = 'hex') {
  return new Promise((resolve, reject) => {
    randomBytes(Math.ceil(len / 8), (err, buf?: Buffer) => {
      if (err) return reject(err);
      if (!buf) return reject(new Error("Invalid result"));
      resolve(buf.toString(enc));
    });
  });
}
