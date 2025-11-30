import { AUTH_KEY } from "../const/const";
import { decodedToken } from "../utils/jwt";
import {
  getFromLocalStorage,
  removeFromLocalStorage,
  saveToLocalStorage,
} from "../utils/local-storage";

export const storeUserData = (authToken: string) => {
  saveToLocalStorage(AUTH_KEY, authToken);
};

export const getUserData = (): any => {
  const token = getFromLocalStorage(AUTH_KEY);
  if (!!token) {
    const decoded = decodedToken(token);
    return {
      ...decoded,
      role: decoded?.roles?.toLowerCase(),
    };
  }
  return null;
};

export const clearUserData = () => {
  removeFromLocalStorage(AUTH_KEY);
};
