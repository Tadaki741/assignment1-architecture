import Navbar from "./NavBar";

function Introduction() {
  return (
    <div id="parent-container">
      {/**Navbar for the hotel */}
      <Navbar />

      {/**Display the name */}
      <div className="text-center py-6 mb-5">
        <h1 className="font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-b from-purple-200 to-cyan-500 drop-shadow-lg">
          The Princess of Arena Cam Ranh Home
        </h1>
      </div>

      {/*Image of the hotel in List*/}
      <div id="image-section" class="flex items-end">
        <img
          className="w-1/2"
          alt="hotelImage"
          src="https://cdn.britannica.com/96/115096-050-5AFDAF5D/Bellagio-Hotel-Casino-Las-Vegas.jpg"
        ></img>
      </div>
    </div>
  );
}

export default Introduction;
