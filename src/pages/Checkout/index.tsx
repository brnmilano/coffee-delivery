/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  FormSchemaProps,
  FormValidationSchema,
} from "../../models/formValidationSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormType } from "../../types/form";
import { AddressProps } from "../../types/address";
import { toast } from "react-toastify";
import { useCoffees } from "../../hooks/useCoffe";
import CompleteYourOrder from "./CompleteYourOrder";
import SelectedCoffes from "./SelectedCoffes";
import styles from "./styles.module.scss";
import Container from "../../components/Container/Container";

interface FormProps {
  props?: FormType;
}

export default function Checkout({ props }: FormProps) {
  const { cep, street, number, complement, district, city, uf } = props || {};

  const { selectedPayment, setSelectedPayment } = useCoffees();

  const {
    control,
    handleSubmit,
    //watch,
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

    console.log(data);

    const formattedData = {
      ...data,
      selectedPayment,
    };

    console.log(formattedData);
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
