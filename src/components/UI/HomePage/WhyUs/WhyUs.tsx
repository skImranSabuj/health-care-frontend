import assets from "@/src/assets";
import { Box, Container, Grid, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import Image from "next/image";

const WhyUs = () => {
  return (
    <Container sx={{ pt: 2, pb: 5 }}>
      <Box textAlign="center">
        <Typography
          variant="h4"
          fontWeight={600}
          color="primary.main"
          fontSize="18px"
        >
          Why Us
        </Typography>
        <Typography variant="h4" fontWeight={600} fontSize="32px">
          Why Choose Us
        </Typography>
      </Box>
      <Grid container sx={{ display: "flex", mt: 5 }}>
        <Grid flex={1}>
          {[
            {
              title: "24/7 Doctor Access",
              details:
                "Access any GP or specialist doctor you need at anytime from anywhere.",
              icon: assets.images.budge,
            },
            {
              title: "Online Prescriptions & Delivery",
              details:
                "Access to online prescriptions, medicine delivery, and diagnostic tests.",
              icon: assets.images.budge,
            },
            {
              title: "Affordable Health Packages",
              details:
                "Easy subscription packages to protect you and your loved one’s health and wellbeing.",
              icon: assets.images.budge,
            },
            {
              title: "Trusted Care Anywhere",
              details:
                "Seamless healthcare support with digital convenience and professional expertise.",
              icon: assets.images.budge,
            },
          ].map((item, index) => (
            <Box
              key={item.title}
              sx={{
                backgroundColor: grey[100],
                borderRadius: "15px",
                borderTopRightRadius: index % 2 != 0 ? "100px" : "15px",
                borderBottomRightRadius: index % 2 == 0 ? "100px" : "15px",
                mb: 3,
                p: 2,
                display: "flex",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "white",
                  borderRadius: "5px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100px",
                  height: "100px",
                  flex: 1,
                }}
              >
                <Image src={item.icon} alt="icon" height={50} width={50} />
              </Box>
              <Box ml={2} pr={5} flex={6} my="auto">
                <Typography variant="h5" fontWeight={600} fontSize="22px">
                  {item.title}
                </Typography>
                <Typography fontWeight={400} color={grey[500]}>
                  {item.details}
                </Typography>
              </Box>
            </Box>
          ))}
        </Grid>
        <Grid
          flex={1}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            src={assets.images.chooseUs}
            alt="choose us"
            height={400}
            width={400}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default WhyUs;
