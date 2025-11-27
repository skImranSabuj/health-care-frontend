export const registerPatient = async (data: FormData) => {
  const apiURL =
    process.env.NEXT_PUBLIC_BACKEND_API_URL + "/user/create-patient";
  const res = await fetch(apiURL, {
    method: "POST",
    body: data,
  });
  const registerdPatient = await res.json();
  return registerdPatient;
};
