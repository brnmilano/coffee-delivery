import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { useCoffees } from "../../hooks/useCoffe";
import Container from "../../components/Container/Container";
import styles from "./styles.module.scss";
import DeliveryImage from "../../../public/delivery.png";

export default function OrderConfirmed() {
  const { selectedPayment } = useCoffees();

  return (
    <Container>
      <div className={styles.container}>
        <div className={styles.leftWrapper}>
          <div className={styles.titleAndSubtitle}>
            <h2>Uhu! Pedido confirmado</h2>

            <p>Agora é só aguardar que logo o café chegará até você</p>
          </div>

          <div className={styles.deliveryInfos}>
            <div className={styles.location}>
              <div className={styles.locationIcon}>
                <MapPin size={22} weight="fill" />
              </div>

              <div>
                <p>
                  Entrega em <span>Rua João Daniel Martinelli, 102</span>
                </p>

                <p>Farrapos - Porto Alegre, RS</p>
              </div>
            </div>

            <div className={styles.deliveryTime}>
              <div className={styles.deliveryIcon}>
                <Timer size={22} weight="fill" />
              </div>

              <div>
                <p>Previsão de entrega</p>

                <span>20 min - 30 min </span>
              </div>
            </div>

            <div className={styles.price}>
              <div className={styles.priceIcon}>
                <CurrencyDollar size={22} weight="fill" />
              </div>

              <div>
                <p>Pagamento na entrega</p>

                <span>{selectedPayment}</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <img src={DeliveryImage} />
        </div>
      </div>
    </Container>
  );
}
