import { setMetalChoice } from "./TransientState.js";

const handleMetalChoice = (changeEvent) => {
  console.log("Change event fired!", changeEvent);
  if (changeEvent.target.name === "metal") {
    const metalId = parseInt(changeEvent.target.value);
    console.log("Metal ID selected:", metalId);
    setMetalChoice(metalId);
  }
};

document.addEventListener("change", handleMetalChoice);

export const MetalOptions = async () => {
  console.log("Fetching metals...");
  const response = await fetch("http://localhost:8088/metals");
  const metals = await response.json();
  console.log("Metals received:", metals);

  let optionsHTML = "";
  //Use map() to generate new array of strings
  const divStringArray = metals.map((metal) => {
    return `<div>
        <input type="radio" name="metal" value="${metal.id}" /> ${metal.metal}
        </div>`;
  });

  optionsHTML += divStringArray.join("");

  return optionsHTML;
};
