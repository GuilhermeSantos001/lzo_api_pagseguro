import { TypePaymentMethodAuthenticationMethodType, TypePaymentMethodAuthenticationMethodStatus } from '../types/index';

declare type Type = {
  /**
   * @description Indicates the authentication method used for billing.
   *
   * - THREEDS: If the authentication method used is 3DS.
   * - INAPP : If the authentication method used is InApp. Conditional for ELO Network Token.
   */
  type: TypePaymentMethodAuthenticationMethodType;
  /**
   * @description Unique identifier generated in client authentication success scenario.
   */
  cavv: string;
  /**
   * @description E-Commerce indicator returned when authentication occurs. It corresponds to the result of the authentication.
   */
  eci: string;
  /**
   * @description Identifier of a transaction from an MPI. Recommended for the VISA flag. Conditional for 3DS.
   */
  xid: string;
  /**
   * @description Version of the 3DS protocol used for authentication.
   *
   * - 2.0.1
   * - 2.2.0
   * - 1.0.2
   */
  version: string;
  /**
   * @description Transaction ID generated by the directory server during an authentication.
   *
   *  - Recommended for the Mastercard card.
   *  - Conditional for 3DS.
   */
  dstrans_id: string;
  /**
   * @description Status of a 3DS authentication.
   *
   * - AUTHENTICATED
   * - NOT AUTHENTICATED
   */
  status: TypePaymentMethodAuthenticationMethodStatus;
}

export default Type;