import { MetalOptions } from "./MetalOptions.js";
import { SizeOptions } from "./SizeOptions.js";
import { StyleOptions } from "./StyleOptions.js";
import { PlaceOrder } from "./PlaceOrder.js";

const render = async () => {
  console.log("Render function called");
  const metalOptionsHTML = await MetalOptions();
  const sizeOptionsHTML = await SizeOptions();
  const styleOptionHTML = await StyleOptions();
  const placeOrderHTML = PlaceOrder();

  const container = document.querySelector("#container");

  const composedHTML = `
        <h1>Kneel Diamonds</h1>
    
        <article class="choices">
            <section class="choices_metals options">
                <h2>Metals</h2>
                ${metalOptionsHTML}
            </section>
        
            <section class="choices__sizes options">
                <h2>Sizes</h2>
                ${sizeOptionsHTML}
            </section>
        
            <section class="choices__styles options">
                <h2>Styles</h2>
                ${styleOptionHTML}
            </section>
        </article>
    
        <article class="order">
                ${placeOrderHTML}
        </article>
    
        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>
        
        </article>
    `;

  container.innerHTML = composedHTML;
};

render();
