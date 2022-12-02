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
        <div class="grid grid-cols-5">
          <div class="col-span-3 p-3">
            <div class="space-y-2">
              <h3 class="font-semibold text-gray-900 dark:text-white">
                About Italy
              </h3>
              <p>
                Italy is located in the middle of the Mediterranean Sea, in
                Southern Europe it is also considered part of Western Europe. A
                unitary parliamentary republic with Rome as its capital and
                largest city.
              </p>
            </div>
          </div>
          <img
            src="/docs/images/popovers/italy.png"
            class="col-span-2 h-full"
            alt="Italy map"
          />
        </div>
        <div data-popper-arrow></div>
      </div>
    </div>
  );
}
export default MoreInfoPage;
