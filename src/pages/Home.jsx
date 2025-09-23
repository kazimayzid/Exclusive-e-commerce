import  Container  from "../components/container/Container";
import Banner from "../components/banner/banner";
import FlashSales from "../components/flashsales/FlashSales";
import Catagories from "../catagories/Catagories";
import BestSelling from "../bestSelling/bestSelling";

export default function Home() {
  return (
    <>
      <Container>
        <Banner />
        <FlashSales />
        <Catagories/>
        <BestSelling/>
      </Container>
    </>
  );
}
