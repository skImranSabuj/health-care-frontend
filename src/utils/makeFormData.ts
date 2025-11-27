export const makeFormData = (values: any) => {
  const formData = new FormData();
  formData.append("data", JSON.stringify(values));
  return formData;
};
