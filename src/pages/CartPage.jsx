import { useContext, useEffect, useState } from "react";
import { OrderContext } from "../context";
import ProductDetails from "./ProductDetails";
import { X } from "lucide-react";
import CouponBox from "../components/couponBox/CouponBox";
import { Link } from "react-router";

export default function CartPage() {
  const { orderDetails, setOrderDetails } = useContext(OrderContext);

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

  // Order delete section ========================================

  const handleOrderDelete = (item) => {
    setOrderDetails(orderDetails.filter((order) => order._id !== item._id));
  };

  // Order increment and decrement section =======================
  const handleDecrement = (item) => {
    setOrderDetails(
      orderDetails.map((order) =>
        order._id === item._id
          ? {
              ...order,
              quantity: order.quantity - 1,
            }
          : order
      )
    );
  };
  const handleIncrement = (item) => {
    const updateOrder = orderDetails.map((order) =>
      order._id === item._id
        ? { ...order, quantity: order.quantity + 1 }
        : order
    );

    setOrderDetails(updateOrder);
  };

  // order summary section =======================
  const [amountSummary, setAmountSummary] = useState({
    subTotal: "",
    couponAmount: 0,
    total: "",
  });
  const subTotal = orderDetails.reduce(
    (acc, current) => acc + current.price * current.quantity,
    0
  );

  useEffect(() => {
    setAmountSummary({
      ...amountSummary,
      subTotal: subTotal,
      total: subTotal,
    });
  }, [orderDetails]);

  return (
    <>
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-4">
            {orderDetails.map((item) => (
              <div
                key={item._id}
                className="relative flex items-center justify-between bg-white p-4 rounded-xl shadow"
              >
                <X
                  onClick={() => handleOrderDelete(item)}
                  className="absolute text-red-400 border rounded-full top-1 left-1 cursor-pointer hover:bg-red-400 hover:text-white duration-300 scale-3d"
                  size={15}
                />
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded-md"
                  />
                  <div>
                    <h2 className="text-lg font-semibold">{item.name}</h2>
                    <p className="text-gray-600">
                      {item.price * item.quantity} tk
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleDecrement(item)}
                    className="px-3 py-1 bg-gray-200 rounded"
                    disabled={item.quantity === 1}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => handleIncrement(item)}
                    className="px-3 py-1 bg-gray-200 rounded"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white p-6 rounded-xl shadow space-y-4">
            <h2 className="text-xl font-semibold">Order Summary</h2>

            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-medium">${amountSummary.subTotal}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-600">Discount</span>
              <span className="font-medium">{amountSummary.couponAmount}</span>
            </div>

            <hr />

            <div className="flex justify-between text-lg font-semibold">
              <span>Total</span>
              <span>${amountSummary.total}</span>
            </div>

            <Link
              to={"/checkout"}
              className="w-full bg-secondary cursor-pointer text-white text-center block py-3 rounded-lg hover:bg-primary duration-300 transition"
            >
              Proceed to Checkout
            </Link>
          </div>
          <div className="col-start-3">
            <CouponBox />
          </div>
        </div>
      </div>
    </>
  );
}
