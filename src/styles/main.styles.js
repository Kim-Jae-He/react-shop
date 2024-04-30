import styled from "styled-components";

export const Logo = styled.h2`
  display: flex;
  font-size: 20px;
`;

export const Logo2 = styled.h2`
  display: flex;
  font-size: 20px;
`;

export const Modal = styled.ul`
  z-index: 10;
  --tw-translate-x: 20px; /* 수평 이동 값 설정 */
  transform: translateX(var(--tw-translate-x));
`;

export const NextnextImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

export const NextCarousel = styled.button`
  background-color: #fff;
  border: 0;
  border-radius: 50%;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05), 0 2px 6px 0 rgba(0, 0, 0, 0.05),
    0 4px 12px 0 rgba(0, 0, 0, 0.05);
  height: 40px;
  position: absolute;
  text-align: center;
  transform: translateY(-50%);
  transition: 0.2s;
  width: 40px;
  z-index: 10;
  top: calc(50%);
  right: -10px;
  cursor: pointer;
`;
