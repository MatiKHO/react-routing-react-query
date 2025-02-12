import { useContext } from "react";
import { useParams } from "react-router";
import { CountriesContext } from "../../context/CountriesContext";
import { Box, Button, Typography } from "@mui/material";

const CountriesIdComponent = () => {
  const { id } = useParams();
  const { countries } = useContext(CountriesContext);
  const country = countries.find((country) => country.cca3 === id);

  if (!country) {
    return <div>Country not found</div>;
  }

  return (
    <Box
      component="div"
      sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
    >
      <img src={country.flags.png} alt={country.name.common} />
      <Typography variant="h4">{country.name.common}</Typography>

      <Button variant="contained" href="/countries">
        Back to Countries
      </Button>
    </Box>
  );
};

export default CountriesIdComponent;
