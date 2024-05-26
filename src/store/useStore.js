import { create } from "zustand";

const useStore = create((set) => ({
  currentStep: 0,
  selectedPlan: null,
  billingCycle: "monthly",
  selectedAddOns: [],

  nextStep: () => set((state) => ({ currentStep: state.currentStep + 1 })),
  prevStep: () => set((state) => ({ currentStep: state.currentStep - 1 })),
  setSelectedPlan: (plan) => set({ selectedPlan: plan }),
  toggleBillingCycle: () =>
    set((state) => ({
      billingCycle: state.billingCycle === "monthly" ? "yearly" : "monthly",
    })),
    toggleAddOn: (addOn) => set((state) => {
      const selectedAddOns = state.selectedAddOns.includes(addOn)
        ? state.selectedAddOns.filter((item) => item !== addOn)
        : [...state.selectedAddOns, addOn];
      return { selectedAddOns };
    }),
  }));

export default useStore;
