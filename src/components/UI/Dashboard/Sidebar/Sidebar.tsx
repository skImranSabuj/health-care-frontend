import { List, Stack, Typography } from "@mui/material";

import Image from "next/image";
import assets from "@/src/assets";
import Link from "next/link";
import { APP_NAME } from "@/src/const/const";
import { drawerItems } from "@/src/utils/drawerItems";
import { UserRoles } from "@/src/types";
import SideBarItem from "./SideBarItem";

const Sidebar = () => {
  return (
    <div>
      <Stack
        direction="row"
        sx={{ p: 1, justifyContent: "center", alignItems: "center" }}
        spacing={1}
        component={Link}
        href="/"
      >
        <Image src={assets.svgs.logo} alt="Logo" width={50} height={50} />
        <Typography sx={{ fontWeight: "bold", color: "primary.main" }}>
          {APP_NAME}
        </Typography>
      </Stack>
      <List>
        {drawerItems("admin" as UserRoles).map((item) => (
          <SideBarItem key={item.title} item={item} />
        ))}
      </List>
    </div>
  );
};

export default Sidebar;
