export default function CartPage() {
  const products = [
    {
      id: 1,
      name: "Wireless Headphone",
      price: 120,
      quantity: 1,
      image: "https://via.placeholder.com/80",
    },
    {
      id: 2,
      name: "Gaming Mouse",
      price: 45,
      quantity: 2,
      image: "https://via.placeholder.com/80",
    },
  ];
  const totalPrice = products.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  return (
    <>
      <div className="max-w-6xl mx-auto p-6">
       
        <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="md:col-span-2 space-y-4">
            {products.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-white p-4 rounded-xl shadow"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded-md"
                  />
                  <div>
                    <h2 className="text-lg font-semibold">{item.name}</h2>
                    <p className="text-gray-600">${item.price}</p>
                  </div>
                </div>

               
                <div className="flex items-center gap-3">
                  <button className="px-3 py-1 bg-gray-200 rounded">-</button>
                  <span>{item.quantity}</span>
                  <button className="px-3 py-1 bg-gray-200 rounded">+</button>
                </div>
              </div>
            ))}
          </div>

         
          <div className="bg-white p-6 rounded-xl shadow space-y-4">
            <h2 className="text-xl font-semibold">Order Summary</h2>

            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-medium">${totalPrice}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-600">Shipping</span>
              <span className="font-medium">$10</span>
            </div>

            <hr />

            <div className="flex justify-between text-lg font-semibold">
              <span>Total</span>
              <span>${totalPrice + 10}</span>
            </div>

            <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
