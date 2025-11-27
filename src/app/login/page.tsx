"use client";
import assets from "@/src/assets";
import { loginUser } from "@/src/services/actions/loginUser";
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
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

type LoginDataType = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginDataType>();
  const onSubmit: SubmitHandler<LoginDataType> = async (data) => {
    try {
      const response = await loginUser(data);
      console.log(response);
      if (response?.data?.accessToken) {
        toast.success(response?.message);
        router.push("/");
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
              width={100}
              height={100}
            />
            <Typography variant="h5" mt={1}>
              Login
            </Typography>
          </Stack>
          <Box p={4}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={2}>
                <Grid size={12}>
                  <TextField
                    label="Email"
                    size="small"
                    fullWidth
                    {...register("email")}
                  />
                </Grid>
                <Grid size={12}>
                  <TextField
                    label="Password"
                    type="passEmail"
                    size="small"
                    fullWidth
                    {...register("password")}
                  />
                </Grid>
              </Grid>
              <Button fullWidth sx={{ my: 3 }} type="submit">
                Login
              </Button>
              <Typography>
                Do not have an account? <Link href="register">Register</Link>
              </Typography>
            </form>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default LoginPage;
