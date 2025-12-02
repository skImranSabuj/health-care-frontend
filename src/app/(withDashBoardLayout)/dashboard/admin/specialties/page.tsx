"use client";
import { Box, Button, Stack, TextField } from "@mui/material";
import SpecialityModal from "./components/SpecialityModal/SpecialityModal";
import { useState } from "react";

const SpecialitiesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <Box p={2}>
      <SpecialityModal open={isModalOpen} setOpen={setIsModalOpen} />
      <Stack sx={{ justifyContent: "space-between" }} direction="row">
        <Button onClick={() => setIsModalOpen(true)}>Create Speciality</Button>
        <TextField label="Search Specialities" variant="outlined" />
      </Stack>
    </Box>
  );
};

export default SpecialitiesPage;
