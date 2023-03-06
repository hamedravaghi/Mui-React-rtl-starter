import { Box, Typography } from "@mui/material";
import { Helmet } from "react-helmet-async";
const Home = () => {
  return (
    <>
      <Helmet>
        {/* change title page  */}
        <title>صفحه اصلی</title>
      </Helmet>
      <Box p="2rem" width="100%" height="100vh">
        <Box
          display="flex"
          width="100%"
          height="100%"
          alignItems="center"
          justifyContent="center"
        >
          <Typography>صفحه خانه</Typography>
        </Box>
      </Box>
    </>
  );
};

export default Home;
