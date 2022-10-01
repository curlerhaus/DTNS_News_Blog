import CardTemplate from ".//components/cards";
import "./App.css";
import CarouselFadeExample from ".//components/carousel";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <h1>DTNS News Blog</h1>

      <CarouselFadeExample />
      <CardTemplate />
      <Footer />
    </div>
  );
}

export default App;
