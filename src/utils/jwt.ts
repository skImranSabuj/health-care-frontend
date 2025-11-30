import { jwtDecode } from "jwt-decode";

export const decodedToken = (token: string): { [key: string]: any } | null => {
  return jwtDecode(token);
};
