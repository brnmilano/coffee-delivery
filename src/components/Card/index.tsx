import { ButtonHTMLAttributes } from "react";
import styles from "./styles.module.scss";
import clsx from "clsx";
import { ShoppingCart, ShoppingCartSimple } from "phosphor-react";

interface ButtonInterface extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Propriedade booleana que indica o estado de carregamento do botão, substituindo o texto por um spinner  */
  isloading?: boolean;
  /**
   * Desativa o botão e insira um tema cinza.
   * */
  disabled?: boolean;
  /**
   * Evento de clique do mouse.
   * Obs: só é acionado quando o botão não está com o loading ativo.
   */
  onClick?: () => void;
  /**
   * Define o tema do botão.
   * @default "primary"
   */
  theme?: "card" | "addToCart";
  /**
   * A propriedade `AddToCardOrCart` é um booleano que determina qual ícone será renderizado.
   * Se for verdadeiro, o ícone `AddToCardIcon` será renderizado.
   * Se for falso, o ícone `CardIcon` será renderizado.
   */
  AddToCardOrCart: boolean;
}

export default function Card(props: ButtonInterface) {
  const {
    theme = "card",
    isloading,
    disabled,
    onClick,
    AddToCardOrCart,
    ...rest
  } = props;

  function handleClickOnButton() {
    if (isloading) {
      return;
    }

    onClick && onClick();
  }

  return (
    <button
      className={clsx(styles.cardContainer, {
        [styles.card]: theme === "card",
        [styles.addToCard]: theme === "addToCart",
      })}
      disabled={disabled}
      onClick={handleClickOnButton}
      {...rest}
    >
      {AddToCardOrCart ? (
        <ShoppingCartSimple color="#F3F2F2" size={20} />
      ) : (
        <ShoppingCart color="#C47F17" size={20} />
      )}
    </button>
  );
}
