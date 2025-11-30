import { SxProps, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type HCInputProps = {
  name: string;
  label: string;
  placeholder?: string;
  size?: "small" | "medium";
  fullWidth?: boolean;
  type?: string;
  required?: boolean;
  sx?: SxProps;
  errorMessage?: string;
};

const HCInput = ({
  name,
  label,
  size = "small",
  type = "text",
  placeholder = label,
  required = false,
  fullWidth,
  errorMessage,
  sx,
}: HCInputProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: true }}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          type={type}
          label={label}
          placeholder={placeholder}
          size={size}
          fullWidth={fullWidth}
          required={required}
          sx={{ ...sx }}
          error={!!error?.message || !!errorMessage}
          helperText={error?.message || errorMessage}
        />
      )}
    />
  );
};

export default HCInput;
