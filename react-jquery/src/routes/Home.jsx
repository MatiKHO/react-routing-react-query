import { Box, Typography } from "@mui/material";

const Home = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
          p: 2,
          height: "90vh",
        }}
      >
        <Typography variant="h4">
          Bienvenido/a a CountriesApp. Una aplicación para buscar países y el
          detalle de los mismos.
        </Typography>
      </Box>
    </>
  );
};

export default Home;
