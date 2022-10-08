import TopNavBar from "./topnavbar";
import Footer from "./footer";

export default function About() {
  return (
    <div className="aboutpage">
      <TopNavBar />
      <h1 style={{ "text-align": "center" }}>Our Team</h1>
      <h2>Joel Dietz</h2>
      <p>Bio</p>
      <h2>Meng Thao</h2>
      <p>Bio</p>
      <h2>Marceilla Norman</h2>
      <p>Bio</p>
      <Footer />
    </div>
  );
}
