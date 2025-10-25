const transientState = {
  metalId: 0,
  sizeId: 0,
  styleId: 0,
};

export const setMetalChoice = (chosenMetal) => {
  console.log("Metal choice being set to:", chosenMetal);
  transientState.metalId = chosenMetal;
  console.log("Full transient state:", transientState);
};

export const setSizeChoice = (chosenSize) => {
  transientState.sizeId = chosenSize;
};

export const setStyleChoice = (chosenStyle) => {
  transientState.styleId = chosenStyle;
};

export const savePlaceOrder = async () => {
  //Add the required keys to the object below that are needed for a POST operation.
  if (
    transientState.metalId === 0 ||
    transientState.sizeId === 0 ||
    transientState.styleId === 0
  ) {
    window.alert(
      "Please make a selection for metal, size, and style before placing your order."
    );
    return;
  }

  const postOptions = {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(transientState),
  };

  //Send the transient state to your API
  const response = await fetch("http://localhost:8088/orders", postOptions);
};
