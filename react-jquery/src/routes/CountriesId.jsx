import { Box } from "@mui/material";
import CountriesIdComponent from "../components/CountriesId/Index";

const CountryId = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flexGrow: 1,
        gap: 2,
        p: 2,
      }}
    >
      <CountriesIdComponent />
    </Box>
  );
};

export default CountryId;
