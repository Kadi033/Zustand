import useStore from "../store/useStore";

function Summary() {
  const selectedPlan = useStore((state) => state.selectedPlan);
  const billingCycle = useStore((state) => state.billingCycle);
  const selectedAddOns = useStore((state) => state.selectedAddOns);

  const prevStep = useStore((state) => state.prevStep);
  const nextStep = useStore((state) => state.nextStep);

  // Function to calculate total cost
  const calculateTotal = () => {
    let totalCost = selectedPlan ? parseFloat(selectedPlan.price.slice(1)) : 0;

    selectedAddOns.forEach(addOn => {
      const addOnPrice = addOn === 'onlineService' ? 1 :
                        addOn === 'largerStorage' ? 2 :
                        addOn === 'customizableProfile' ? 3 : 0;

      totalCost += addOnPrice;
    });

    return totalCost.toFixed(2);
  };

  // Function to generate add-ons display
  const renderAddOns = () => {
    return selectedAddOns.map((addOn, index) => {
      let addOnName, addOnPrice;
      switch (addOn) {
        case 'onlineService':
          addOnName = 'Online Service';
          addOnPrice = billingCycle === 'monthly' ? '+$1/mo' : '+$12/yr';
          break;
        case 'largerStorage':
          addOnName = 'Larger Storage';
          addOnPrice = billingCycle === 'monthly' ? '+$2/mo' : '+$24/yr';
          break;
        case 'customizableProfile':
          addOnName = 'Customizable Profile';
          addOnPrice = billingCycle === 'monthly' ? '+$3/mo' : '+$36/yr';
          break;
        default:
          addOnName = '';
          addOnPrice = '';
      }

      return (
        <div key={index} className="flex justify-between">
          <p className="text-[#9699ab]">{addOnName}</p>
          <p className="text-[#012959]">{addOnPrice}</p>
        </div>
      );
    });
  };

  return (
    <div className="grid content-center pb-4">
      <form action="">
        <div className="w-auto h-max mt-5 pb-8">
          <h1 className="text-3xl font-bold text-[#012959]">Finishing up</h1>
          <h2 className="text-[#9699ab] w-[450px] text-lg pt-1 font-normal">
            Double-check everything looks OK before confirming.
          </h2>
        </div>
        <div className="flex justify-between flex-col">
          <div className="p-8 bg-[#fafbff] rounded-lg">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-[#012959] font-bold text-[19.2px]">{selectedPlan ? selectedPlan.name : ''} ({billingCycle})</h1>
                <p className="underline text-[#9699ab]">Change</p>
              </div>
              <h2 className="text-[#012959] font-bold text-base">{selectedPlan ? selectedPlan.price : ''}</h2>
            </div>
            <hr className="mt-6 mb-6" />
            {renderAddOns()}
          </div>
          <div className="flex justify-between mt-6 pt-6 p-8">
            <p className="text-[#9699ab] text-lg font-normal">Total (per {billingCycle})</p>
            <h1 className="text-[#473dff] text-2xl font-bold">+${calculateTotal()}/{billingCycle}</h1>
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
            className="justify-self-end bg-[#473dff] text-white font-medium min-w-[120px] py-4 px-6 rounded-lg transition duration-[var(--transition-time)] ease-in-out hover:bg-opacity-50"
            onClick={nextStep}
         >
            Confirm
          </button>
        </div>
      </form>
    </div>
  );
}

export default Summary;
