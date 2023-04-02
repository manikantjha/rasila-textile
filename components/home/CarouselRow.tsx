import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import ProductCard from "./productsRow/ProductCard";
import { objProducts } from "@/data/data";

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className="bg-[rgba(0,0,0,0.35)] rounded-full p-1 cursor-pointer"
      style={{
        ...style,
        display: "block",
        position: "absolute",
        top: "50%",
        right: -5,
        transform: "translate(0, -50%)",
        zIndex: 100,
      }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5 fill-white"
      >
        <path
          fillRule="evenodd"
          d="M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className="bg-[rgba(0,0,0,0.35)] rounded-full p-1 cursor-pointer"
      style={{
        ...style,
        display: "block",
        position: "absolute",
        top: "50%",
        left: -5,
        transform: "translate(0, -50%)",
        zIndex: 100,
      }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5 fill-white"
      >
        <path
          fillRule="evenodd"
          d="M20.25 12a.75.75 0 01-.75.75H6.31l5.47 5.47a.75.75 0 11-1.06 1.06l-6.75-6.75a.75.75 0 010-1.06l6.75-6.75a.75.75 0 111.06 1.06l-5.47 5.47H19.5a.75.75 0 01.75.75z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
}

export default function CarouselRow() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
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
    <div className="bg-gray-100 h-[65vh] md:h-[50vh] p-2 flex items-center justify-center">
      <div className="h-fit container mx-auto">
        <Slider {...settings}>
          {[
            ...objProducts.electricalContactBars,
            ...objProducts.electroMechanicWarpStopMotions,
            ...objProducts.serratedBars,
            ...objProducts.dropPins,
          ].map((item, index) => (
            <div key={index} className="h-full w-full px-2">
              <ProductCard objProduct={item} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
