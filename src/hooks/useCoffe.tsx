/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-refresh/only-export-components */
import { ReactNode, createContext, useContext, useReducer } from "react";

interface useCoffeesProps {
  children: ReactNode;
}

export interface Coffee {
  id: number;
  image: string;
  type: string[];
  name: string;
  description: string;
  price: number;
  quantity: number;
}

interface CoffeesContextData {
  cartItems: Coffee[];
  addProductsInCart: (product: Coffee, productQuantity: number) => void;
  increaseProductQuantity: (product: Coffee, productQuantity: number) => void;
  decreaseProductQuantity: (product: Coffee, productQuantity: number) => void;
}

export const CoffeesContext = createContext({} as CoffeesContextData);

function CoffeesProvider({ children }: useCoffeesProps) {
  //localStorage.setItem("cartItems", JSON.stringify(cartItems));

  const [cartItems, dispatch] = useReducer((state: Coffee[], action: any) => {
    console.log(action);

    if (action === "ADD_NEW_PRODUCT") {
      return [...state, action.payload.addNewProduct];
    }

    return state;
  }, []);

  const addProductsInCart = (product: Coffee, productQuantity: number) => {
    const addNewProduct = {
      ...product,
      quantity: productQuantity,
    };

    dispatch({
      type: "ADD_NEW_PRODUCT",
      payload: {
        addNewProduct,
      },
    });

    console.log(addNewProduct.quantity);
  };

  const increaseProductQuantity = (
    product: Coffee,
    productQuantity: number
  ) => {
    const increaseOneItem = {
      ...product,
      quantity: productQuantity + 1,
    };

    dispatch({
      type: "INCREASE_PRODUCT_QUANTITY",
      payload: {
        increaseOneItem,
      },
    });

    //console.log({ increaseOneItem });
  };

  const decreaseProductQuantity = (
    product: Coffee,
    productQuantity: number
  ) => {
    console.log({ product });
    console.log({ productQuantity });

    const decreaseOneItem = {
      ...product,
      quantity: productQuantity - 1,
    };

    dispatch({
      type: "DECREASE_PRODUCT_QUANTITY",
      payload: {
        decreaseOneItem,
      },
    });

    console.log(decreaseOneItem.quantity);
  };

  return (
    <CoffeesContext.Provider
      value={{
        cartItems,
        addProductsInCart,
        increaseProductQuantity,
        decreaseProductQuantity,
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
