import "./home.css";
import CarouselFadeExample from "../components/carousel";
import CardTemplate from "../components/cards";
import Footer from "../components/footer";
import Topnavbar from "./topnavbar";
import { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  const [posts, setPosts] = useState([]);
  // const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts");
      setPosts(res.data);
    };
    fetchPosts();
  }, []);

  return (
    <>
      <div className="header"></div>
      <Topnavbar />
      <CarouselFadeExample />
      <CardTemplate posts={posts} />
      <Footer />
    </>
  );
}

export default Home;
