import { createContext, useContext, useState, useEffect } from "react";
import { useCountries } from "../hooks/useCountries";

export const CountriesContext = createContext();

export const CountriesProvider = ({ children }) => {
  const { data: countries, isLoading, error } = useCountries();
  const [localCountries, setLocalCountries] = useState([]);

  useEffect(() => {
    if (countries) {
      setLocalCountries(countries);
    }
  }, [countries]);

  return (
    <CountriesContext.Provider
      value={{
        countries: localCountries,
        setCountries: setLocalCountries,
        isLoading,
        error,
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
};

export const useCountriesContext = () => {
  return useContext(CountriesContext);
};
