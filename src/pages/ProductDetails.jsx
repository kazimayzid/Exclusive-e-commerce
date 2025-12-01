import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const { id } = useParams();
  console.log(id);

  // product data fatching =====================
  const [dataOfProduct, setDataOfProduct] = useState("");
  async function productData() {
    try {
      const { data } = await axios.get(
        `https://e-commerce-api-s7fz.onrender.com/api/v1/product/getsingleproduct/${id}`
      );
      setDataOfProduct(data.data);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    productData();
  }, []);
  console.log(dataOfProduct);
  const [quti, setQuti] = useState(0);
  const [data, setData] = useState([]);

  function handleAdd() {
    setData((prev) => {
      const exist = prev.find((item) => item._id === dataOfProduct._id);

      if (exist) {
        return prev.map((item) => {
          item._id === dataOfProduct._id
            ? { ...item, quantity: item.quantity + quti }
            : item;
        });
      }
      return [
        ...prev,
        {
          ...dataOfProduct,
          quantity: quti,
        },
      ];
    });
  }
  console.log(data);

  return (
    <>
      <div className="flex justify-between gap-x-20">
        <div className="h-[600px] bg-white p-6 flex flex-col lg:flex-row gap-10 max-w-6xl mx-auto  w-[50%]">
          <div className="flex justify-center items-center bg-gray-100 rounded-xl p-4 order-1 lg:order-2 h-[350px]">
            <img
              className="w-full h-full bg-gray-300 rounded-xl"
              src={dataOfProduct.image}
              alt={dataOfProduct.name}
            />
          </div>
        </div>

        <div className="flex-1 space-y-4 mt-5">
          <h2 className="text-2xl font-semibold">{dataOfProduct.name}</h2>

          <div className="flex items-center gap-2 text-yellow-500">
            ★★★★★ <span className="text-gray-500">(150 Reviews)</span>
          </div>

          <p className="text-green-600 font-medium">
            {dataOfProduct.stock > 0 ? "In Stock" : "Stock Out"}
          </p>

          <p className="text-3xl font-bold">{dataOfProduct.price} TK</p>

          <p className="text-gray-600 max-w-md text-sm">
            {dataOfProduct.description}
          </p>

          <div className="space-y-2">
            <h4 className="font-medium">Colours:</h4>
            <div className="flex gap-3">
              <div className="w-6 h-6 bg-gray-900 rounded-full cursor-pointer"></div>
              <div className="w-6 h-6 bg-red-500 rounded-full cursor-pointer"></div>
              <div className="w-6 h-6 bg-blue-500 rounded-full cursor-pointer"></div>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="font-medium">Size:</h4>
            <div className="flex gap-3">
              {["XS", "S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  className="border border-gray-300 px-3 py-1 rounded-md hover:bg-black hover:text-white transition"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center border rounded-md">
              <button
                disabled={quti === 0}
                onClick={() => setQuti(quti - 1)}
                className="px-3 py-1 border-r "
              >
                -
              </button>
              <span className="px-4">{quti}</span>
              <button
                onClick={() => setQuti(quti + 1)}
                className="px-3 py-1 border-l"
              >
                +
              </button>
            </div>

            <button
              onClick={() => handleAdd(dataOfProduct)}
              className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition cursor-pointer"
            >
              Add to Cart
            </button>
          </div>

          <div className="border rounded-xl p-4 space-y-3 mt-6 w-fit">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🚚</span>
              <div>
                <p className="font-semibold">Free Delivery</p>
                <p className="text-gray-500 text-sm">
                  Enter your postal code for Delivery Availability
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-2xl">↩️</span>
              <div>
                <p className="font-semibold">Return Delivery</p>
                <p className="text-gray-500 text-sm">
                  Free 30 Days Delivery Returns. Details
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
