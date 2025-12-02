import HCFileInput from "@/src/components/Forms/HCFileInput";
import HCForm from "@/src/components/Forms/HCForm";
import HCInput from "@/src/components/Forms/HCInput";
import HCModal from "@/src/components/shared/HCModal/HCModal";
import { Button, Grid } from "@mui/material";
import React from "react";
import { FieldValues } from "react-hook-form";

type TSpecialityModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const SpecialityModal = (props: TSpecialityModalProps) => {
  const { open, setOpen } = props;
  const hnadleSpecilitySubmit = (data: FieldValues) => {
    console.log("Speciality Data: ", data);
  };
  return (
    <HCModal open={open} setOpen={setOpen} title="Create Speciality">
      <HCForm onSubmit={hnadleSpecilitySubmit}>
        <Grid container spacing={2} pb={2} columns={{ md: 6 }}>
          <Grid>
            <HCInput name="title" label="Title" required />
          </Grid>
          <Grid>
            <HCFileInput name="file" label="Upload File" />
          </Grid>
        </Grid>
        <Button type="submit">Submit</Button>
      </HCForm>
    </HCModal>
  );
};

export default SpecialityModal;
