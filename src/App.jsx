import SelectUniversity from "./components/SelectUniversity";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Team from "./components/Team";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/university" element={<SelectUniversity />} />
        <Route path="/founders" element={<Team />} />
      </Routes>
      <ButtonGradient />
    </>
  );
};

export default App;
