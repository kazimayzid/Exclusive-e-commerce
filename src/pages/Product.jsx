import { ChevronRight, Eye, Heart } from "lucide-react";
import Container from "../components/container/Container";
import ProductCard from "../components/productCard/ProductCard";
import { products } from "../productData/products";
import { useEffect, useState } from "react";
import axios from "axios";
import { BiSolidStar } from "react-icons/bi";
export default function Product() {
  const sideBar = [
    { name: "Woman’s Fashion", icon: <ChevronRight /> },
    { name: "Men’s Fashion", icon: <ChevronRight /> },
    { name: "Electronics" },
    { name: "Home & Lifestyle" },
    { name: "Medicine" },
    { name: "Sports & Outdoor" },
    { name: "Baby’s & Toys" },
    { name: "Groceries & Pets" },
    { name: "Health & Beauty" },
  ];

  // Pagination functionality added=================================
  const [totalProduct, setTotalProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPageProduct, serPerPageProduct] = useState(2);


  // Product data fatching ================================
  const [productItem, setProductItem] = useState([]);
  async function productData() {
    try {
      const { data } = await axios.get(
        // "http://localhost:3000/api/v1/product/getallproduct"
        `http://localhost:3000/api/v1/product/getallproduct?page=${currentPage}&size=${perPageProduct}`
      );
      setProductItem(data.data);
      setTotalProduct(data.total);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    productData();
  }, [currentPage]);

  const pageNum = [
    ...Array(Math.ceil(totalProduct / perPageProduct))
      .keys()
      .map((item) => item + 1),
  ];
  return (
    <>
      <Container>
        <div className="flex w-[100%]">
          <div className=" w-[20%] border-r-[1px] border-[rgba(0,0,0,0.3)]">
            <div className="pt-[40px] flex flex-col gap-y-[16px]">
              {sideBar.map((menu, i) => (
                <a
                  className="font-poppins font-normal text-[16px] leading-[24px] text-primary flex justify-between"
                  key={i}
                  href="#"
                >
                  {menu.name}
                  {menu.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="w-[80%]">
            <div className=" flex flex-wrap gap-5 justify-start ml-10 mt-10">
              {productItem.map((item) => (
                <div key={item._id}>
                  <div className="overflow-hidden">
                    <div className="relative group bg-[#F5F5F5] w-[270px] h-[250px] flex items-center justify-center rounded-[4px]">
                      <img
                        className="group-hover:scale-125 duration-300"
                        src={item.image}
                        alt={item.name}
                      />
                      <div className="absolute top-[12px] left-[12px] font-poppins font-normal text-[12px] leading-[18px] text-white py-[4px] px-[12px] bg-secondary rounded-[4px]">
                        -
                        {Math.round(
                          ((item.mainprice - item.offerprice) /
                            item.mainprice) *
                            100
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
                      {item.name}
                    </h1>
                    <div className="mt-2 flex gap-x-3">
                      <span className="font-poppins font-medium text-[16px] leading-[24px] text-secondary">
                        ${item.discount}
                      </span>
                      <span className="font-poppins font-medium text-[16px] leading-[24px] text-[rgba(0,0,0,0.5)] line-through">
                        ${item.price}
                      </span>
                    </div>
                    <div className="mt-2 flex gap-x-2">
                      <div className="flex">
                        {[...Array(5)].map((_, index) =>
                          index < item.stars ? (
                            <BiSolidStar key={index} color="#FFAD33" />
                          ) : (
                            <BiSolidStar
                              key={index}
                              className="text-black/25"
                            />
                          )
                        )}
                      </div>
                      <span className="font-poppins font-semibold text-[14px] leading-[21px] text-[rgba(0,0,0,0.5)]">
                        ({item.rating})
                      </span>
                    </div>
                    <div>
                      {/* {item.colors && (
                      <div className="flex gap-2 mt-2">
                        {item.colors.map((color, i) => (
                          <div
                            key={i}
                            className="w-5 h-5 rounded-full border p-0.5 cursor-pointer"
                            style={{ backgroundColor: color }}
                          ></div>
                        ))}
                      </div>
                    )} */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-x-10">
              <div>Prev</div>
              {pageNum.map((num, i) => (
                <div
                  key={i}
                  onClick={() =>setCurrentPage(num)}
                  className={`mx-[2px]  px-1.5 rounded-[4px] text-white hover:bg-red-400 duration-200 cursor-pointer ${currentPage === num ? "bg-red-400" : "bg-secondary"}`}
                >
                  {num}
                </div>
              ))}
              <div>Next</div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
