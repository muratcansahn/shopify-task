import React from "react";
import CarouselCard from "../CarouselCard/";
import CarouselStyles, { RightIcon, IconWrapper } from "./styles";
const Carousel = () => {
  const next = () => {
    document.getElementById("carousel").scrollLeft += 230;
  };

  const items = [
    {
      id: 1,
      name: "Organic Skinny High Waist Jeans",
      image: " ../../assets/images/img-1.jpg",
    },
    {
      id: 2,
      name: "Organic Skinny High Waist Jeans",
      image: " ../../assets/images/img-2.jpg",
    },
    {
      id: 3,
      name: "Organic Skinny High Waist Jeans",
      image: " ../../assets/images/img-3.jpg",
    },
  ];

  return (
    <CarouselStyles id="carousel">
      <IconWrapper onClick={next}>
        <RightIcon src="../../assets/icons/chevron-right.svg" />
      </IconWrapper>

      {items.map((item) => (
        <CarouselCard key={item.id} image={item.image} name={item.name} />
      ))}
    </CarouselStyles>
  );
};

export default Carousel;
