import React, { useState } from "react";
import moment from "moment";


function Modal({ setIsOpen, roomName, roomSize, roomRate }) {
  //Verify the user has inputed all the nesscesary value
  //username
  const [username, setUserName] = useState("");

  //guest
  const [guest, setGuest] = useState(0);

  //email
  const [email, setEmail] = useState("");

  //phone
  const [phone, setPhone] = useState(0);

  //check in date
  const [checkInDate, setCheckInDate] = useState();

  //check out date
  const [checkOutDate, setCheckOutDate] = useState();

  const calculateTotalDays = () => {
    const MULTIPLIER = 1;
    const a = moment(checkInDate);
    const b = moment(checkOutDate);
    const diff = b.diff(a);
    const duration = moment.duration(diff).asDays();
    //Calculate price
    return (duration * roomRate + roomRate * MULTIPLIER);
  };

  return (
    <>
      <div className="" onClick={() => setIsOpen(false)} />
      <div className="bg-purple-600 bg-opacity-75 m-8 rounded-lg">
        <div className="">
          <div className="">
            <h5 className="">Renting form</h5>
            <h5>Room name: {roomName}</h5>
            <h5>Room size: {roomSize} m2</h5>
            <div>
              Booking name:{" "}
              <input
                type="text"
                placeholder="Enter your name"
                onChange={(e) => {
                  setUserName(e.currentTarget.value);
                }}
              ></input>
            </div>
            <div>
              Booking guest:{" "}
              <input
                type="number"
                step="1"
                onChange={(e) => {
                  setGuest(e.currentTarget.value);
                }}
              ></input>
            </div>
            <div>
              Booking email:{" "}
              <input
                type="email"
                placeholder="Enter your email"
                onChange={(e) => {
                  setEmail(e.currentTarget.value);
                }}
              ></input>
            </div>
            <div>
              Booking phone:{" "}
              <input
                type="number"
                placeholder="Enter your phone"
                onChange={(e) => {
                  setPhone(e.currentTarget.value);
                }}
              ></input>
            </div>
            <div>
              Check in date:{" "}
              <input
                type="date"
                placeholder="check in date"
                onChange={(e) => {
                  setCheckInDate(e.currentTarget.value);
                }}
              ></input>
            </div>
            <div>
              Check out date:{" "}
              <input
                type="date"
                placeholder="check out date"
                onChange={(e) => {
                  setCheckOutDate(e.currentTarget.value);
                }}
              ></input>
            </div>
          </div>

          {/**Calculate price once everything is done */}
          {username && guest && email && phone && checkInDate && checkOutDate && (
            <div>
              Price is: 
              {calculateTotalDays()}
            </div>
          )}

          <button
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center m-3"
            onClick={() => setIsOpen(false)}
          >
            Rent
          </button>

          <button
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center m-3"
            onClick={() => setIsOpen(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
}

export default Modal;
