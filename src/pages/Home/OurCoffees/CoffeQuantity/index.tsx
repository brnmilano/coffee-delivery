import { useState } from "react";
import { Minus, Plus, Trash } from "phosphor-react";
import { useCoffes } from "../../../../hooks/useCoffe";
import styles from "./styles.module.scss";
import Card from "../../../../components/Card";

export interface CoffeProps {
  coffe: {
    id: number;
    image: string;
    alt: string;
    type: string[];
    title: string;
    description: string;
    price: number;
    totalPrice: number;
  };
}

export default function CoffeQuantity(props: CoffeProps) {
  const { addToCart } = useCoffes();

  const [coffeQuantity, setCoffeQuantity] = useState(0);

  const handleDecreaseCoffe = () => {
    if (coffeQuantity === 1) {
      return;
    }

    setCoffeQuantity(coffeQuantity - 1);
  };

  const handleIncreaseCoffe = () => {
    if (coffeQuantity === 10) {
      return;
    }

    setCoffeQuantity(coffeQuantity + 1);
  };

  const handleAddCoffeToCart = () => {
    if (coffeQuantity > 0) {
      addToCart({ ...props.coffe, quantity: coffeQuantity }, "add");

      setCoffeQuantity(0);
    }
  };

  //Função para remover um item do carrinho
  const handleRemoveCoffeFromCart = () => {
    addToCart({ ...props.coffe, quantity: 1 }, "remove");
  };

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

        <div className={styles.quantity}>{coffeQuantity}</div>

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
