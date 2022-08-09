import { useState } from "react";
import CarouselCardStyles, {
  Image,
  Title,
  Bottom,
  Price,
  Color,
  ColorsWrapper,
} from "./styles";

const CarouselCard = ({ image, name }) => {
  return (
    <CarouselCardStyles>
      <Image src={image}></Image>
      <Title>{name}</Title>
      <Bottom>
        <Price>€33.95</Price>
        <Colors />
      </Bottom>
    </CarouselCardStyles>
  );
};

export default CarouselCard;
const Colors = () => {
  const [selected, setSelected] = useState(0);
  const colors = ["#99C3CC", "#CC9999", "#CB99CC", "#A6CC99"];
  return (
    <ColorsWrapper>
      {colors.map((color, i) => (
        <Color
          key={color}
          style={{ backgroundColor: color }}
          onClick={() => {
            setSelected(i);
          }}
          selected={selected === i}
        />
      ))}
    </ColorsWrapper>
  );
};
