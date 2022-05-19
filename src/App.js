import { BrowserRouter } from "react-router-dom";
import { Forms } from "./components/Forms";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Forms title="Decimal to Binary" id="decimal" />
        <Forms title="Text to Binary" id="text" />
      </BrowserRouter>
    </>
  );
}

export default App;
