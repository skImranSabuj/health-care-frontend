"use client";
import assets from "@/src/assets";
import HCForm from "@/src/components/Forms/HCForm";
import HCInput from "@/src/components/Forms/HCInput";
import { loginUser } from "@/src/services/actions/loginUser";
import { registerPatient } from "@/src/services/actions/registerPatient";
import { storeUserData } from "@/src/services/auth.services";
import { makeFormData } from "@/src/utils/makeFormData";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const RegisterPage = () => {
  const router = useRouter();
  const onSubmit = async (data: FieldValues) => {
    try {
      console.log(data);
      const formData = makeFormData(data);
      const registerResponse = await registerPatient(formData);
      if (registerResponse?.data?.id) {
        toast.success(registerResponse?.message);
        const loginResponse = await loginUser({
          email: data.patient.email,
          password: data.password,
        });
        if (loginResponse?.data?.accessToken) {
          storeUserData(loginResponse?.data?.accessToken);
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
            <HCForm onSubmit={onSubmit}>
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
                    type="text"
                    size="small"
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
