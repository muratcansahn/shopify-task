import {
  Wrapper,
  Left,
  Right,
  TextSection,
  Title,
  Description,
  Link,
  Image,
} from "./styles";
import Carousel from "../Carousel";
const SelectedSection = () => {
  return (
    <Wrapper>
      <Left>
        <Image src="../../assets/images/bg.jpg" alt="selected-section" />
      </Left>
      <Right>
        <TextSection>
          <Title>
            Everyday items, we have something to suit every occasion.
          </Title>
          <Description>
            At suspendisse augue lectus arcu, accumsan ut sit posuere vitae sit
            tincidunt semper eu proin leo gravida cursus.
          </Description>
          <Link>Shop All Everyday Items</Link>
        </TextSection>
        <Carousel />
      </Right>
    </Wrapper>
  );
};

export default SelectedSection;
