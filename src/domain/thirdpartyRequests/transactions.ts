import { Request } from '@hapi/hapi'
import { ThirdPartyTransactionRequest } from '../../interface/types'


export function isPostTPRTransactionRequestValid (request: Request): boolean {
  request.payload as ThirdPartyTransactionRequest
  // const fspiopSource = request.headers[Enum.Http.Headers.FSPIOP.SOURCE]
  return true
}

export async function forwardPostQuoteRequestToPayee (request: Request): Promise<void> {
}
