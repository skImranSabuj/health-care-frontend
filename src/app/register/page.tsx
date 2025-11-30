"use client";
import assets from "@/src/assets";
import HCForm from "@/src/components/Forms/HCForm";
import HCInput from "@/src/components/Forms/HCInput";
import { loginUser } from "@/src/services/actions/loginUser";
import { registerPatient } from "@/src/services/actions/registerPatient";
import { storeUserData } from "@/src/services/auth.services";
import { makeFormData } from "@/src/utils/makeFormData";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

export const validationSchema = z.object({
  patient: z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    contactNumber: z
      .string()
      .min(10, "Contact Number must be at least 10 characters"),
    address: z.string().min(5, "Address must be at least 5 characters"),
  }),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const RegisterPage = () => {
  const router = useRouter();
  const [authError, setAuthError] = useState<string>("Something went wrong");

  const onSubmit = async (data: FieldValues, cbfn?: () => void) => {
    setAuthError("");
    try {
      console.log(data);
      const formData = makeFormData(data);
      const registerResponse = await registerPatient(formData);
      if (registerResponse?.data?.id) {
        if (cbfn) cbfn();
        toast.success(registerResponse?.message);
        const loginResponse = await loginUser({
          email: data.patient.email,
          password: data.password,
        });
        if (loginResponse?.data?.accessToken) {
          storeUserData(loginResponse?.data?.accessToken);
          router.push("/");
        }
      } else {
        setAuthError(registerResponse?.message || "Registration failed");
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
            <HCForm
              onSubmit={onSubmit}
              resolver={zodResolver(validationSchema)}
              defaultValues={{
                password: "",
                patient: {
                  name: "",
                  email: "",
                  address: "",
                  contactNumber: "",
                },
              }}
            >
              <Grid container spacing={2}>
                <Grid size={12}>
                  <HCInput label="Name" fullWidth name="patient.name" />
                </Grid>
                <Grid size={6}>
                  <HCInput
                    label="Email"
                    type="email"
                    fullWidth
                    name="patient.email"
                  />
                </Grid>
                <Grid size={6}>
                  <HCInput
                    label="Password"
                    type="password"
                    fullWidth
                    name="password"
                  />
                </Grid>
                <Grid size={6}>
                  <HCInput
                    label="Contact Number"
                    type="tel"
                    fullWidth
                    name="patient.contactNumber"
                  />
                </Grid>
                <Grid size={6}>
                  <HCInput
                    label="Address"
                    type="text"
                    fullWidth
                    name="patient.address"
                  />
                </Grid>
              </Grid>
              {!!authError && (
                <Alert severity="error" sx={{ mt: 2 }}>
                  {authError}
                </Alert>
              )}
              <Button fullWidth sx={{ my: 3 }} type="submit">
                REGISTER
              </Button>
              <Typography>
                Do you have an account? <Link href="login">Login</Link>
              </Typography>
            </HCForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default RegisterPage;
