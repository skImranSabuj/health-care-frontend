import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import Image from "next/image";

const Specialities = async () => {
  const res = await fetch(`${process.env.API_URL}/specialties`);
  const { data: specialities } = await res.json();
  console.log({ specialities });
  return (
    <Container>
      <Box py={5}>
        <Box>
          <Typography variant="h4" fontWeight={600}>
            Explore Treatments across specialties
          </Typography>
          <Typography>
            Find experienced doctors across all specialties
          </Typography>
        </Box>
        <Grid
          container
          sx={{ flexDirection: "row", justifyContent: "space-between", my: 4 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          gap={2}
        >
          {specialities?.map((item: any) => (
            <Box
              component={Grid}
              key={item?.id}
              sx={{
                backgroundColor: grey[100],
                p: 2,
                width: "150px",
                height: "150px",
                textAlign: "center",
                borderRadius: "5px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",

                "& img": {
                  height: "50px",
                  width: "50px",
                },
              }}
            >
              <Image src={item.icon} alt="specialitiy" width={50} height={50} />
              <Typography variant="body1" fontWeight={600} mt={1}>
                {item?.title}
              </Typography>
            </Box>
          ))}
        </Grid>
        <Box textAlign="center">
          <Button variant="outlined">View All</Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Specialities;
