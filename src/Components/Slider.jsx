import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import a1 from "../Pages/pic/a1.png";
import a2 from "../Pages/pic/a2.png";
import a3 from "../Pages/pic/a3.png";

// const imgs = [a1, a2, a3];

export default function SimpleSlider() {
  const imgs = [a1, a2, a3];
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <Slider {...settings} className="w-1/2">
      {imgs.map((item, index) => {
        return (
          <div key={index}>
            <img src={item} alt="img" className="w-[500px] h-[300px] mx-auto object-cover" />
          </div>
        );
      })}
      {/* <div>
        <h3 className="text-center">1</h3>
      </div>
      <div>
        <h3 className="text-center">2</h3>
      </div>
      <div>
        <h3 className="text-center">3</h3>
      </div> */}
    </Slider>
  );
}
