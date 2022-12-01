export default function RoomInfo({ room }) {
  return (
    <div className="relative border rounded-lg text-center cursor-pointer transition hover:border-x-cyan-200 hover:border-y-purple-200 hover:shadow-lg">
      <div
        className="p-1"
      >
        <img
          className="w-1/2"
          alt="pokemonImage"
          src={room.image_src}
        ></img>
        
        <h2 className="text-lg font-bold mb-0">Name: {room.name}</h2>
        <small className="block mb-4">Size: {room.size}</small>
      </div>
    </div>
  );
}
