import { Minus, Plus, Trash } from "phosphor-react";
import styles from "./styles.module.scss";
import Card from "../../../../components/Card";
import { useCoffees } from "../../../../hooks/useCoffe";
import { useState } from "react";

export interface CoffeeProps {
  id: number;
  image: string;
  type: string[];
  name: string;
  description: string;
  price: number;
  quantity: number;
}

export default function CoffeeQuantity(props: CoffeeProps) {
  const {
    addProductsInCart,
    increaseProductQuantity,
    decreaseProductQuantity,
  } = useCoffees();

  const [coffeeQuantity, setCoffeeQuantity] = useState<number>(1);

  const handleIncreaseCoffe = () => {
    if (coffeeQuantity === 10) {
      return;
    }

    setCoffeeQuantity(coffeeQuantity + 1);

    increaseProductQuantity(props, coffeeQuantity);

    addProductsInCart(props, coffeeQuantity);
  };

  const handleDecreaseCoffe = () => {
    if (coffeeQuantity === 1) {
      return;
    }

    setCoffeeQuantity(coffeeQuantity - 1);

    decreaseProductQuantity(props, coffeeQuantity);

    addProductsInCart(props, coffeeQuantity);
  };

  const handleAddCoffeToCart = () => {
    addProductsInCart(props, coffeeQuantity);
  };

  //Função para remover um item do carrinho
  const handleRemoveCoffeFromCart = () => {};

  return (
    <div className={styles.container}>
      <div className={styles.counterWrapper}>
        <button
          type="button"
          className={styles.decreaseCoffe}
          onClick={handleDecreaseCoffe}
        >
          <Minus size={18} weight="bold" />
        </button>

        <div className={styles.quantity}>{coffeeQuantity}</div>

        <button
          type="button"
          className={styles.increaseCoffe}
          onClick={handleIncreaseCoffe}
        >
          <Plus size={18} weight="bold" />
        </button>
      </div>

      {window.location.pathname !== "/carrinho" ? (
        <Card
          onClick={handleAddCoffeToCart}
          AddToCardOrCart
          theme="addToCart"
        />
      ) : (
        <div style={{ display: "flex", gap: 10 }}>
          <Card
            onClick={handleAddCoffeToCart}
            AddToCardOrCart
            theme="addToCart"
            type="button"
          />

          <button
            onClick={handleRemoveCoffeFromCart}
            type="button"
            className={styles.removeItem}
          >
            <Trash size={20} />
            Remover
          </button>
        </div>
      )}
    </div>
  );
}
