export default function RoomInfo({ room }) {

  //const updateRoom = (id, )


  return (
    <div className="relative border rounded-lg m-5 text-center cursor-pointer transition hover:border-x-red-300 hover:border-y-purple-200 hover:shadow-lg">
      <div className="p-1">
        <img
          className="w-auto h-auto rounded-2xl"
          alt="pokemonImage"
          src={room.image_src}
        ></img>

        <h2 className="text-lg font-bold mb-0">{room.name}</h2>
        <h2 className="text-2xl text-purple-500 m-2">Current quantity available: {room.number_of_rooms}</h2>
        <h2 className="text-2xl text-purple-500 m-2">Room rate: {room.rate} $</h2>
        <h3 className="text-2xl text-purple-500 m-2">Size: {room.size} m2</h3>
      </div>

      <div>
        <button
          type="button"
          className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          onClick={() => {
            console.log("rent button clicked !")
          }}
        >
          Rent this room
        </button>
      </div>
    </div>
  );
}
