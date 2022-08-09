import styled from "styled-components";

export default styled.div`
  width: 230px;
  margin-right: 32px;
  height: 364px;
  @media (max-width: 390px) {
    width: 200px;
    margin-right: 18px;
  }
`;
export const Image = styled.img`
  width: 230px;
  height: 310px;
  cursor: pointer;
  @media (max-width: 390px) {
    width: 150px;
    height: 200px;
  }
`;
export const Title = styled.h5`
  margin-top: 12px;
  margin-bottom: 4px;
  font-family: "Avenir";
  font-size: 12.8px;
  font-weight: 400;
`;
export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 390px) {
    flex-direction: column;
  }
`;
export const Price = styled.p`
  margin: 0;
`;
export const ColorsWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 72px;
  justify-content: space-between;
  @media (max-width: 390px) {
    margin-top: 8px;
  }
`;
export const Color = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 1px solid #ffffff;
  outline: ${(props) => (props.selected ? "1px solid #000000" : "none")};
  cursor: pointer;
`;
