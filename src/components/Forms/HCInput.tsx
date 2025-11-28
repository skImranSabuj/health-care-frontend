import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type HCInputProps = {
  name: string;
  label: string;
  size?: "small" | "medium";
  fullWidth?: boolean;
  type?: string;
};

const HCInput = ({
  name,
  label,
  size = "small",
  fullWidth,
  type = "text",
}: HCInputProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: true }}
      render={({ field }) => (
        <TextField
          type={type}
          label={label}
          size={size}
          fullWidth={fullWidth}
          {...field}
        />
      )}
    />
  );
};

export default HCInput;
