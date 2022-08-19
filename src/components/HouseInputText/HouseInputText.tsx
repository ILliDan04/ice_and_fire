import { InputLabel } from "@mui/material";
import React from "react";
import { StyledTextField } from "./styles";

type Props = {
  value: string;
  label: string;
};

const HouseInputText: React.FC<Props> = ({ value, label }) => {
  return (
    <div>
      <InputLabel>{label}</InputLabel>
      <StyledTextField variant="outlined" disabled value={value} multiline />
    </div>
  );
};

export default HouseInputText;
