import React, { useState } from "react";
import moment from "moment";
import Room from "../modeldata/Room";

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

  const [price, setPrice] = useState(0);

  const save = () => {
    var room = new Room(
      username,
      guest,
      email,
      phone,
      checkInDate,
      checkOutDate,
      price
    );
    var roomList = JSON.parse(localStorage.getItem("bookedRooms"));

    if (roomList === null) {
      roomList = [];
      roomList.push(room);

      //Save
      localStorage.setItem("bookedRooms", JSON.stringify(roomList));
    } else {
      roomList.push(room);

      //Save
      localStorage.setItem("bookedRooms", JSON.stringify(roomList));
    }
  };

  //Function to display the price for the customer
  const calculateTotalPrice = () => {
    const MULTIPLIER = 1;
    const a = moment(checkInDate);
    const b = moment(checkOutDate);
    const diff = b.diff(a);
    const duration = moment.duration(diff).asDays();

    return duration * roomRate + roomRate * MULTIPLIER;
  };

  return (
    <>
      <div className="" onClick={() => setIsOpen(false)} />
      <div className="bg-gray-600 bg-opacity-75 m-8 rounded-lg">
        <div className="bg-cyan-800 rounded-lg">
          <h5 className="font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-purple-300 to-pink-600 m-3">
            Renting form
          </h5>
          <h5 className="font-extrabold text-transparent text-1xl bg-clip-text bg-gradient-to-r from-cyan-300 to-pink-600">
            Room type: {roomName}
          </h5>
          <h5 className="font-extrabold text-transparent text-1xl bg-clip-text bg-gradient-to-r from-cyan-300 to-pink-600">
            Room size: {roomSize} m2
          </h5>
          <div>
            <span className="text-white">Booking name</span>
            <input
              type="text"
              placeholder="Enter your name"
              className="bg-gray-50 border border-gray-300 mx-auto text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-auto p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => {
                setUserName(e.currentTarget.value);
              }}
            ></input>
          </div>
          <div>
            <span className="text-white">Guest amount</span>
            <input
              type="number"
              step="1"
              className="bg-gray-50 border border-gray-300 mx-auto text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-auto p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => {
                setGuest(e.currentTarget.value);
              }}
            ></input>
          </div>
          <div>
            <span className="text-white">Booking email: </span>
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-gray-50 border border-gray-300 mx-auto text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-auto p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => {
                setEmail(e.currentTarget.value);
              }}
            ></input>
          </div>
          <div>
            <span className="text-white">Booking phone: </span>
            <input
              type="number"
              placeholder="Enter your phone"
              className="bg-gray-50 border border-gray-300 mx-auto text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-auto p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => {
                setPhone(e.currentTarget.value);
              }}
            ></input>
          </div>
          <div>
            <span className="text-white">Check in date: </span>
            <input
              type="date"
              placeholder="check in date"
              className="bg-gray-50 border border-gray-300 mx-auto text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-auto p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => {
                setCheckInDate(e.currentTarget.value);
              }}
            ></input>
          </div>
          <div>
            <span className="text-white">Check out date: </span>
            <input
              type="date"
              placeholder="check out date"
              className="bg-gray-50 border border-gray-300 mx-auto text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-auto p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => {
                setCheckOutDate(e.currentTarget.value);
              }}
            ></input>
          </div>
        </div>

        {price && (
          <>
            <h2>Price is: {price}</h2>
          </>
        )}

        <button
          className="text-white bg-green-600 hover:bg-green-400 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center m-3"
          onClick={() => setPrice(calculateTotalPrice())}
        >
          Calculate price
        </button>

        <button className="text-white bg-green-600 hover:bg-green-400 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center m-3"
                onClick={() => save() }
        >
          Rent !
        </button>

        <button
          className="text-white bg-red-600 hover:bg-red-400 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center m-3"
          onClick={() => setIsOpen(false)}
        >
          Cancel
        </button>
      </div>
    </>
  );
}

export default Modal;
