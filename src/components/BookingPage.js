import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCalendarDays,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import RoomInfo from "./RoomInfo";

function BookingPage() {
  var retrievedObjectString = localStorage.getItem("hotel");
  var jsonObject = JSON.parse(retrievedObjectString);
  var hotelCamRanh = jsonObject.HotelCamRanh;
  var room_list = hotelCamRanh.list_of_rooms;

  return (
    <>
      <div className="headerSearch">
        <h2>{console.log(room_list)}</h2>

        <div className="headerSearchItem">
          <FontAwesomeIcon icon={faBed} className="headerIcon" />
          <input
            type="text"
            placeholder="Where are you going ?"
            className="headerSearchInput"
          />
        </div>

        <div className="headerSearchItem">
          <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
          <span className="headerSearchText">date to date</span>
        </div>

        <div className="headerSearchItem">
          <FontAwesomeIcon icon={faPerson} className="headerIcon" />
          <span className="headerSearchText">2 adults 2 children 1 room</span>
        </div>
      </div>

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
