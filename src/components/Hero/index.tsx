import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import styles from "./styles.module.scss";
import CoffeDellivery from "../../../public/coffe-dellivery.png";

export default function Hero() {
  const infoItems = [
    {
      icon: <ShoppingCart size={18} weight="fill" color="#fff" />,
      text: "Compra simples e segura",
    },
    {
      icon: <Package size={18} weight="fill" color="#fff" />,
      text: "Embalagem mantém o café intacto",
    },
    {
      icon: <Timer size={18} weight="fill" color="#fff" />,
      text: "Entrega rápida e rastreada",
    },
    {
      icon: <Coffee size={18} weight="fill" color="#fff" />,
      text: "Compra simples e segura",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.titleAndSubtitle}>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>

          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </div>

        <div className={styles.infoWrapper}>
          {infoItems.map((item, index) => {
            return (
              <div key={index} className={styles.item}>
                <span>{item.icon}</span>

                <p>{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <img src={CoffeDellivery} alt="Coffe Dellivery" />
      </div>
    </div>
  );
}
