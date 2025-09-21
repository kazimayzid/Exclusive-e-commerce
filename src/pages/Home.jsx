import  Container  from "../components/container/Container";
import Banner from "../components/banner/banner";
import FlashSales from "../components/flashsales/FlashSales";

export default function Home() {
  return (
    <>
      <Container>
        <Banner />
        <FlashSales />
      </Container>
    </>
  );
}
