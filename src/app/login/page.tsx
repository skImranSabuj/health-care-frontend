"use client";
import assets from "@/src/assets";
import HCForm from "@/src/components/Forms/HCForm";
import HCInput from "@/src/components/Forms/HCInput";
import { loginUser } from "@/src/services/actions/loginUser";
import { storeUserData } from "@/src/services/auth.services";
import {
  Alert,
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

export const validationSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const LoginPage = () => {
  const router = useRouter();
  const [authError, setAuthError] = useState<string>("");

  const onSubmit = async (data, cbfn) => {
    setAuthError("");
    try {
      const response = await loginUser(data);
      if (response?.data?.accessToken) {
        toast.success(response?.message);
        storeUserData(response?.data?.accessToken);
        router.push("/");
        if (cbfn) cbfn();
      } else {
        setAuthError(response?.message || "Login failed");
      }
    } catch (err: any) {
      console.log(err?.message);
      toast.error(err?.message || "Something went wrong");
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
            <HCForm
              onSubmit={onSubmit}
              resolver={zodResolver(validationSchema)}
              defaultValues={{ email: "", password: "" }}
            >
              <Grid container spacing={2}>
                <Grid size={12}>
                  <HCInput
                    type="email"
                    name="email"
                    label="Email"
                    size="small"
                    fullWidth
                  />
                </Grid>
                <Grid size={12}>
                  <HCInput
                    name="password"
                    label="Password"
                    size="small"
                    fullWidth
                    type="password"
                  />
                </Grid>
              </Grid>
              {!!authError && (
                <Alert severity="error" sx={{ mt: 2 }}>
                  {authError}
                </Alert>
              )}
              <Button fullWidth sx={{ my: 3 }} type="submit">
                Login
              </Button>
              <Typography>
                Do not have an account? <Link href="register">Register</Link>
              </Typography>
            </HCForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default LoginPage;
