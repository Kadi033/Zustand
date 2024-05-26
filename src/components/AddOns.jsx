import useStore from "../store/useStore";

function AddOns() {
  const prevStep = useStore((state) => state.prevStep);
  const nextStep = useStore((state) => state.nextStep);
  const selectedAddOns = useStore((state) => state.selectedAddOns);
  const toggleAddOn = useStore((state) => state.toggleAddOn);

  // Handle checkbox change
  const handleCheckboxChange = (addOn) => {
    toggleAddOn(addOn);
  };

  // Prevent the form from submitting by default and trigger the next step instead
  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div className="grid content-center pb-4">
      <div className="w-auto h-max mt-5 pb-8">
        <h1 className="text-3xl font-bold text-[#012959]">Pick add-ons</h1>
        <h2 className="text-[#9699ab] w-[450px] text-lg pt-1 font-normal">
          Add-ons help enhance your gaming experience.
        </h2>
      </div>
      <form className="grid gap-4" onSubmit={handleSubmit}>
        <div
          className={`flex justify-between items-center border-solid border pt-4 pb-4 pl-6 pr-6 rounded-lg ${
            selectedAddOns.includes("onlineService")
              ? "border-[#473dff]"
              : "border-[#9699ab] hover:border-[#473dff]"
          }`}
          onClick={() => handleCheckboxChange("onlineService")}
        >
          <div>
            <div className="inline-flex items-center">
              <label
                className="relative flex items-center p-3 rounded-full cursor-pointer"
                htmlFor="online-service"
              >
                <input
                  type="checkbox"
                  className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-[#9699ab] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-50 checked:bg-[#473dff] checked:before:bg-[#473dff] hover:before:opacity-10"
                  id="online-service"
                />
                <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="1"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
              </label>
            </div>
          </div>
          <div className="flex flex-col w-[263px]">
            <h1 className="font-bold text-[#012959]">Online service</h1>
            <p className="text-[#9699ab]">Access to multiplayer games</p>
          </div>
          <div>
            <h2 className="text-[#473dff] tracking-wider">+$1/mo</h2>
          </div>
        </div>
        <div
          className={`flex justify-between items-center border-solid border pt-4 pb-4 pl-6 pr-6 rounded-lg ${
            selectedAddOns.includes("largerStorage")
              ? "border-[#473dff]"
              : "border-[#9699ab] hover:border-[#473dff]"
          }`}
          onClick={() => handleCheckboxChange("largerStorage")}
        >
          <div>
            <div className="inline-flex items-center">
              <label
                className="relative flex items-center p-3 rounded-full cursor-pointer"
                htmlFor="online-service"
              >
                <input
                  type="checkbox"
                  className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-[#9699ab] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-50 checked:bg-[#473dff] checked:before:bg-[#473dff] hover:before:opacity-10"
                  id="online-service"
                />
                <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="1"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
              </label>
            </div>
          </div>
          <div className="flex flex-col w-[263px]">
            <h1 className="font-bold text-[#012959]">Larger storage</h1>
            <p className="text-[#9699ab]">Extra 1TB of cloud save</p>
          </div>
          <div>
            <h2 className="text-[#473dff] tracking-wider">+$2/mo</h2>
          </div>
        </div>
        <div
          className={`flex justify-between items-center border-solid border pt-4 pb-4 pl-6 pr-6 rounded-lg ${
            selectedAddOns.includes("customizableProfile")
              ? "border-[#473dff]"
              : "border-[#9699ab] hover:border-[#473dff]"
          }`}
          onClick={() => handleCheckboxChange("customizableProfile")}
        >
          <div>
            <div className="inline-flex items-center">
              <label
                className="relative flex items-center p-3 rounded-full cursor-pointer"
                htmlFor="online-service"
              >
                <input
                  type="checkbox"
                  className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-[#9699ab] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-50 checked:bg-[#473dff] checked:before:bg-[#473dff] hover:before:opacity-10"
                  id="online-service"
                />
                <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="1"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
              </label>
            </div>
          </div>
          <div className="flex flex-col w-[263px]">
            <h1 className="font-bold text-[#012959]">Customizable Profile</h1>
            <p className="text-[#9699ab]">Custom theme on your profile</p>
          </div>

          <div>
            <h2 className="text-[#473dff] tracking-wider">+$3/mo</h2>
          </div>
        </div>
        <div className="flex mt-[105px] justify-between items-center">
          <h2
            className="text-[#9699ab] hover:text-[#02295a] cursor-pointer"
            onClick={prevStep}
          >
            Go Back
          </h2>
          <button
            type="submit"
            className="justify-self-end bg-[#02295a] text-white font-medium min-w-[120px] py-4 px-6 rounded-lg transition duration-[var(--transition-time)] ease-in-out hover:bg-[#473dff]"
            onSubmit={nextStep}
          >
            Next Step
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddOns;
