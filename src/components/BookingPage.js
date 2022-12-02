import RoomInfo from "./RoomInfo";
import { Toaster } from "react-hot-toast";

function BookingPage() {
  var retrievedObjectString = localStorage.getItem("hotel");
  var jsonObject = JSON.parse(retrievedObjectString);
  var hotelCamRanh = jsonObject.HotelCamRanh;
  var room_list = hotelCamRanh.list_of_rooms;

  return (
    <>
      {/**Display the list of room for the guest*/}
      <div className="container mx-auto flex flex-col bg-gray-300 w-full">
        {room_list &&
          room_list.length > 0 &&
          room_list.map((p, i) => <RoomInfo key={i} room={p} />)}
      </div>

      <Toaster
        toastOptions={{
          success: {
            style: {
              background: "green",
            },
          },
          error: {
            style: {
              background: "red",
            },
          },
        }}
      />
    </>
  );
}

export default BookingPage;
