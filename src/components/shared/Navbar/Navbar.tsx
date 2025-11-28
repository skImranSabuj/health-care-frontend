"use client";
import { Box, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";
import dynamic from "next/dynamic";

const Navbar = () => {
  const AuthButton = dynamic(
    () => import("../../UI/HomePage/AuthButton/AuthButton"),
    { ssr: false }
  );

  return (
    <Container>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        py={2}
      >
        <Typography variant="h4" component={Link} href="/">
          P
          <Box component="span" color="primary.main">
            H
          </Box>{" "}
          Health Care
        </Typography>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          gap={4}
        >
          <Typography component={Link} href="/consultation">
            Consultation
          </Typography>
          <Typography component={Link} href="/consultation">
            Health Plans
          </Typography>
          <Typography component={Link} href="/consultation">
            Medicine
          </Typography>
          <Typography component={Link} href="/consultation">
            Diagnostics
          </Typography>
          <Typography component={Link} href="/consultation">
            NGOS
          </Typography>
        </Stack>
        <AuthButton />
      </Stack>
    </Container>
  );
};

export default Navbar;
