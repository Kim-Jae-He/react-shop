import * as React from "react";
import { HeaderBox, HeaderBtn, Inputs } from "../styles/header.styles";
import { Logo, Logo2,Modal } from "../styles/main.styles";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import ToggleButton from "@mui/material/ToggleButton";
import { useState } from "react";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { MyApp, ToggleColorMode } from "./toggledark";

export const TopHeader = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };
  return (
    <HeaderBox>
      <div>
            <img src="../img/svg/pngwing.com (1).png" alt="Toggle" onClick={toggleModal} style={{ cursor: 'pointer' }} />
            {isModalOpen && <Modal />} {/* 모달이 열려있을 때 모달 컴포넌트를 렌더링합니다. */}
        </div>

      <Logo>
        React Shop
        <HeaderBtn>패션</HeaderBtn>
        <HeaderBtn>액세서리</HeaderBtn>
        <HeaderBtn>디지털</HeaderBtn>
      </Logo>
      <Logo2>
        
          <ToggleColorMode />
        
        <input placeholder="검색"></input>
        <div>장바구니</div>
      </Logo2>
    </HeaderBox>
  );
};

export default TopHeader;
