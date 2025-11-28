import {
  useForm,
  FormProvider,
  SubmitHandler,
  FieldValues,
} from "react-hook-form";

type HCFormProps = {
  children: React.ReactNode;
  onSubmit: (data: FieldValues) => void;
};

export default function HCForm({ children, onSubmit }: HCFormProps) {
  const methods = useForm();
  const { handleSubmit, reset, control } = methods;

  const submit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);

    onSubmit(data);
    reset();
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(submit)}>{children}</form>
    </FormProvider>
  );
}
