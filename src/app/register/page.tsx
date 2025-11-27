"use client";
import assets from "@/src/assets";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";

interface IPatient {
  name: string;
  email: string;
  contactNumber: string;
  address: string;
}

interface IRegisterObject {
  password: string;
  patient: IPatient;
}

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IRegisterObject>();
  const onSubmit: SubmitHandler<IRegisterObject> = (data) => console.log(data);

  console.log(watch("patient.name")); // watch input value by passing the name of it
  return (
    <Container>
      <Stack
        sx={{
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          boxShadow={1}
          sx={{
            width: 600,
            mx: "auto",
            textAlign: "center",
            justifyContent: "center",
            borderRadius: "10px",
          }}
        >
          <Stack justifyContent="center" alignItems="center" py={2}>
            <Image
              src={assets.svgs.logo}
              alt="rehister icon"
              width={50}
              height={50}
            />
            <Typography variant="h5" mt={1}>
              Patient Register
            </Typography>
          </Stack>
          <Box p={4}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={2}>
                <Grid size={12}>
                  <TextField
                    label="Name"
                    defaultValue="Name"
                    size="small"
                    fullWidth
                    {...register("patient.name")}
                  />
                </Grid>
                <Grid size={6}>
                  <TextField
                    label="Email"
                    type="email"
                    defaultValue="Email"
                    size="small"
                    fullWidth
                    {...register("patient.email")}
                  />
                </Grid>
                <Grid size={6}>
                  <TextField
                    label="Password"
                    type="password"
                    defaultValue="Password"
                    size="small"
                    fullWidth
                    {...register("password")}
                  />
                </Grid>
                <Grid size={6}>
                  <TextField
                    label="Contact Number"
                    type="text"
                    size="small"
                    fullWidth
                    {...register("patient.contactNumber")}
                  />
                </Grid>
                <Grid size={6}>
                  <TextField
                    label="Address"
                    type="text"
                    size="small"
                    fullWidth
                    {...register("patient.address")}
                  />
                </Grid>
              </Grid>
              <Button fullWidth sx={{ my: 3 }} type="submit">
                REGISTER
              </Button>
              <Typography>
                Do you have an account? <Link href="login">Login</Link>
              </Typography>
            </form>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default RegisterPage;
