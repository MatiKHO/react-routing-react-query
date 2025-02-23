import CountriesComponent from "../components/Countries/Index";
import { Box } from "@mui/material";

const Countries = () => {
  return (
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
      <CountriesComponent />
    </Box>
  );
};

export default Countries;
