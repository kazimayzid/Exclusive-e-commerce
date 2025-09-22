import { products } from "../productData/products";
export default function ProductCard() {
  const flashSaleProducts = products.filter(
    (items) => items.status === "flashSale"
  );
  console.log(flashSaleProducts);

  return (
    <>
      <div className="flex gap-x-[30px] overflow-hidden">
        {flashSaleProducts.map((item, i) => (
          <div key={i}>
            <div className="bg-[#F5F5F5] w-[270px] h-[250px] flex items-center justify-center ">
              <img src={item.image} alt={item.title} />
            </div>
            <div></div>
          </div>
        ))}
      </div>
    </>
  );
}
