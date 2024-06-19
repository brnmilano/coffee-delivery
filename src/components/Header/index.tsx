import { MapPin } from "phosphor-react";
import Container from "../Container/Container";
import styles from "./styles.module.scss";
import Logo from "../../../public/logo.svg";
import Card from "../Card";

export default function Header() {
  return (
    <Container>
      <div className={styles.container}>
        <img src={Logo} alt="Logo" />

        <div className={styles.locationAndCart}>
          <div className={styles.location}>
            <MapPin size={22} weight="fill" />

            <p>Porto Alegre, RS</p>
          </div>

          <Card AddToCardOrCart={false} theme="card" />
        </div>
      </div>
    </Container>
  );
}
