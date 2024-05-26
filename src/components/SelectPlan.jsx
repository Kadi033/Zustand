import { advanced, arcade, pro } from '../assets';
import useStore from '../store/useStore';

function SelectPlan() {
  const prevStep = useStore((state) => state.prevStep);
  const nextStep = useStore((state) => state.nextStep);
  const setSelectedPlan = useStore((state) => state.setSelectedPlan);
  const selectedPlan = useStore((state) => state.selectedPlan);
  const billingCycle = useStore((state) => state.billingCycle);
  const toggleBillingCycle = useStore((state) => state.toggleBillingCycle);

  const handlePlanSelection = (plan) => {
    setSelectedPlan(plan);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div className="grid content-center pb-4">
      <form onSubmit={handleSubmit}>
        <div className="w-auto h-max mt-5 pb-8">
          <h1 className="text-3xl font-bold text-[#012959]">Select your plan</h1>
          <h2 className="text-[#9699ab] w-[450px] text-lg pt-1 font-normal">
            You have the option of monthly or yearly billing.
          </h2>
        </div>
        <div className="flex justify-between">
          <div
            className={`flex flex-col gap-[55px] w-[134px] border p-4 justify-between cursor-pointer select-none rounded-md ${selectedPlan?.name === 'Arcade' ? 'bg-[#473dff] border-[#473dff]' : 'border-[#d3d3d3] hover:border-[#473dff]'}`}
            onClick={() => handlePlanSelection({ name: 'Arcade', price: billingCycle === 'monthly' ? '$9/mo' : '$90/yr' })}
          >
            <img src={arcade} className="w-10 h-10" alt="Arcade Plan" />
            <span>
              <h2 className={`font-bold ${selectedPlan?.name === 'Arcade' ? 'text-white' : 'text-[#012959]'}`}>Arcade</h2>
              <p className={`tracking-wider ${selectedPlan?.name === 'Arcade' ? 'text-white' : 'text-[#9699ab]'}`}>{billingCycle === 'monthly' ? '$9/mo' : '$90/yr'}</p>
            </span>
          </div>
          <div
            className={`flex flex-col gap-[55px] w-[134px] border p-4 justify-between cursor-pointer select-none rounded-md ${selectedPlan?.name === 'Advanced' ? 'bg-[#473dff] border-[#473dff]' : 'border-[#d3d3d3] hover:border-[#473dff]'}`}
            onClick={() => handlePlanSelection({ name: 'Advanced', price: billingCycle === 'monthly' ? '$12/mo' : '$120/yr' })}
          >
            <img src={advanced} className="w-10 h-10" alt="Advanced Plan" />
            <span>
              <h2 className={`font-bold ${selectedPlan?.name === 'Advanced' ? 'text-white' : 'text-[#012959]'}`}>Advanced</h2>
              <p className={`tracking-wider ${selectedPlan?.name === 'Advanced' ? 'text-white' : 'text-[#9699ab]'}`}>{billingCycle === 'monthly' ? '$12/mo' : '$120/yr'}</p>
            </span>
          </div>
          <div
            className={`flex flex-col gap-[55px] w-[134px] border p-4 justify-between cursor-pointer select-none rounded-md ${selectedPlan?.name === 'Pro' ? 'bg-[#473dff] border-[#473dff]' : 'border-[#d3d3d3] hover:border-[#473dff]'}`}
            onClick={() => handlePlanSelection({ name: 'Pro', price: billingCycle === 'monthly' ? '$15/mo' : '$150/yr' })}
          >
            <img src={pro} className="w-10 h-10" alt="Pro Plan" />
            <span>
              <h2 className={`font-bold ${selectedPlan?.name === 'Pro' ? 'text-white' : 'text-[#012959]'}`}>Pro</h2>
              <p className={`tracking-wider ${selectedPlan?.name === 'Pro' ? 'text-white' : 'text-[#9699ab]'}`}>{billingCycle === 'monthly' ? '$15/mo' : '$150/yr'}</p>
            </span>
          </div>
        </div>
        <div className="min-w-full flex items-center justify-center p-4 rounded-md bg-[#fafbff] gap-10 mt-8">
          <h1 className="font-bold text-[#012959]">Monthly</h1>
          <div className="inline-flex items-center">
            <div className="relative inline-block w-8 h-4 rounded-full cursor-pointer">
              <input
                id="billing-switch"
                type="checkbox"
                className="absolute w-8 h-4 transition-colors duration-300 rounded-full appearance-none cursor-pointer peer bg-[#02295a] checked:bg-[#473dff] peer-checked:border-gray-900 peer-checked:before:bg-gray-900"
                defaultChecked={billingCycle === 'yearly'}
                onChange={toggleBillingCycle}
              />
              <label
                htmlFor="billing-switch"
                className="before:content[''] absolute top-2/4 -left-1 h-5 w-5 -translate-y-2/4 cursor-pointer rounded-full border border-blue-gray-100 bg-white shadow-md transition-all duration-300 before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity hover:before:opacity-10 peer-checked:translate-x-full peer-checked:border-gray-50 peer-checked:before:bg-gray-900"
              >
                <div
                  className="inline-block p-5 rounded-full top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4"
                  data-ripple-dark="true"
                ></div>
              </label>
            </div>
          </div>
          <h1 className="text-[#9699ab] tracking-wider">Yearly</h1>
        </div>
        <div className="flex mt-[105px] justify-between items-center">
          <h2 className="text-[#9699ab] hover:text-[#02295a] cursor-pointer" onClick={prevStep}>
            Go Back
          </h2>
          <button
            type="submit"
            className="justify-self-end bg-[#02295a] text-white font-medium min-w-[120px] py-4 px-6 rounded-lg transition duration-[var(--transition-time)] ease-in-out hover:bg-[#473dff]"
          >
            Next Step
          </button>
        </div>
      </form>
    </div>
  );
}

export default SelectPlan;
