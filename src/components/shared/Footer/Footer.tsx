import assets from "@/src/assets";
import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <Box className="py-5 bg-gray-900 border-amber-200" py={5}>
      <Container>
        <Stack
          gap={4}
          sx={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            "& > a": {
              color: "white",
            },
          }}
        >
          <Link href="consultation">Consultation</Link>
          <Link href="consultation">Health Plans</Link>
          <Link href="consultation">Medicine</Link>
          <Link href="consultation">Diagnostics</Link>
          <Link href="consultation">NGOS</Link>
        </Stack>
        <Stack
          gap={4}
          sx={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            mt: 3,
            "& > a >  img": {
              color: "white",
              width: "32px",
              height: "32px",
            },
          }}
        >
          <Link
            href="https://www.facebook.com/profile.php?id=100005961814933"
            target="_blank"
            passHref
          >
            <Image src={assets.icons.facebook} alt="facebook icon" />
          </Link>
          <Link
            href="https://www.facebook.com/profile.php?id=100005961814933"
            target="_blank"
            passHref
          >
            <Image src={assets.icons.instagram} alt="instagram icon" />
          </Link>
          <Link
            href="https://www.facebook.com/profile.php?id=100005961814933"
            target="_blank"
            passHref
          >
            <Image src={assets.icons.x} alt="x icon" />
          </Link>
          <Link
            href="https://www.facebook.com/profile.php?id=100005961814933"
            target="_blank"
            passHref
          >
            <Image src={assets.icons.linkedin} alt="linkedin icon" />
          </Link>
        </Stack>
        <Box
          sx={{
            borderBottom: "1px dashed gray",
            my: 3,
          }}
        ></Box>

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          py={2}
          sx={{
            "& p,h4": {
              color: "white",
            },
          }}
        >
          <Typography>@2023 PH Health Care. All Rights Reserved.</Typography>
          <Link href="/">
            <Typography variant="h4">
              P
              <Box component="span" color="primary.main">
                H
              </Box>{" "}
              Health Care
            </Typography>
          </Link>
          <Typography>Privacy Policy! Terms & Conditions</Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
