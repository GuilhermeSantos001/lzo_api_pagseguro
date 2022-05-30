const validate = (payment_method_boleto_sub_merchant_tax_id: string): string => {
  if (
    !/[0-9]{11}/.test(payment_method_boleto_sub_merchant_tax_id) && // eslint-disable-line
    !/[0-9]{14}/.test(payment_method_boleto_sub_merchant_tax_id) // eslint-disable-line
  ) {
    throw new Error('Invalid payment method boleto sub merchant tax id! This need to be only numbers and between 11 and 14');
  }

  return payment_method_boleto_sub_merchant_tax_id;
};

// eslint-disable-next-line
export default validate;