import list from "../../public/list.json";
import Slider from "react-slick";
import Card from "./Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function FreeBook() {
  const filteredBook = list.filter((data) => data.category === "free");

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-screen-2xl mx-auto md:px-4">
      <div>
        <h1 className="font-semibold text-xl pb-2">Free offered books</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eaque
          explicabo nemo iste dicta magnam cum minus provident repudiandae
          impedit.
        </p>
      </div>

      <div className="">
        <Slider {...settings}>
          {filteredBook.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default FreeBook;
