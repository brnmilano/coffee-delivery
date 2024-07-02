export interface CoffeeProps {
  id: number;
  image: string;
  type: string[];
  name: string;
  description: string;
  price: number;
  quantity: number;
  totalItemPrice: number;
}

export type CartProductsProps = CoffeeProps & {
  productQuantity: number;
};

export type CartTotalPriceProps = CoffeeProps & {
  totalPrice: number;
};
