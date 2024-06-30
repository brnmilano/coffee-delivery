import { MapPin } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import { cartRoute } from "../../utils/paths";
import { useCoffees } from "../../hooks/useCoffe";
import Container from "../Container/Container";
import styles from "./styles.module.scss";
import Logo from "../../../public/logo.svg";
import Card from "../Card";

export default function Header() {
  const { cartItems } = useCoffees();

  const navigate = useNavigate();

  return (
    <Container>
      <div className={styles.container}>
        <a style={{ height: "40px" }} href="/">
          <img src={Logo} alt="Logo" />
        </a>

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
