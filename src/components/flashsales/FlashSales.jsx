import ProductCard from "../../productCard/ProductCard";
import CountDown from "../countDown/CountDown";

export default function FlashSales() {
    return <>
     <div className="mt-[140px]">
        <div className="flex items-center gap-x-[16px]">
            <div className="w-[20px] h-[40px] bg-secondary rounded-[4px]"></div>
            <p className="font-poppins font-semibold text-[16px] leading-[20px] text-secondary">Today’s</p>
        </div>
        <div className="mt-[24px] flex gap-x-[87px] items-center">
            <h1 className="font-inter font-semibold text-[36px] leading-[48px] text-primary">Flash Sales</h1>
            <CountDown/>
        </div>
        <div><ProductCard/></div>
        <div></div>
     </div>
    </>
}