import CarouselSlider from "./CarouselSlider";

export default function LandingPageMiddle() {
  return (
    <>
      <div className="grid grid-cols-2 grid-flow-row rounded-lg md:grid-cols-6 gap-4 m-3 bg-slate-400">
        <div className="align-bottom mx-2">
          <CarouselSlider />
        </div>
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-300 dark:text-white">
            One of the best hotel at Nha Trang and Cam Ranh
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here we offer the best service for the guests
          </p>
          More images below
        </div>

        <div className="align-bottom mx-2">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15609.017971208907!2d109.2144908!3d12.0259927!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa16cb25d2b46bf10!2sThe%20Arena%20Cam%20Ranh!5e0!3m2!1svi!2s!4v1670002150113!5m2!1svi!2s"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
}
