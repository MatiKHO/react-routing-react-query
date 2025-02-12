import NavBar from "../components/Navbar/Index";
import Countries from "../routes/Countries";
import CountryId from "../routes/CountriesId";
import Home from "../routes/Home";

import { CountriesProvider } from "../context/CountriesContext";
import { Routes, Route } from "react-router";

const App = () => {
  return (
    <>
      <CountriesProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/countries" element={<Countries />} />
          <Route path="/countries/:id" element={<CountryId />} />
        </Routes>
      </CountriesProvider>
    </>
  );
};

export default App;
