/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input } from "../../../components/Form/Input/Input";
import { Bank, CreditCard, MapPinLine, Money } from "phosphor-react";
import styles from "./styles.module.scss";
import { Control, FieldErrors } from "react-hook-form";

interface CompleteYourOrderProps {
  /**
   * Recebe um objeto <Control> da biblioteca React Hook Form para definir o contexto deste formulário.
   */
  control: Control<any>;
  /**
   * Matriz de erros gerada pela biblioteca React Hook Form. É usado para renderizar o erro de entrada, se houver algum.
   */
  errors: FieldErrors<any>;
  /**
   * Estado que armazena a opção selecionada pelo usuário.
   */
  selectedOption: string;
  /**
   *  Função que define a opção selecionada pelo usuário.
   * @param option - Opção selecionada pelo usuário.
   * @returns void
   */
  handleOptionClick: (option: string) => void;
}

export default function CompleteYourOrder(props: CompleteYourOrderProps) {
  const { control, errors, handleOptionClick, selectedOption } = props;

  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.deliveryAddress}>
          <MapPinLine size={26} />

          <div className={styles.adressText}>
            <h3>Endereço de Entrega</h3>

            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
        </div>

        <div className={styles.formWrapper}>
          <div className={styles.item1}>
            <Input
              label="CEP"
              control={control}
              errors={errors}
              registerField="cep"
              mask="99.999-999"
            />
          </div>

          <div className={styles.item2}>
            <Input
              label="Rua"
              control={control}
              errors={errors}
              registerField="street"
            />
          </div>

          <div className={styles.item3}>
            <Input
              label="Número"
              control={control}
              errors={errors}
              registerField="number"
            />
          </div>

          <div className={styles.item4}>
            <Input
              label="Complemento"
              control={control}
              errors={errors}
              registerField="complement"
            />
          </div>

          <div className={styles.item5}>
            <Input
              label="Bairro"
              control={control}
              errors={errors}
              registerField="district"
            />
          </div>

          <div className={styles.item6}>
            <Input
              label="Cidade"
              control={control}
              errors={errors}
              registerField="city"
            />
          </div>

          <div className={styles.item7}>
            <Input
              label="UF"
              control={control}
              errors={errors}
              registerField="uf"
            />
          </div>
        </div>
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.formOfPayment}>
          <MapPinLine size={26} />

          <div className={styles.adressText}>
            <h3>Pagamento</h3>

            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </div>
        </div>

        <div className={styles.options}>
          <button
            className={`${styles.option} ${
              selectedOption === "credito" ? styles.selected : ""
            }`}
            onClick={() => handleOptionClick("credito")}
          >
            <CreditCard size={20} weight="regular" />
            Cartão de Crédito
          </button>

          <button
            className={`${styles.option} ${
              selectedOption === "debito" ? styles.selected : ""
            }`}
            onClick={() => handleOptionClick("debito")}
          >
            <Bank size={20} weight="regular" />
            Cartão de Débito
          </button>

          <button
            className={`${styles.option} ${
              selectedOption === "dinheiro" ? styles.selected : ""
            }`}
            onClick={() => handleOptionClick("dinheiro")}
          >
            <Money size={20} weight="regular" />
            Dinheiro
          </button>
        </div>
      </div>
    </div>
  );
}
