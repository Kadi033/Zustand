import "./App.css";
import { left } from "./assets";
import { AddOns, LeftNames, SelectPlan, Summary, Thank, YourInfo } from "./components"; // Import the Thank component
import useStore from './store/useStore';

function App() {
  const { currentStep } = useStore();

  const numbers = [1, 2, 3, 4, 5]; // Update the numbers array to include the new step
  const text = ["YOUR INFO", "SELECT PLAN", "ADD-ONS", "SUMMARY", 'THANKS']; // Update the text array to include the new step

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex bg-white rounded-2xl p-4 pr-24 w-[957px] h-[630px] justify-between">
        <div className="relative">
          <img src={left} alt="" className="w-[300px] h-full align-middle object-cover rounded-xl" />
          <div className="flex flex-col absolute gap-6 top-6 left-8">
            {numbers.map((number, index) => (
              <LeftNames key={number} number={number} text={text[index]} isActive={currentStep === index} />
            ))}
          </div>
        </div>
        {/* Render the corresponding component based on the current step */}
        {currentStep === 0 && <YourInfo />}
        {currentStep === 1 && <SelectPlan />}
        {currentStep === 2 && <AddOns />}
        {currentStep === 3 && <Summary />}
        {currentStep === 4 && <Thank />} {/* Render the Thank component when currentStep is 4 */}
      </div>
    </div>
  );
}

export default App;
