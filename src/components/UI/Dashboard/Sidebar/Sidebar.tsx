import { List, Stack, Typography } from "@mui/material";

import Image from "next/image";
import assets from "@/src/assets";
import Link from "next/link";
import { APP_NAME } from "@/src/const/const";
import { drawerItems } from "@/src/utils/drawerItems";
import { UserRoles } from "@/src/types";
import SideBarItem from "./SideBarItem";
import { getUserData } from "@/src/services/auth.services";
import { useEffect, useState } from "react";

const Sidebar = () => {
  // const [userRole, setUserRole] = useState(getUserData() || "");
  const { role: userRole } = getUserData();

  // useEffect(() => {
  //   const { role } = getUserData();
  //   setUserRole(role);
  // }, []);

  console.log(userRole);

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
        {drawerItems(userRole as UserRoles).map((item) => (
          <SideBarItem key={item.title} item={item} />
        ))}
      </List>
    </div>
  );
};

export default Sidebar;
