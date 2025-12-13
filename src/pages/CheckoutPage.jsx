export default function Checkout() {
  return (
    <>
      <div className="flex items-center justify-center p-20">
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-6">
         
          <div className="lg:col-span-2 space-y-6">
            
            <div className="bg-gray-50 rounded-2xl shadow p-6">
              <h2 className="text-xl font-semibold mb-4">
                Shipping Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  className="border rounded-xl p-3 focus:outline-none focus:ring w-full"
                  placeholder="First Name"
                />
                <input
                  className="border rounded-xl p-3 focus:outline-none focus:ring w-full"
                  placeholder="Last Name"
                />
                <input
                  className="border rounded-xl p-3 focus:outline-none focus:ring w-full md:col-span-2"
                  placeholder="Email Address"
                />
                <input
                  className="border rounded-xl p-3 focus:outline-none focus:ring w-full md:col-span-2"
                  placeholder="Street Address"
                />
                <input
                  className="border rounded-xl p-3 focus:outline-none focus:ring w-full"
                  placeholder="City"
                />
                <input
                  className="border rounded-xl p-3 focus:outline-none focus:ring w-full"
                  placeholder="Postal Code"
                />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow p-6 h-fit">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

            <div className="space-y-4 text-sm">
              <div className="flex justify-between">
                <span>Product Name</span>
                <span>$120</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>$10</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>$5</span>
              </div>
              <hr />
              <div className="flex justify-between font-semibold text-base">
                <span>Total</span>
                <span>$135</span>
              </div>
            </div>

            <button className="mt-6 w-full bg-black text-white py-3 rounded-xl font-medium hover:opacity-90 transition">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
