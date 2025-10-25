export const Orders = async () => {
  const ordersFetch = await fetch(
    "http://localhost:8088/orders?_expand=metal&_expand=style&_expand=size"
  );
  const orders = await ordersFetch.json();

  let html = "";

  let ordersHTML = orders.map((order) => {
    const orderPrice = order.metal.price + order.style.price + order.size.price;
    return `
                <section
                class="custom-orders-list">
                    <div>Custom Order: ${order.id} Cost: $${orderPrice.toFixed(
      2
    )}</div>
                    </section>`;
  });

  html += ordersHTML.join("");

  return html;
};
