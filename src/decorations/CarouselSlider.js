import ImageSlider from "../components/ImageSlider";
import { SliderData } from "../components/SliderData";

function CarouselSlider() {
  return (
    <>
      <div className="mx-auto m-4">
        <ImageSlider slides={SliderData} />
      </div>
    </>
  );
}

export default CarouselSlider;
