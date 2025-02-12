import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { CountriesContext } from "../../context/CountriesContext";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { Box, Typography } from "@mui/material";

const CountriesComponent = () => {
  const navigate = useNavigate();
  const { countries, isLoading, error } = useContext(CountriesContext);
  const [selectedCountry, setSelectedCountry] = useState("");
  const sortedCountries = [...countries].sort((a, b) =>
    a.name.common.localeCompare(b.name.common)
  );
  const handleChange = (event) => {
    const countryCode = event.target.value;
    setSelectedCountry(countryCode);
    navigate(`/countries/${countryCode}`);
  };

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>Error loading countries</h1>;
  if (!countries) return <h1>No countries available</h1>;

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <Typography variant="h4">Countries</Typography>
      <Select
        sx={{ width: 200 }}
        displayEmpty
        value={selectedCountry}
        onChange={handleChange}
      >
        <MenuItem value="">Select a Country</MenuItem>
        {sortedCountries.map((country) => (
          <MenuItem key={country.cca3} value={country.cca3}>
            {country.name.common}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
};

export default CountriesComponent;
