import { useState } from "react";
import { Minus, Plus } from "phosphor-react";
import { useCoffes } from "../../../../hooks/useCoffe";
import styles from "./styles.module.scss";
import Card from "../../../../components/Card";

interface CoffeProps {
  coffe: {
    id: number;
    image: string;
    alt: string;
    type: string[];
    title: string;
    description: string;
    price: string;
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

    // Função para remover um item do carrinho
    // const handleRemoveCoffeFromCart = () => {
    //   addToCart({ ...props.coffe, quantity: 1 }, 'remove');
    // };
  };

  const handleIncreaseCoffe = () => {
    if (coffeQuantity === 10) {
      return;
    }

    setCoffeQuantity(coffeQuantity + 1);
  };

  const handleAddCoffeToCart = () => {
    if (coffeQuantity > 0) {
      addToCart({ ...props.coffe, quantity: coffeQuantity });

      setCoffeQuantity(0);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.counterWrapper}>
        <button className={styles.decreaseCoffe} onClick={handleDecreaseCoffe}>
          <Minus size={18} weight="bold" />
        </button>

        <div className={styles.quantity}>{coffeQuantity}</div>

        <button className={styles.increaseCoffe} onClick={handleIncreaseCoffe}>
          <Plus size={18} weight="bold" />
        </button>
      </div>

      <Card onClick={handleAddCoffeToCart} AddToCardOrCart theme="addToCart" />
    </div>
  );
}
