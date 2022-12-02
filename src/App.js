import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/NavBar";
import Footer from "./decorations/Footer";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar></Navbar>
          <Footer></Footer>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
