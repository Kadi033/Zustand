import useStore from '../store/useStore';

function YourInfo() {
  const nextStep = useStore((state) => state.nextStep);

  return (
    <div className="grid content-center pb-4">
      <div className="w-auto h-max mt-5">
        <h1 className="text-3xl font-bold text-[#012959]">Personal info</h1>
        <h2 className="text-[#9699ab] w-[450px] text-lg pt-1 font-normal">
          Please provide your name, email address, and phone number.
        </h2>
      </div>

      <form action="" className="grid content-center">
        <label className="mt-6 pb-1" htmlFor="name">
          Name
        </label>
        <input
          id="name"
          type="text"
          placeholder="e.g. Stephen King"
          className="border rounded-md p-4 font-medium text-base text-gray-800 transition duration-300 ease-in-out focus:outline-[#463dff]"
        />
        <label className="mt-6 pb-1" htmlFor="email">
          Email Address
        </label>
        <input
          id="email"
          type="text"
          placeholder="e.g. stephenking@lorem.com"
          className="border rounded-md p-4 font-medium text-base text-gray-800 transition duration-300 ease-in-out focus:outline-[#463dff]"
        />
        <label className="mt-6 pb-1" htmlFor="phone">
          Phone Number
        </label>
        <input
          id="phone"
          type="text"
          placeholder="e.g. +1 234 567 890"
          className="border rounded-md p-4 font-medium text-base text-gray-800 transition duration-300 ease-in-out focus:outline-[#463dff]"
        />
        <button
          type="button"
          className="mt-[55px] justify-self-end bg-[#02295a] text-white font-medium min-w-[120px] py-4 px-6 rounded-lg transition duration-[var(--transition-time)] ease-in-out hover:bg-[#473dff]"
          onClick={nextStep}
        >
          Next Step
        </button>
      </form>
    </div>
  );
}

export default YourInfo;
