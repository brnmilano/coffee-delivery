export type AddressProps = {
  cep: string;
  street: string;
  number: string;
  complement?: string;
  district: string;
  city: string;
  uf: string;
};

export type PaymentMethodProps = AddressProps & {
  selectedPayment: string;
};

export type AddressAndPaymentMethodProps = {
  cep: string;
  street: string;
  number: string;
  complement?: string;
  district: string;
  city: string;
  uf: string;
  selectedPayment: string;
};
