import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 1440px;
  @media (max-width: 390px) {
    display: block;
    width: 100%;
  }
  overflow-x: hidden;
`;
export const Left = styled.div`
  width: 720px;
  height: 864px;
  @media (max-width: 390px) {
    width: 100%;
    height: 100%;
  }
`;
export const Right = styled.div`
  width: 720px;
  @media (max-width: 390px) {
    width: 100%;
  }
`;
export const Title = styled.h2`
  font-size: 31.25px;
  font-weight: 700;
  line-height: 40px;
  margin-top: 0;
  width: 430px;
  margin-bottom: 0;
  @font-face {
    font-family: "ITC Avant Garde Gothic Pro";
    src: url(../../assets/fonts/ITCAvantGardePro-Bold.otf);
  }
  font-family: "ITC Avant Garde Gothic Pro";
  cursor: default;
  @media (max-width: 390px) {
    width: 85%;
    font-size: 20px;
    line-height: 26px;
    letter-spacing: 0.4px;
    margin-bottom: 16px;
  }
`;
export const Description = styled.p`
  @font-face {
    font-family: "Avenir";
    src: url(../../assets/fonts/Avenir.ttc);
  }
  font-family: Avenir;
  color: #666666;
  width: 430px;
  margin-bottom: 32px;
  font-size: 16px;
  line-height: 160%;
  cursor: default;
  @media (max-width: 390px) {
    display: none;
  }
`;
export const Image = styled.img`
  width: 100%;
`;
export const Link = styled.a`
  font-family: Avenir;
  font-weight: 900;
  padding-bottom: 5px;
  font-size: 12.8px;
  border-bottom: 1px solid #000000;
  cursor: pointer;
  @media (max-width: 390px) {
    line-height: 17.8px;
    border-bottom: 1px solid #ffff;
  }
`;
export const TextSection = styled.div`
  margin-top: 96px;
  margin-left: 120px;
  margin-bottom: 75px;
  @media (max-width: 390px) {
    margin-left: 0;
    margin-bottom: 0;
    margin-top: -202px;
    margin-left: 24px;
    color: #ffffff;
  }
`;
