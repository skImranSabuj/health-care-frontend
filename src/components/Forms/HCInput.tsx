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
};

const HCInput = ({
  name,
  label,
  size = "small",
  type = "text",
  placeholder = label,
  required = false,
  fullWidth,
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
          error={!!error?.message}
          helperText={error?.message}
        />
      )}
    />
  );
};

export default HCInput;
