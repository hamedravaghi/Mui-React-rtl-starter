import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <Box
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        //    backgroundImage: `url(${Pattern})`, can adding image for background image
      }}
    >
      <Outlet />
    </Box>
  );
};

export default AuthLayout;
