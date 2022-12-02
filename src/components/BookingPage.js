import RoomInfo from "./RoomInfo";

function BookingPage() {
  var retrievedObjectString = localStorage.getItem("hotel");
  var jsonObject = JSON.parse(retrievedObjectString);
  var hotelCamRanh = jsonObject.HotelCamRanh;
  var room_list = hotelCamRanh.list_of_rooms;

  return (
    <>
      {/**Display the list of room for the guest*/}
      <div className="container w-100 lg:w-3/5 mx-auto flex flex-col">
        {room_list &&
          room_list.length > 0 &&
          room_list.map((p, i) => <RoomInfo key={i} room={p} />)}
      </div>
    </>
  );
}

export default BookingPage;
