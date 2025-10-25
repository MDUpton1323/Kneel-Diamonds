import { setStyleChoice } from "./TransientState.js";

export const StyleOptions = async () => {
  const response = await fetch("http://localhost:8088/styles");
  const styles = await response.json();

  const handleStyleChoice = (changeEvent) => {
    if (changeEvent.target.name === "style") {
      const styleId = parseInt(changeEvent.target.value);
      setStyleChoice(styleId);
    }
  };

  document.addEventListener("change", handleStyleChoice);

  let optionsHTML = "";

  const divStringArray = styles.map((style) => {
    return `<div>
        <input type="radio" name="style" value="${style.id}" /> ${style.style}
        </div>`;
  });

  optionsHTML += divStringArray.join("");

  return optionsHTML;
};
