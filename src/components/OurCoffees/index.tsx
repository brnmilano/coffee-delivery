import { coffeeData } from "../../utils/coffes";
import styles from "./styles.module.scss";
import Card from "../Card";

export default function OurCoffees() {
  return (
    <div className={styles.container}>
      <h2>Nossos cafés</h2>

      <div className={styles.coffeWrapper}>
        {coffeeData.map((coffee) => (
          <div className={styles.coffes} key={coffee.id}>
            <div key={coffee.title}>
              <div className={styles.imageWrapper}>
                <img src={coffee.image} alt={coffee.alt} />
              </div>

              <div className={styles.coffeType}>
                {coffee.type.map((type, index) => (
                  <p key={index}>{type}</p>
                ))}
              </div>

              <div className={styles.textWrapper}>
                <h3>{coffee.title}</h3>

                <p>{coffee.description}</p>
              </div>

              <div className={styles.buyCoffe}>
                <span style={{ display: "flex" }}>
                  <p>R$</p>

                  <h3>{coffee.price}</h3>
                </span>

                <div className={styles.buyCoffeButtons}>
                  <button>- 1 +</button>

                  <Card AddToCardOrCart theme="addToCart" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
