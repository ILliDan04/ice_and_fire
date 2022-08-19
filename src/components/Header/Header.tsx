import { Divider, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import ArrowBack from "../../icons/ArrowBack";
import { StyledHeaderWrapper } from "./styles";

export type Props = {
  title: string;
  goesBack?: boolean;
};

const Header: React.FC<Props> = ({ title, goesBack = false }) => {
  const navigate = useNavigate();

  return (
    <>
      <StyledHeaderWrapper>
        {goesBack && <ArrowBack onClick={() => navigate(-1)} />}
        <Typography variant="h3" marginLeft={goesBack ? 2 : 0}>
          {title}
        </Typography>
      </StyledHeaderWrapper>
      <Divider />
    </>
  );
};

export default Header;
