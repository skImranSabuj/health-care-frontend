import assets from "@/src/assets";
import { Box, Container, Grid, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import Image from "next/image";

const HowItWorks = () => {
  return (
    <Container sx={{ py: 5 }}>
      <Box>
        <Typography color="primary.main" fontSize="18px">
          How it works
        </Typography>
        <Typography variant="h4" fontWeight={600} fontSize="32px" my={1.5}>
          4 Easy Steps to Get Your Solution
        </Typography>
        <Typography>
          Access to expert physicians and surgeons, advanced technologies and
          top-quality surgery facilities right here.
        </Typography>
      </Box>
      <Grid container mt={5}>
        <Grid
          flex={1}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            src={assets.images.howItWorks}
            alt="doctor image"
            width={500}
            height={500}
          />
        </Grid>
        <Grid
          flex={1}
          container
          columns={{ xs: 4, sm: 8, md: 12 }}
          spacing={{ md: 2 }}
        >
          {[
            {
              title: "Search Doctor",
              details:
                "Dolor sit amet consectetur. Scelerisque in eu mauris volutpat Ornare.",
              icon: assets.icons.serachIcon,
            },
            {
              title: "Schedule Appointment",
              details:
                "Dolor sit amet consectetur. Scelerisque in eu mauris volutpat Ornare.",
              icon: assets.icons.scheduleIcon,
            },
            {
              title: "Check Doctor Profile",
              details:
                "Dolor sit amet consectetur. Scelerisque in eu mauris volutpat Ornare.",
              icon: assets.icons.doctorIcon,
            },
            {
              title: "Get Your Solution",
              details:
                "Dolor sit amet consectetur. Scelerisque in eu mauris volutpat Ornare.",
              icon: assets.icons.charity,
            },
          ].map((item) => (
            <Box
              component={Grid}
              key={item.title}
              border={1}
              borderColor={grey[400]}
              sx={{
                borderRadius: "15px",
                p: 2,
                flex: 0.5,
              }}
              size={{ xs: 2, sm: 4, md: 6 }}
            >
              <Image src={item.icon} alt="icon" height={50} width={50} />
              <Typography variant="h5" fontWeight={600} fontSize="22px" my={2}>
                {item.title}
              </Typography>
              <Typography fontWeight={400} color={grey[500]}>
                {item.details}
              </Typography>
            </Box>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default HowItWorks;
