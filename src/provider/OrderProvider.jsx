import { useState, useEffect } from "react";
import { OrderContext } from "../context";

const OrderProvider = ({ children }) => {
  const [orderDetails, setOrderDetails] = useState(() => {
    try {
      const saved = localStorage.getItem("orderDetails");
      const parsed = saved ? JSON.parse(saved) : [];
      return Array.isArray(parsed) ? parsed : []; 
    } catch (err) {
      console.error("Failed to parse orderDetails from localStorage:", err);
      return [];
    }
  });
console.log(orderDetails);

  useEffect(() => {
    localStorage.setItem("orderDetails", JSON.stringify(orderDetails));
  }, [orderDetails]);

  return (
    <OrderContext.Provider value={{ orderDetails, setOrderDetails }}>
      {children}
    </OrderContext.Provider>
  );
};

export default OrderProvider;
