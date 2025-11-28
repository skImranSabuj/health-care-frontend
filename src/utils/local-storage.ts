export const saveToLocalStorage = (key: string, value: string): void => {
  if (typeof window !== "undefined" && !!key) {
    localStorage.setItem(key, value);
  }
};

export const getFromLocalStorage = (key: string): string | null => {
  if (typeof window !== "undefined" && !!key) {
    return localStorage.getItem(key);
  }
  return "";
};

export const removeFromLocalStorage = (key: string): void => {
  if (typeof window !== "undefined" && !!key) {
    localStorage.removeItem(key);
  }
};
