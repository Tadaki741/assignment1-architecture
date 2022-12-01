import "./App.css";
import Introduction from "./components/Introduction";

function App() {
  return (
    <div className="App">
      {/**Hotel welcome section */}
      <div id="introduction-place">
        <Introduction />
      </div>

      {/**More description of the hotel */}
      <div id="hotel-description"></div>

      {/**Place for the user to book the room */}
      <div id="booking-rooms"></div>
    </div>
  );
}

export default App;
