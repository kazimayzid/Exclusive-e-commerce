import { Eye, Heart } from "lucide-react";
import { BiSolidStar } from "react-icons/bi";
export default function ProductCard({ products }) {
  return (
    <>
      {products.map((item) => (
        <div key={item.id}>
          <div className="overflow-hidden">
            <div className="relative group bg-[#F5F5F5] w-[270px] h-[250px] flex items-center justify-center rounded-[4px]">
              <img
                className="group-hover:scale-125 duration-300"
                src={item.image}
                alt={item.title}
              />
              <div className="absolute top-[12px] left-[12px] font-poppins font-normal text-[12px] leading-[18px] text-white py-[4px] px-[12px] bg-secondary rounded-[4px]">
                -
                {Math.round(
                  ((item.mainprice - item.offerprice) / item.mainprice) * 100
                )}
                %
              </div>
              <div className="w-[34px] h-[34px] rounded-full bg-white absolute right-[12px] top-[12px] flex items-center justify-center hover:bg-secondary hover:text-white duration-300">
                <Heart />
              </div>
              <div className="w-[34px] h-[34px] rounded-full bg-white absolute right-[12px] top-[54px] flex items-center justify-center hover:bg-secondary hover:text-white duration-300">
                <Eye />
              </div>
              <button
                className="absolute bottom-0 w-full py-2 bg-secondary hover:bg-primary text-white 
                     transform translate-y-full opacity-0 
                     group-hover:translate-y-0 group-hover:opacity-100 
                     transition-all duration-300 cursor-pointer"
              >
                Add To Cart
              </button>
            </div>
          </div>
          <div className="mt-[16px]">
            <h1 className="font-poppins font-medium text-[16px] leading-[24px] text-black">
              {item.title}
            </h1>
            <div className="mt-2 flex gap-x-3">
              <span className="font-poppins font-medium text-[16px] leading-[24px] text-secondary">
                ${item.offerprice}
              </span>
              <span className="font-poppins font-medium text-[16px] leading-[24px] text-[rgba(0,0,0,0.5)] line-through">
                ${item.mainprice}
              </span>
            </div>
            <div className="mt-2 flex gap-x-2">
              <div className="flex">
                {[...Array(5)].map((_, index) =>
                  index < item.stars ? (
                    <BiSolidStar key={index} color="#FFAD33" />
                  ) : (
                    <BiSolidStar key={index} className="text-black/25" />
                  )
                )}
              </div>
              <span className="font-poppins font-semibold text-[14px] leading-[21px] text-[rgba(0,0,0,0.5)]">
                ({item.rating})
              </span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
