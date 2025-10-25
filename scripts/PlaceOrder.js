import { savePlaceOrder } from "./TransientState.js";

const handlePlaceOrder = (clickEvent) => {
  if (clickEvent.target.id === "placeOrder-button") {
    console.log("Button Clicked!");
    savePlaceOrder();
  }
};

export const PlaceOrder = () => {
  document.addEventListener("click", handlePlaceOrder);
  return `<button id="placeOrder-button">Create Custom Order</button>`;
};
