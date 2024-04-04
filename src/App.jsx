import SelectUniversity from "./components/SelectUniversity";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ButtonGradient from "./assets/svg/ButtonGradient";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/university" element={<SelectUniversity />} />
      </Routes>
      <ButtonGradient />
    </>
  );
};

export default App;
