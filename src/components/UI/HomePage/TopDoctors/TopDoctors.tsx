import { Doctor } from "@/src/types/types";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { grey, yellow } from "@mui/material/colors";
import Image from "next/image";
import Link from "next/link";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";

const TopDoctors = async () => {
  const res = await fetch(`${process.env.API_URL}/doctor?page=1&limit=3`);
  const { data: doctors } = await res.json();
  console.log({ doctors });
  return (
    <Box
      bgcolor={grey[100]}
      py={30}
      my={15}
      sx={{
        clipPath: "polygon(0% 0%, 100% 20%, 100% 100%, 0% 80%)",
      }}
    >
      <Container>
        <Box textAlign="center">
          <Typography variant="h4" fontWeight={600}>
            Our Top Rated Doctors
          </Typography>
          <Typography>
            Access to expert physicians and surgeons, advanced technologies and
            top-quality surgery facilities right here.
          </Typography>
        </Box>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          my={5}
        >
          {doctors?.map((doctor: Doctor) => (
            <Grid key={doctor.id} flex={1} size={{ xs: 2, sm: 4, md: 4 }}>
              <Box
                sx={{
                  display: "flex",
                  border: "1px solid white",
                  borderRadius: "10px",
                  flexDirection: "row",
                  p: 2,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    border: "1px solid #1976d2",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
                    transform: "translateY(-4px)",
                    cursor: "pointer",
                  },
                }}
                bgcolor={"white"}
              >
                <Box>
                  <Box
                    sx={{
                      flex: 1,
                      borderRadius: "10px",
                      overflow: "hidden",
                      width: 120,
                      height: 160,
                      position: "relative",
                    }}
                  >
                    <Image
                      src={doctor.profilePhoto}
                      alt="doctor image"
                      width={120}
                      height={160}
                      style={{
                        objectFit: "cover",
                        objectPosition: "center",
                        width: "100%",
                        height: "100%",
                      }}
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: "0px",
                        backgroundColor: "rgba(255,255,255,0.5)",
                        textAlign: "center",
                        width: "100%",
                      }}
                    >
                      <Typography fontSize="10px">
                        <StarRoundedIcon sx={{ color: yellow[800] }} />{" "}
                        <strong>{doctor.averageRating}</strong> (
                        {doctor?.review?.length})
                      </Typography>
                    </Box>
                  </Box>
                  <Box textAlign="center" mt={1}>
                    <Typography fontWeight={600} fontSize="14px">
                      {doctor?.experience}+ Years
                    </Typography>
                    <Typography fontWeight={400} fontSize="12px">
                      Experience
                    </Typography>
                  </Box>
                </Box>

                <Stack
                  sx={{
                    display: "flex",
                    flex: 1,
                    justifyContent: "space-between",
                  }}
                >
                  <Box sx={{ flex: 2 }} pl={2} fontSize="12px">
                    <Typography variant="h6" fontWeight={600}>
                      {doctor?.name}
                    </Typography>
                    <Typography fontWeight={400}>
                      {doctor.qualification}
                    </Typography>
                    <Typography fontWeight={600}>
                      {doctor.designation?.split(",")?.[0]}
                    </Typography>
                    <Typography
                      sx={{
                        border: "1px solid lightgrey",
                        color: "primary.main",
                        p: 0.5,
                        px: 1,
                        borderRadius: "12px",
                        borderBottomLeftRadius: 0,
                        mb: 1,
                        display: "inline-block",
                      }}
                    >
                      {doctor.designation?.split(",")?.[1]}
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      borderTop: "1px solid lightgrey",
                      justifyContent: "space-between",
                      alignItems: "center",
                      pt: 2,
                      ml: 2,
                    }}
                  >
                    <Typography
                      variant="h6"
                      fontWeight={600}
                      color="primary.main"
                      fontSize="16px"
                    >
                      ৳{doctor?.apointmentFee}
                    </Typography>
                    <Link href="/">
                      <Typography
                        // variant="h6"
                        fontWeight={600}
                        color="primary.main"
                        fontSize="16px"
                      >
                        See Doctor
                        <KeyboardArrowRightRoundedIcon
                          sx={{ fontSize: "24px" }}
                        />
                      </Typography>
                    </Link>
                  </Box>
                </Stack>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Box textAlign="center">
          <Button variant="outlined">View All</Button>
        </Box>
      </Container>
    </Box>
  );
};

export default TopDoctors;
