import useHotelData from "../hooks/useHotelData";
import Introduction from "./Introduction";

function LandingPage() {
  const { isLoading, isError, data } = useHotelData();
  
  return (
    <>
      {/**Hotel welcome section */}
      <div id="introduction-place">
        <Introduction />
      </div>

      {/**More description of the hotel */}
      <div id="hotel-description"></div>

      {/**Place for the user to book the room */}
      <div id="booking-rooms"></div>

      {/**Get the data */}
      {isLoading && (
        <div className="text-center">
          <strong>Loading...</strong>
        </div>
      )}

      {isError && (
        <div className="text-center">
          <strong>Error!</strong>
        </div>
      )}
      {data && (
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {console.log(data)}
        </div>
      )}
    </>
  );
}

export default LandingPage;
