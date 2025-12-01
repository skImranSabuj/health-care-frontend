import { DrawerItem } from "@/src/types";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

type SideBarItemProps = {
  item: DrawerItem;
};
const SideBarItem = ({ item }: SideBarItemProps) => {
  const currentPath = usePathname();
  const pathName = `/dashboard/${item.path}`;
  console.log({ currentPath, pathName });
  return (
    <Link href={pathName}>
      <ListItem
        key={item.title}
        disablePadding
        sx={{
          ...(currentPath === pathName
            ? {
                borderRight: "3px solid #1586FD",
                "& svg": {
                  color: "#1586FD",
                },
              }
            : {}),
        }}
      >
        <ListItemButton>
          <ListItemIcon>{!!item?.icon && <item.icon />}</ListItemIcon>
          <ListItemText primary={item.title} />
        </ListItemButton>
      </ListItem>
    </Link>
  );
};

export default SideBarItem;
