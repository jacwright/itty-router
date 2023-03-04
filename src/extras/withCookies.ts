import { IRequest } from '..'

// withCookies - embeds cookies object into the request
export const withCookies = (request: IRequest): void => {
  request.cookies = {}
  try {
    request.cookies = (request.headers.get('Cookie') || '')
      .split(/;\s*/)
      .map((pair: string) => pair.split(/=(.+)/))
      .reduce((acc, [key, value]) => {
        acc[key] = value

        return acc
      }, {})
  } catch (err) {}
}
