import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import HomeCarousel from "../../components/HomeCarousel";

const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-124px)]">
        <HomeCarousel></HomeCarousel>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Home;
