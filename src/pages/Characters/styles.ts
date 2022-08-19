import { Box, FormControl, Select } from "@mui/material";
import { styled } from "@mui/system";

export const FilterControls = styled(FormControl)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  gap: theme.spacing(2),
  marginBottom: theme.spacing(3),
}));

export const StyledPaginationWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: theme.spacing(3, "auto"),
}));

export const StyledPageSizeSelect = styled(Select)(({ theme }) => ({
  width: 100,
}));
