import { GlobalStyles } from "twin.macro";
import "./App.css";
import ButtonComponent from "./components";
import { StyledApp } from "./styles/StyledApp";

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <ButtonComponent />
      </StyledApp>
    </>
  );
}

export default App;
