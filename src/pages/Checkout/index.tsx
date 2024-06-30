/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  FormSchemaProps,
  FormValidationSchema,
} from "../../models/formValidationSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormType } from "../../types/form";
import { useState } from "react";
import CompleteYourOrder from "./CompleteYourOrder";
import SelectedCoffes from "./SelectedCoffes";
import styles from "./styles.module.scss";
import Container from "../../components/Container/Container";
import { AddressProps } from "../../types/address";

interface FormProps {
  props?: FormType;
}

export default function Checkout({ props }: FormProps) {
  const { cep, street, number, complement, district, city, uf } = props || {};

  const [selectedOption, setSelectedOption] = useState<string>("");

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
    console.log(data);

    const formattedData = {
      ...data,
      selectedOption,
    };

    console.log(formattedData);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <Container>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.container}>
          <CompleteYourOrder
            control={control}
            errors={errors}
            handleOptionClick={handleOptionClick}
            selectedOption={selectedOption}
          />

          <SelectedCoffes />
        </form>
      </Container>
    </div>
  );
}
