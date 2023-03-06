import { useMemo } from "react";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider } from "@mui/material/styles";
import { cacheRtl } from "./config/RtlCache";
import { useMediaQuery, createTheme, CssBaseline } from "@mui/material";
import { themeSetting } from "./config/Theme";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
const App = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const theme = useMemo(
    () => createTheme(themeSetting(isNonMobile)),
    [isNonMobile]
  );


  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </CacheProvider>
  );
};

export default App;
