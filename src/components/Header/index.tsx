import { MapPin } from "phosphor-react";
import { useCoffes } from "../../hooks/useCoffe";
import { useNavigate } from "react-router-dom";
import { cartRoute } from "../../utils/paths";
import Container from "../Container/Container";
import styles from "./styles.module.scss";
import Logo from "../../../public/logo.svg";
import Card from "../Card";

export default function Header() {
  const { cartItems } = useCoffes();

  const navigate = useNavigate();

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
                navigate(cartRoute);
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
