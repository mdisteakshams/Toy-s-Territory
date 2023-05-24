import Carousel from "../Carousel/Carousel";
import Gallery from "../Gallery/Gallery";
import Map from "../Map/Map";
import ShopByCategories from "../ShopByCategories/ShopByCategories";

const Home = () => {
  return (
    <div>
      <Carousel></Carousel>
      <Gallery></Gallery>
      <ShopByCategories></ShopByCategories>
      <Map></Map>
    </div>
  );
};

export default Home;
