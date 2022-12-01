import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/NavBar";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar></Navbar>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
