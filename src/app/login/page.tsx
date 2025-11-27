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

const LoginPage = () => {
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
            <form action="">
              <Grid container spacing={2}>
                <Grid size={12}>
                  <TextField label="Email" size="small" fullWidth />
                </Grid>
                <Grid size={12}>
                  <TextField
                    label="Password"
                    type="passEmail"
                    size="small"
                    fullWidth
                  />
                </Grid>
              </Grid>
              <Button fullWidth sx={{ my: 3 }}>
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
