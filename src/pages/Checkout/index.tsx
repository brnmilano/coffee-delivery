/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  FormSchemaProps,
  FormValidationSchema,
} from "../../models/formValidationSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormType } from "../../types/form";
import {
  AddressAndPaymentMethodProps,
  AddressProps,
} from "../../types/address";
import { toast } from "react-toastify";
import { useCoffees } from "../../hooks/useCoffe";
import CompleteYourOrder from "./CompleteYourOrder";
import SelectedCoffes from "./SelectedCoffes";
import styles from "./styles.module.scss";
import Container from "../../components/Container/Container";
import { useNavigate } from "react-router-dom";
import { AddressAndPaymentMethodKey } from "../../types/keys";

interface FormProps {
  props?: FormType;
}

export default function Checkout({ props }: FormProps) {
  const { cep, street, number, complement, district, city, uf } = props || {};

  const { selectedPayment, setSelectedPayment } = useCoffees();

  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchemaProps>({
    resolver: zodResolver(FormValidationSchema),
    shouldFocusError: false,
    defaultValues: {
      cep: cep,
      street: street,
      number: number,
      complement: complement,
      district: district,
      city: city,
      uf: uf,
    },
  });

  const onSubmit = (data: AddressProps) => {
    if (!selectedPayment) {
      toast.warning("Selecione a forma de pagamento.");
      return;
    }

    const formattedData = {
      ...data,
      selectedPayment,
    } as AddressAndPaymentMethodProps;

    const addressAndPayment = JSON.stringify(formattedData);

    localStorage.setItem(AddressAndPaymentMethodKey, addressAndPayment);

    navigate("/pedido-confirmado");
  };

  const handleOptionClick = (option: string) => {
    setSelectedPayment(option);
  };

  return (
    <div>
      <Container>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.container}>
          <CompleteYourOrder
            control={control}
            errors={errors}
            handleOptionClick={handleOptionClick}
            selectedOption={selectedPayment}
          />

          <SelectedCoffes />
        </form>
      </Container>
    </div>
  );
}
