import styles from "./styles.module.scss";
import Expresso from "./assets/expresso.png";
import Card from "../Card";

const coffeeData = [
  {
    image: Expresso,
    alt: "Expresso",
    type: "Tradicional",
    title: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: "9,90",
  },
  // Adicione mais objetos para cada café que você quer renderizar
];

export default function OurCoffees() {
  return (
    <div className={styles.container}>
      <h2>Nossos cafés</h2>

      <div className={styles.coffes}>
        {coffeeData.map((coffee) => (
          <div key={coffee.title}>
            <div className={styles.imageWrapper}>
              <img src={coffee.image} alt={coffee.alt} />
            </div>

            <div className={styles.coffeType}>
              <p>{coffee.type}</p>
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
        ))}
      </div>
    </div>
  );
}
