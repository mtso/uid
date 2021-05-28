import { randomBytes } from 'https://deno.land/std@0.97.0/node/crypto.ts'
import { Buffer } from 'https://deno.land/std@0.97.0/node/buffer.ts'

export async function randomUid(len: number = 128, enc: string = 'hex') {
  return new Promise((resolve, reject) => {
    randomBytes(Math.ceil(number / 8), (err, buf: Buffer) => {
      if (err) return reject(err);
      resolve(buf.toString(enc));
    });
  });
}
