import { Outlet } from "react-router";
import NavBar from "../components/navbar/NavBar";
import Container from "../components/container/Container";
import Footer from "../components/footer/Footer";
export default function RootLayout() {
  return (
    <>
      <NavBar />
      <Container>
        <Outlet />
      </Container>
      <Footer/>
    </>
  );
}
