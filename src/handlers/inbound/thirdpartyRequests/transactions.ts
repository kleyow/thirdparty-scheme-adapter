import {
  forwardPostQuoteRequestToPayee,
  isPostTPRTransactionRequestValid
} from '~/domain/thirdpartyRequests/transactions'
import { Enum } from '@mojaloop/central-services-shared'
import { Request, ResponseObject, ResponseToolkit } from '@hapi/hapi'

/**
 * Handles a DFSP inbound POST /authorizations request
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function post (_context: any, _request: Request, h: ResponseToolkit): Promise<ResponseObject> {
  // Validate request
  if (!isPostTPRTransactionRequestValid(_request)) {
    return h.response().code(Enum.Http.ReturnCodes.BADREQUEST.CODE)
  }

  // TODO: DFSP lookup this consentId, sourceAccountId and pispId.

  // Request passed validation so forward the request as a POST quotes request
  forwardPostQuoteRequestToPayee(_request)

  // Note that we will have passed request validation, JWS etc... by this point
  // so it is safe to return 202
  return h.response({}).code(Enum.Http.ReturnCodes.ACCEPTED.CODE)
};

export default {
  post
}

