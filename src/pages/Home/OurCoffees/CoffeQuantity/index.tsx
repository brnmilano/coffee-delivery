import { useCoffees } from "../../../../hooks/useCoffe";
import { useState } from "react";
import { Minus, Plus, Trash } from "phosphor-react";
import styles from "./styles.module.scss";
import Card from "../../../../components/Card";
import { CoffeeProps } from "../../../../types/coffee";
import { toast } from "react-toastify";

export interface CoffeeQuantityProps {
  coffee: CoffeeProps;
}

export default function CoffeeQuantity({ coffee }: CoffeeQuantityProps) {
  const {
    addProductsInCart,
    removeAllProducts,
    increaseProductQuantity,
    decreaseProductQuantity,
  } = useCoffees();

  const [coffeeQuantity, setCoffeeQuantity] = useState<number>(1);

  // Incrementa a quantidade de um produto específico no carrinho de compras.
  const handleIncreaseCoffe = () => {
    setCoffeeQuantity(coffeeQuantity + 1);

    increaseProductQuantity(coffee, coffeeQuantity);
  };

  // Decrementa a quantidade de um produto específico no carrinho de compras.
  const handleDecreaseCoffe = () => {
    if (coffeeQuantity === 1) {
      return;
    }

    setCoffeeQuantity(coffeeQuantity - 1);

    decreaseProductQuantity(coffee, coffeeQuantity);
  };

  // Adiciona um produto específico ao carrinho de compras.
  const handleAddCoffeToCart = () => {
    addProductsInCart(coffee, coffeeQuantity);

    toast.success("Produto adicionado ao carrinho.");
  };

  // Remove um produto específico do carrinho de compras.
  const handleRemoveCoffeFromCart = () => {
    removeAllProducts(coffee);

    toast.success("Produto removido do carrinho.");
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
