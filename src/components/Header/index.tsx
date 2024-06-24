import { MapPin } from "phosphor-react";
import Container from "../Container/Container";
import styles from "./styles.module.scss";
import Logo from "../../../public/logo.svg";
import Card from "../Card";
import { useCoffes } from "../../hooks/useCoffe";

export default function Header() {
  const { cartItems } = useCoffes();

  return (
    <Container>
      <div className={styles.container}>
        <img src={Logo} alt="Logo" />

        <div className={styles.locationAndCart}>
          <div className={styles.location}>
            <MapPin size={22} weight="fill" />

            <p>Porto Alegre, RS</p>
          </div>

          <div className={styles.cartWrapper}>
            <Card
              onClick={() => {
                console.log(cartItems);
              }}
              AddToCardOrCart={false}
              theme="card"
            />

            {cartItems.length > 0 && (
              <div className={styles.cartItems}>{cartItems.length}</div>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
}
