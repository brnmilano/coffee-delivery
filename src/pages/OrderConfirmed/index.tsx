import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { useCoffees } from "../../hooks/useCoffe";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Container from "../../components/Container/Container";
import styles from "./styles.module.scss";
import DeliveryImage from "../../../public/delivery.png";
import { AddressAndPaymentMethodKey } from "../../types/keys";
import { AddressAndPaymentMethodProps } from "../../types/address";

export default function OrderConfirmed() {
  const { cartItems } = useCoffees();

  const navigate = useNavigate();

  const [formData, setFormData] = useState<AddressAndPaymentMethodProps>(
    {} as AddressAndPaymentMethodProps
  );

  const onLoadScreen = () => {
    if (cartItems.length === 0) {
      toast.warning("Você não possui nenhum item no carrinho.");

      navigate("/");
    }

    const getAdrressAndPayment = localStorage.getItem(
      AddressAndPaymentMethodKey
    );

    if (getAdrressAndPayment !== null) {
      setFormData(JSON.parse(getAdrressAndPayment));
    }
  };

  useEffect(() => {
    onLoadScreen();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
                  Entrega em{" "}
                  <span>
                    {formData.street} {formData.number}
                  </span>
                </p>
              </div>
            </div>

            <div className={styles.deliveryTime}>
              <div className={styles.deliveryIcon}>
                <Timer size={22} weight="fill" />
              </div>

              <div>
                <p>Previsão de entrega</p>

                <span>20 min - 30 min</span>
              </div>
            </div>

            <div className={styles.price}>
              <div className={styles.priceIcon}>
                <CurrencyDollar size={22} weight="fill" />
              </div>

              <div>
                <p>Pagamento na entrega</p>

                <span>{formData.selectedPayment}</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.imageWrapper}>
          <img src={DeliveryImage} />
        </div>
      </div>
    </Container>
  );
}
