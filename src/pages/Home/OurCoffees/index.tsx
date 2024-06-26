import { coffeData } from "../../../utils/coffes";
import styles from "./styles.module.scss";
import CoffeQuantity from "./CoffeQuantity";

export default function OurCoffees() {
  return (
    <div className={styles.container}>
      <h2>Nossos cafés</h2>

      <div className={styles.coffeWrapper}>
        {coffeData.map((coffee) => (
          <div className={styles.coffes} key={coffee.id}>
            <div>
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

                  <h3>
                    {coffee.price.toLocaleString("pt-br", {
                      minimumFractionDigits: 2,
                    })}
                  </h3>
                </span>

                <div>
                  <CoffeQuantity coffe={coffee} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
