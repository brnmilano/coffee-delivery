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
  price: number;
  quantity: number;
  totalPrice: number;
}

interface CoffesContextData {
  cartItems: Coffe[];
  setCartItems: Dispatch<SetStateAction<Coffe[]>>;
  totalPriceItems: number;
  setTotalPriceItems: Dispatch<SetStateAction<number>>;
  addToCart: (item: Coffe, action: string) => void;
}

export const CoffesContext = createContext({} as CoffesContextData);

function CoffesProvider({ children }: useCoffesProps) {
  const [totalPriceItems, setTotalPriceItems] = useState<number>(0);

  console.log("Valor total do carrinho:", totalPriceItems.toFixed(2));

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
  const addToCart = (newItem: Coffe, action: string) => {
    const existingItemIndex = cartItems.findIndex(
      (item) => item.id === newItem.id
    );

    if (existingItemIndex >= 0) {
      const updatedCartItems = [...cartItems];

      if (action === "add") {
        // Atualiza a quantidade de itens iguais adicionados ao carrinho
        updatedCartItems[existingItemIndex].quantity += newItem.quantity ?? 0;
      }

      // Atualiza o preço total com base na quantidade de itens iguais adicionados ao carrinho
      // Caso o item com id 1 seja adicionado 2x o cartItems.price será R$19,80
      updatedCartItems[existingItemIndex].price =
        updatedCartItems[existingItemIndex].quantity * newItem.price;

      setCartItems(updatedCartItems);
    } else if (action === "add") {
      // Define o preço total ao adicionar um novo item caso já exista um item com o mesmo id no carrinho
      // Caso já tenha dois itens com id 1 no carrinho e adicione mais 1 item com id 1 o cartItems.price será R$29,70
      newItem.price = newItem.price * (newItem.quantity ?? 1);

      setCartItems((prevItems) => [...prevItems, newItem]);
    }

    if (action === "remove") {
      const updatedCartItems = cartItems.filter(
        (item) => item.id !== newItem.id
      );

      setCartItems(updatedCartItems);
    }
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    const totalValue = cartItems.reduce((total, item) => {
      return total + item.price;
    }, 0);

    setTotalPriceItems(totalValue);
  }, [cartItems]);

  return (
    <CoffesContext.Provider
      value={{
        cartItems,
        setCartItems,
        totalPriceItems,
        setTotalPriceItems,
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
