function MoreInfoPage() {
  return (
    <div className="m-5 mx-auto">
      <p class="font-light text-black dark:text-gray-400">
        This website has been created by Vo Dai Duong (s3821186), currently a student of RMIT University Vietnam, and this is a assignment 1
      </p>
      <div
        id="popover-image"
        role="tooltip"
        class="inline-block absolute invisible z-10 w-96 text-sm font-light text-gray-500 bg-white rounded-lg border border-gray-200 shadow-sm opacity-0 transition-opacity duration-300 dark:text-gray-400 dark:bg-gray-800 dark:border-gray-600"
      >
        
      </div>
    </div>
  );
}
export default MoreInfoPage;
