export default function LandingPageMiddle() {
  return (
    <>
      <div className="w-full bg-white border border-gray-200 shadow-md dark:bg-gray-300 dark:border-gray-400">
        <img
          className="rounded-t-lg"
          src="/docs/images/blog/image-1.jpg"
          alt=""
        />

        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-300 dark:text-white">
            One of the best hotel at Nha Trang and Cam Ranh
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here we offer the best service for the guests
          </p>
          More images below
        </div>
      </div>
    </>
  );
}
