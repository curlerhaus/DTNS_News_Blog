import "../App.css";
import CarouselFadeExample from "../components/carousel";
import CardTemplate from "../components/cards";
import Footer from "../components/footer";

function Home() {
  return (
    <>
      <div className="header">
        <img className="logo" src="./logo/logo-black.png" alt="DTNS Logo"></img>
        <h1>Your Worst Place for News</h1>
      </div>

      <CarouselFadeExample />
      <CardTemplate />
      <Footer />
    </>
  );
}

export default Home;
