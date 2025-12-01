import { OverridableComponent } from "@mui/material/OverridableComponent";
import { USER_ROLE } from "../const/roles";
import { SvgIconTypeMap } from "@mui/material";

export type IMeta = {
  page: number;
  limit: number;
  total: number;
};

export type UserRoles = keyof typeof USER_ROLE;

export interface DrawerItem {
  title: string;
  path: string;
  parentPath?: string;
  icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string };
  child?: DrawerItem[];
}
