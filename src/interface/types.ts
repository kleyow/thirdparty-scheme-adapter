'use strict'

/**
 * This is used for personal information
 */
export interface PersonalInfo {
  complexName?: {
    firstName?: string;
    middleName?: string;
    lastName?: string;
  };
  dateOfBirth?: string;
}
export interface PartyIdInfo {
  partyIdType: string;
  partyIdentifier: string;
  partySubIdOrType?: string;
  fspId?: string;
}
export enum AmountType {
  SEND = 'SEND',
  RECEIVE = 'RECEIVE',
}
/**
* common interface used for payee and payer
*/
export interface Party {
  partyIdInfo: PartyIdInfo;
  merchantClassificationCode?: string;
  name?: string;
  personalInfo?: PersonalInfo;
}
/**
* This is used for amount feilds
*/
export interface Money {
  currency: string;
  amount: string;
}
/**
* This interface used for transaction information
*/
export interface TransactionType {
  scenario: string;
  subScenario?: string;
  initiator: string;
  initiatorType: string;
  refundInfo?: {
    originalTransactionId: string;
    refundReason?: string;
  };
  balanceOfPayments?: string;
}
/**
* This interface used for transaction requests
*/
export interface ThirdPartyTransactionRequest {
  transactionRequestId: string;
  sourceAccountId: string;
  consentId: string;
  payee: Party;
  payer: Party;
  amountType: AmountType;
  amount: Money;
  transactionType: TransactionType;
  expiration: string;
}
/**
* This interface used for common errors
*/
export interface ErrorInformation {
  errorCode?: string;
  errorDescription?: string;
  extensionList?: {
    extension: [{
      key: string;
      value: string;
    }];
  };
}
