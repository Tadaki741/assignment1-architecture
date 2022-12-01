import Navbar from "./NavBar";

function Introduction() {
  return (
    <div id="parent-container" className="md:container md:mx-auto">
      {/**Navbar for the hotel */}
      <Navbar />

      {/**Display the name */}
      <div className="text-center py-6 mb-5">
        <h1 className="font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-b from-purple-200 to-cyan-500 drop-shadow-lg">
          The Princess of Arena Cam Ranh Home
        </h1>
      </div>

      {/*Image of the hotel in List*/}
      <div id="image-section" className="">
        <img
          className="max-w-auto h-auto rounded-lg mx-auto"
          alt="hotelImage"
          src="https://images.unsplash.com/photo-1445019980597-93fa8acb246c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80"
        ></img>
      </div>
    </div>
  );
}

export default Introduction;
