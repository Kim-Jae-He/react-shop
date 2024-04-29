import * as React from "react";
import { HeaderBox, HeaderBtn, Inputs } from "../styles/header.styles";
import { Logo } from "../styles/main.styles";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import ToggleButton from "@mui/material/ToggleButton";
import { useState } from "react";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export const TopHeader = () => {
  const [alignment, setAlignment] = React.useState("justify");
  const handleAlignement = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <HeaderBox>
      <ToggleButtonGroup
        value={alignment}
        exclusive
        onChange={handleAlignement}
        aria-label="text alignment"
      >
        <ToggleButton value="justify" aria-label="justified">
          <FormatAlignJustifyIcon />
        </ToggleButton>
      </ToggleButtonGroup>
      <Logo>
        React Shop
        <HeaderBtn>패션</HeaderBtn>
        <HeaderBtn>액세서리</HeaderBtn>
        <HeaderBtn>디지털</HeaderBtn>
      </Logo>
    </HeaderBox>
  );
};

export default TopHeader;
