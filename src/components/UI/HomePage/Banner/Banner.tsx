import assets from "@/src/assets";
import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";

const Banner = () => {
  return (
    <Container
      sx={{
        display: "flex",
        position: "relative",
        my: 16,
      }}
    >
      <Box sx={{ flex: 1 }}>
        <Box
          sx={{
            position: "absolute",
            left: "-90px",
            top: "-120px",
            width: "700px",
          }}
        >
          <Image src={assets.svgs.grid} alt="grid" />
        </Box>
        <Typography variant="h2" fontWeight={700}>
          Healthier Hearts
        </Typography>
        <Typography variant="h2" fontWeight={700}>
          Come From
        </Typography>
        <Typography variant="h2" fontWeight={700}>
          Preventive Care
        </Typography>
        <Typography variant="body1" my={3} width={600}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit eum
          iusto consequatur eius, doloribus nesciunt facere aliquid eveniet et.
          Rerum maiores saepe cupiditate repellat recusandae atque sed. Saepe,
          vitae id?
        </Typography>
        <Box>
          <Button sx={{ mr: 2 }}>Make Appointment</Button>
          <Button variant="outlined">Contact Us</Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flex: 1,
          justifyContent: "center",
          position: "relative",
          mt: 0,
          p: 1,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "-30px",
            left: "200px",
          }}
        >
          <Image src={assets.svgs.arrow} alt="arrow" width={100} height={100} />
        </Box>
        <Box
          sx={{
            display: "flex",
            marginTop: "20px",
          }}
        >
          <Image src={assets.images.doctor1} alt="doctor1" width={240} />
        </Box>
        <Box sx={{ marginTop: "", marginLeft: "20px" }}>
          <Image src={assets.images.doctor2} alt="doctor2" width={240} />
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "220px",
            left: "130px",
          }}
        >
          <Image src={assets.images.doctor3} alt="doctor3" width={240} />
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: "-50px",
            right: "-20px",
            zIndex: "-1",
          }}
        >
          <Image
            src={assets.images.stethoscope}
            alt="stethoscope"
            width={180}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Banner;
