import { Box, Typography } from "@mui/material";
import { Helmet } from "react-helmet-async";
const Login = () => {
  return (
    <>
      <Helmet>
        {/* change title page  */}
        <title>صفحه ورود</title>
      </Helmet>
      <Box p="2rem" width="100%" height="100vh">
        <Box
          display="flex"
          width="100%"
          height="100%"
          alignItems="center"
          justifyContent="center"
        >
          <Typography>صفحه ورود</Typography>
        </Box>
      </Box>
    </>
  );
};

export default Login;