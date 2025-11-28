"use client";
import assets from "@/src/assets";
import { loginUser } from "@/src/services/actions/loginUser";
import { registerPatient } from "@/src/services/actions/registerPatient";
import { storeUserData } from "@/src/services/auth.services";
import { makeFormData } from "@/src/utils/makeFormData";
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
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

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
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterObject>();
  const onSubmit: SubmitHandler<IRegisterObject> = async (data) => {
    try {
      console.log(data);
      const formData = makeFormData(data);
      const registerResponse = await registerPatient(formData);
      if (registerResponse?.data?.id) {
        toast.success(registerResponse?.message);
        const response = await loginUser({
          email: data.patient.email,
          password: data.password,
        });
        console.log(response);
        if (response?.data?.accessToken) {
          storeUserData(response?.data?.accessToken);
          router.push("/");
        }
      }
    } catch (err: any) {
      console.log(err?.message);
    }
  };

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
                    size="small"
                    fullWidth
                    {...register("patient.name")}
                  />
                </Grid>
                <Grid size={6}>
                  <TextField
                    label="Email"
                    type="email"
                    size="small"
                    fullWidth
                    {...register("patient.email")}
                  />
                </Grid>
                <Grid size={6}>
                  <TextField
                    label="Password"
                    type="password"
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
