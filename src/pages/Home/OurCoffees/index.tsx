import { coffeData } from "../../../utils/coffes";
import styles from "./styles.module.scss";
import CoffeeQuantity from "./CoffeQuantity";

export default function OurCoffees() {
  return (
    <div className={styles.container}>
      <h2>Nossos cafés</h2>

      <div className={styles.coffeWrapper}>
        {coffeData.map((coffee) => (
          <div className={styles.coffes} key={coffee.id}>
            <div>
              <div className={styles.imageWrapper}>
                <img src={coffee.image} />
              </div>

              <div className={styles.coffeType}>
                {coffee.type.map((type, index) => (
                  <p key={index}>{type}</p>
                ))}
              </div>

              <div className={styles.textWrapper}>
                <h3>{coffee.name}</h3>

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
                  <CoffeeQuantity 
                    id={coffee.id}
                    image={coffee.image}
                    type={coffee.type}
                    name={coffee.name}
                    description={coffee.description}
                    price={coffee.price}
                    quantity={coffee.quantity}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
