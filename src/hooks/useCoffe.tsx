/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-refresh/only-export-components */
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { ActionTypes } from "../reducers/products/actionTypes";
import { cartItemsReducer } from "../reducers/products/reducer";
import { CoffeeProps } from "../types/coffee";
import { productsInCartKey } from "../types/keys";

interface useCoffeesProps {
  children: ReactNode;
}

interface CoffeesContextData {
  cartItems: CoffeeProps[];
  addProductsInCart: (product: CoffeeProps, productQuantity: number) => void;
  removeAllProducts: (product: CoffeeProps) => void;
  increaseProductQuantity: (
    product: CoffeeProps,
    productQuantity: number
  ) => void;
  decreaseProductQuantity: (
    product: CoffeeProps,
    productQuantity: number
  ) => void;
  priceItem: number;
  setPriceItem: Dispatch<SetStateAction<number>>;
  totalPriceItems: number;
  setTotalPriceItems: Dispatch<SetStateAction<number>>;
  selectedPayment: string;
  setSelectedPayment: Dispatch<SetStateAction<string>>;
}

export const CoffeesContext = createContext({} as CoffeesContextData);

function CoffeesProvider({ children }: useCoffeesProps) {
  const [totalPriceItems, setTotalPriceItems] = useState<number>(0);
  const [priceItem, setPriceItem] = useState<number>(0);
  const [selectedPayment, setSelectedPayment] = useState<string>("");

  const [cartItems, dispatch] = useReducer(cartItemsReducer, [], () => {
    const storageStateAsJSON = localStorage.getItem(productsInCartKey) || "";

    try {
      return JSON.parse(storageStateAsJSON);
    } catch (error) {
      return [];
    }
  });

  /**
   * Adiciona um novo produto ao carrinho de compras, com a quantidade informada.
   *
   * @param product Objeto do produto a ser adicionado ao carrinho.
   * @param productQuantity Quantidade do produto a ser adicionado ao carrinho.
   */
  function addProductsInCart(product: CoffeeProps, productQuantity: number) {
    const newProduct = {
      ...product,
      quantity: productQuantity,
      totalItemPrice: product.price * productQuantity,
    };

    dispatch({
      type: ActionTypes.ADD_NEW_PRODUCT,
      payload: {
        newProduct,
      },
    });
  }

  /**
   * Remover completamente um produto do estado global do carrinho, independentemente da sua quantidade.
   *
   * @param product Objeto do produto que será removido do carrinho.
   */
  function removeAllProducts(product: CoffeeProps) {
    dispatch({
      type: ActionTypes.REMOVE_PRODUCT,
      payload: {
        product,
      },
    });
  }

  /**
   * Incrementa a quantidade de um produto específico no carrinho de compras.
   *
   * @param product O produto que terá sua quantidade incrementada.
   * @param productQuantity Valor da quantidade a ser adicionada ao produto no carrinho.
   */
  function increaseProductQuantity(
    product: CoffeeProps,
    productQuantity: number
  ) {
    const increaseOneItem = {
      ...product,
      quantity: productQuantity + 1,
    };

    dispatch({
      type: ActionTypes.INCREASE_PRODUCT_QUANTITY,
      payload: {
        increaseOneItem,
      },
    });

    console.log(increaseOneItem.quantity);
  }

  /**
   * Decrementa a quantidade de um produto específico no carrinho de compras.
   *
   * @param product O produto que terá sua quantidade decrementada.
   * @param productQuantity Valor da quantidade a ser subtraída do produto no carrinho.
   */
  function decreaseProductQuantity(
    product: CoffeeProps,
    productQuantity: number
  ) {
    const decreaseOneItem = {
      ...product,
      quantity: productQuantity - 1,
    };

    dispatch({
      type: ActionTypes.DECREASE_PRODUCT_QUANTITY,
      payload: {
        decreaseOneItem,
      },
    });

    console.log(decreaseOneItem.quantity);
  }

  useEffect(() => {
    const stateJSON = JSON.stringify(cartItems);

    localStorage.setItem(productsInCartKey, stateJSON);
  }, [cartItems]);

  useEffect(() => {
    const totalValue = cartItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);

    setTotalPriceItems(totalValue);
  }, [cartItems]);

  return (
    <CoffeesContext.Provider
      value={{
        cartItems,
        addProductsInCart,
        removeAllProducts,
        increaseProductQuantity,
        decreaseProductQuantity,
        priceItem,
        setPriceItem,
        totalPriceItems,
        setTotalPriceItems,
        selectedPayment,
        setSelectedPayment,
      }}
    >
      {children}
    </CoffeesContext.Provider>
  );
}

function useCoffees() {
  return useContext(CoffeesContext);
}

export { useCoffees, CoffeesProvider };
