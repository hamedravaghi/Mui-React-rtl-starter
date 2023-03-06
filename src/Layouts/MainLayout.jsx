import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
const MainLayout = () => {
  return (
    <>
      <Box
        sx={{
          maxWidth: "100%",
          width: "100vw",
        }}
      >
        <Outlet />
      </Box>
    </>
  );
};

export default MainLayout;
