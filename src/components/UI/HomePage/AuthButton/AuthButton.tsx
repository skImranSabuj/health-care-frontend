"use client";
import { clearUserData, getUserData } from "@/src/services/auth.services";
import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

const AuthButton = () => {
  const user = getUserData();
  const router = useRouter();

  const handleLogout = () => {
    clearUserData();
    router.refresh();
  };
  return (
    <>
      {!user ? (
        <Button component={Link} href="/login">
          Login
        </Button>
      ) : (
        <Button color="error" onClick={handleLogout} variant="outlined">
          Logout
        </Button>
      )}
    </>
  );
};

export default AuthButton;
