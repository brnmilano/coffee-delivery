import { useCoffees } from "../../../hooks/useCoffe";
import { Button } from "../../../components/Form/Button";
import CoffeQuantity from "../../Home/OurCoffees/CoffeQuantity";
import styles from "./styles.module.scss";
import CarrinhoVazio from "../../../../public/carrinho-vazio.png";

export default function SelectedCoffes() {
  const { cartItems } = useCoffees();

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h3>Complete seu pedido</h3>
      </div>

      <div className={styles.coffesContainer}>
        <div>
          <div className={styles.coffesWrapper}>
            {cartItems.length > 0 ? (
              <>
                {cartItems.map((coffees, index) => {
                  return (
                    <div
                      className={styles.coffesContent}
                      key={`${coffees.id} ${index}`}
                    >
                      <div className={styles.coffeItem}>
                        <div>
                          <img src={coffees.image} />
                        </div>

                        <div className={styles.titleAndRemoveCoffe}>
                          <p>{coffees.name}</p>

                          <div>
                            <CoffeQuantity
                              id={coffees.id}
                              image={coffees.image}
                              type={coffees.type}
                              name={coffees.name}
                              description={coffees.description}
                              price={coffees.price}
                              quantity={coffees.quantity}
                            />
                          </div>
                        </div>

                        <div className={styles.coffePrice}>
                          <p>
                            {coffees.price.toLocaleString("pt-br", {
                              style: "currency",
                              currency: "BRL",
                            })}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </>
            ) : (
              <div className={styles.emptyCartImg}>
                <img src={CarrinhoVazio} alt="Seu carrinho está vazio" />
              </div>
            )}
          </div>

          {/* <div className={styles.valuesWrapper}>
            <div className={styles.totalItensWrapper}>
              <p>Total de itens</p>

              <p>
                {totalPriceItems.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
            </div>

            <div className={styles.deliveryPriceWrapper}>
              <p>Entrega</p>

              <p>R$ 3,50</p>
            </div>

            <div className={styles.totalPriceWrapper}>
              <p>Total</p>

              {totalPriceWithDelivery.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </div>
          </div> */}
        </div>

        <Button
          type="submit"
          placeholder="Confirmar pedido"
          disabled={cartItems.length === 0}
        />
      </div>
    </div>
  );
}
