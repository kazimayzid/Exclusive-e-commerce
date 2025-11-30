import Container from "../container/Container";

export default function Footer() {
  return (
    <>
      <footer className="bg-black text-white py-10 px-4 md:px-16 mt-5">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div>
              <h2 className="text-xl font-semibold mb-4">Exclusive</h2>
              <p className="mb-4">Subscribe</p>
              <p className="text-sm mb-4">Get 10% off your first order</p>
              <div className="flex items-center border border-gray-600 rounded-lg overflow-hidden w-64">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-transparent outline-none px-3 py-2 w-full text-sm"
                />
                <button className="px-3 py-2 hover:bg-gray-700 transition">
                  ▶
                </button>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Support</h2>
              <p className="text-sm">111 Bijoy sarani, Dhaka,</p>
              <p className="text-sm mb-4">DH 1515, Bangladesh.</p>
              <p className="text-sm mb-2">exclusive@gmail.com</p>
              <p className="text-sm">+88015-88888-9999</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Account</h2>
              <ul className="space-y-2 text-sm">
                <li className="hover:text-gray-400 cursor-pointer">
                  My Account
                </li>
                <li className="hover:text-gray-400 cursor-pointer">
                  Login / Register
                </li>
                <li className="hover:text-gray-400 cursor-pointer">Cart</li>
                <li className="hover:text-gray-400 cursor-pointer">Wishlist</li>
                <li className="hover:text-gray-400 cursor-pointer">Shop</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Quick Link</h2>
              <ul className="space-y-2 text-sm">
                <li className="hover:text-gray-400 cursor-pointer">
                  Privacy Policy
                </li>
                <li className="hover:text-gray-400 cursor-pointer">
                  Terms Of Use
                </li>
                <li className="hover:text-gray-400 cursor-pointer">FAQ</li>
                <li className="hover:text-gray-400 cursor-pointer">Contact</li>
              </ul>
            </div>
          </div>

          <div className="mt-10 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
            © Copyright Rimel 2022. All right reserved
          </div>
        </Container>
      </footer>
    </>
  );
}
