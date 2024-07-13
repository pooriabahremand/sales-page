import "./App.css";
import { styled } from "@mui/material/styles";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import Main from "./components/Main";

const GridBox = styled("div")(() => ({
  display: "grid",
  gridTemplateColumns: "3fr 14fr",
  gridTemplateRows: "auto 1fr auto", // Define three rows
}));

function App() {
  return (
    <GridBox>
      <NavBar />
      <SideBar />
      <Main />
      <Footer />
    </GridBox>
  );
}

export default App;
