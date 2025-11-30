"use client";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../theme/theme";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "@/src/redux/store";

const Providers = ({ children }: { children: React.ReactNode }) => (
  <ReduxProvider store={store}>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </ReduxProvider>
);

export default Providers;
