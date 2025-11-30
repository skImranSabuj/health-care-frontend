import { FieldValues } from "react-hook-form";

export const loginUser = async (data: FieldValues) => {
  const apiURL = process.env.NEXT_PUBLIC_BACKEND_API_URL + "/auth/login";
  const res = await fetch(apiURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
    cache: "no-store",
  });
  const loggedinUser = await res.json();
  return loggedinUser;
};
