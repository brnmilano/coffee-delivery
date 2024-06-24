/* eslint-disable react-refresh/only-export-components */
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface useCoffesProps {
  children: ReactNode;
}

export interface Coffe {
  id: number;
  image: string;
  alt: string;
  type: string[];
  title: string;
  description: string;
  price: string;
  quantity: number;
}

interface CoffesContextData {
  cartItems: Coffe[];
  setCartItems: Dispatch<SetStateAction<Coffe[]>>;
  addToCart: (item: Coffe) => void;
}

export const CoffesContext = createContext({} as CoffesContextData);

function CoffesProvider({ children }: useCoffesProps) {
  /**
   * Função para recuperar o valor inicial do carrinho de compras.
   *
   * Busca os itens do carrinho armazenados no localStorage.
   * Se existirem itens salvos, converte de uma string JSON para um array de objetos e os retorna para serem usados como estado inicial do carrinho.
   *
   * Caso não encontre nada no localStorage, retorna um array vazio, indicando que o carrinho está inicialmente vazio.
   * @returns Coffe[] || []
   */
  const getInitialCartValue = () => {
    const storedCart = localStorage.getItem("cartItems");

    if (storedCart) {
      return JSON.parse(storedCart);
    }

    return [];
  };

  const [cartItems, setCartItems] = useState<Coffe[]>(getInitialCartValue);

  /**
   * Adiciona os itens ao carrinho ou atualiza a quantidade de um item existente.
   *
   * @param newItem - O item a ser adicionado ao carrinho. Deve ser um objeto do tipo Coffe,
   *                  que contém todas as informações necessárias do produto.
   * @param action - Uma string que determina a ação a ser realizada. Pode ser "add" ou "remove".
   */
  const addToCart = (newItem: Coffe, action = "add") => {
    const existingItemIndex = cartItems.findIndex(
      (item) => item.id === newItem.id
    );

    if (existingItemIndex >= 0) {
      const updatedCartItems = [...cartItems];

      if (action === "add") {
        updatedCartItems[existingItemIndex].quantity = newItem.quantity;
      }

      setCartItems(updatedCartItems);
    } else if (action === "add") {
      setCartItems((prevItems) => [...prevItems, newItem]);
    }
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CoffesContext.Provider
      value={{
        cartItems,
        setCartItems,
        addToCart,
      }}
    >
      {children}
    </CoffesContext.Provider>
  );
}

function useCoffes() {
  return useContext(CoffesContext);
}

export { useCoffes, CoffesProvider };
