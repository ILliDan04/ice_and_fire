import {
  Box,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Pagination,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import React, { useDeferredValue, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { APP_LINKS } from "../../config/appRoutes";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import {
  charactersSelector,
  charactersStatusSelector,
  totalPagesSelector,
} from "../../redux/characters/selectors";
import { getCharactersThunk } from "../../redux/characters/thunks";
import { Gender, GenderFilter } from "../../types/Character";
import { STATUSES } from "../../types/statuses";
import { getAliveStatus } from "../../utils/getAliveStatus";
import {
  FilterControls,
  StyledPageSizeSelect,
  StyledPaginationWrapper,
} from "./styles";

const Characters: React.FC = () => {
  const dispatch = useAppDispatch();
  const characters = useAppSelector(charactersSelector);
  const totalPages = useAppSelector(totalPagesSelector);
  const isRequestLoading = useAppSelector(charactersStatusSelector);

  const [pageFilter, setPageFilter] = useState(1);
  const [pageSizeFilter, setPageSizeFilter] = useState(25);
  const [genderFilter, setGenderFilter] = useState(GenderFilter.Any);
  const [cultureFilter, setCultureFilter] = useState("");
  const defferedCultureFilter = useDeferredValue(cultureFilter);

  useEffect(() => {
    dispatch(
      getCharactersThunk({
        page: pageFilter,
        pageSize: pageSizeFilter,
        gender: genderFilter,
        culture: defferedCultureFilter,
      })
    );
  }, [
    defferedCultureFilter,
    dispatch,
    genderFilter,
    pageFilter,
    pageSizeFilter,
  ]);

  const renderCharacters = useMemo(() => {
    return characters.map((character, index) => {
      const allNames = [character.name, ...character.aliases]
        .filter(Boolean)
        .join(", ");

      const aliveStatus = getAliveStatus(character.born, character.died);

      const gender = Gender[character.gender];
      const culture = character.culture || "Unknown";
      const allegiances = character.allegiances.map((allegiance, index) => {
        const parsedData = allegiance.split("/");
        const houseID = parsedData[parsedData.length - 1];
        return (
          <span key={index}>
            <Link to={APP_LINKS.HOUSE(houseID)}>{houseID}</Link>
            {index !== character.allegiances.length - 1 && ", "}
          </span>
        );
      });
      return (
        <TableRow key={index}>
          <TableCell>{allNames}</TableCell>
          <TableCell>{aliveStatus}</TableCell>
          <TableCell>{gender}</TableCell>
          <TableCell>{culture}</TableCell>
          <TableCell>
            {allegiances.length ? allegiances : "No allegiances"}
          </TableCell>
        </TableRow>
      );
    });
  }, [characters]);

  return (
    <Container>
      <Header title="Characters" />
      <Box justifyContent="space-between" marginTop={4}>
        <Typography variant="h6" marginBottom={2}>
          Filter
        </Typography>
        <FilterControls>
          <InputLabel id="gender-label">Gender</InputLabel>
          <Select
            labelId="gender-label"
            value={genderFilter}
            label="Gender"
            onChange={(event) => {
              setGenderFilter(event.target.value as GenderFilter);
              setPageFilter(1);
            }}
          >
            <MenuItem value={GenderFilter.Any}>Any</MenuItem>
            <MenuItem value={GenderFilter.Male}>Male</MenuItem>
            <MenuItem value={GenderFilter.Female}>Female</MenuItem>
          </Select>
          <TextField
            label="Culture"
            variant="outlined"
            onChange={(event) => {
              setCultureFilter(event.target.value);
              setPageFilter(1);
            }}
          />
        </FilterControls>
      </Box>
      {isRequestLoading === STATUSES.PENDING ? (
        "Loading..."
      ) : characters.length ? (
        <>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Character</TableCell>
                  <TableCell>Alive</TableCell>
                  <TableCell>Gender</TableCell>
                  <TableCell>Culture</TableCell>
                  <TableCell>Allegiances</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>{renderCharacters}</TableBody>
            </Table>
          </TableContainer>
          <StyledPaginationWrapper>
            <Pagination
              count={totalPages}
              page={pageFilter}
              showLastButton
              showFirstButton
              color="primary"
              onChange={(_, p) => setPageFilter(p)}
            />
            <FormControl>
              <InputLabel id="page-size-label">Page size</InputLabel>
              <StyledPageSizeSelect
                labelId="page-size-label"
                value={pageSizeFilter}
                label="Page size"
                onChange={(event) => {
                  setPageSizeFilter(Number(event.target.value));
                  setPageFilter(1);
                }}
              >
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={25}>25</MenuItem>
                <MenuItem value={50}>50</MenuItem>
              </StyledPageSizeSelect>
            </FormControl>
          </StyledPaginationWrapper>
        </>
      ) : (
        <Box marginTop={3}>
          <Typography variant="h6" align="center">
            Characters not found :(
          </Typography>
        </Box>
      )}
    </Container>
  );
};

export default Characters;
