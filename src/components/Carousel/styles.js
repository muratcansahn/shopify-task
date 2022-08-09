import styled from "styled-components";
export default styled.div`
  display: flex;
  width: 608px;
  overflow-x: scroll;
  overflow-y: hidden;
  position: relative;
  ::-webkit-scrollbar {
    display: none;
  }
  margin-left: 80px;
  scroll-behavior: smooth;
  @media (max-width: 390px) {
    width: 100%;
    padding-left: 24px;
    margin-top: 45px;
    margin-left: 0;
  }
`;
export const RightIcon = styled.img`
  padding-left: 11px;
  padding-right: 11px;
`;
export const IconWrapper = styled.div`
  position: sticky;
  border: 1px solid rgba(0, 0, 0, 0.1);
  left: 552px;
  top: 135px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  @media (max-width: 390px) {
    display: none;
  }
`;
