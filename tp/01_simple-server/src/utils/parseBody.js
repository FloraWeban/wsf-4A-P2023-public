/**
 * @param  { import('http').IncomingMessage } req
 */
export async function parseBody(req) {
  const buffer = []

  for await (const chunk of req) {
    buffer.push(chunk)
  }

  const data = Buffer.concat(buffer).toString()

  return data
}
