import {
  useForm,
  FormProvider,
  SubmitHandler,
  FieldValues,
} from "react-hook-form";

type FormConfigType = {
  resolver?: any;
  defaultValues?: Record<string, any>;
};

type HCFormProps = {
  children: React.ReactNode;
  onSubmit: (data: FieldValues) => void;
} & FormConfigType;

export default function HCForm({
  children,
  onSubmit,
  resolver,
  defaultValues,
}: HCFormProps) {
  const formConfig: FormConfigType = resolver ? { resolver } : {};
  if (defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }
  const methods = useForm(formConfig);
  const { handleSubmit, reset } = methods;

  const submit: SubmitHandler<FieldValues> = (data) => {
    onSubmit(data);
    reset();
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(submit)}>{children}</form>
    </FormProvider>
  );
}
