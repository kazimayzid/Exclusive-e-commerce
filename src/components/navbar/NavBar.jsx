import Container from "../container/Container";
import logo from "../../assets/logo.png";
import { Heart, ShoppingCart } from "lucide-react";
export default function Navbar() {
  return (
    <>
      <Container>
        <div className="flex justify-between items-center mt-[40px]">
          <div>
            <a href="#">
              <img src={logo} alt="" />
            </a>
          </div>
          <div className="flex gap-x-[48px]">
            <a
              href="#"
              className="font-poppins font-normal text-[16px] leading-[24px] text-primary hover:underline hover:underline-offset-5 duration-300 transition-all"
            >
              Home
            </a>
            <a
              href="#"
              className="font-poppins font-normal text-[16px] leading-[24px] text-primary hover:underline hover:underline-offset-5 duration-300 transition-all"
            >
              Contact
            </a>
            <a
              href="#"
              className="font-poppins font-normal text-[16px] leading-[24px] text-primary hover:underline hover:underline-offset-5 duration-300 transition-all"
            >
              About
            </a>
            <a
              href="#"
              className="font-poppins font-normal text-[16px] leading-[24px] text-primary hover:underline hover:underline-offset-5 duration-300 transition-all"
            >
              Sign Up
            </a>
          </div>
          <div className="flex justify-center items-center gap-x-[24px]">
            <div className="relative w-56 bg-[#F5F5F5] rounded-[10px]">
              <div className="absolute inset-y-0 end-0 flex items-center pe-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="font-poppins font-normal block w-full p-4 ps-5 pe-7 text-[12px] leading-[18px] text-primary border border-none rounded-[10px]  bg-gray-50 focus:ring-blue-500 focus:outline-none   "
                placeholder="What are you looking for?"
                required
              />
            </div>

            <div>
              <Heart />
            </div>
            <div>
              {" "}
              <ShoppingCart />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
