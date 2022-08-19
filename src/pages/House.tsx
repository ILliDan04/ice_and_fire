import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { HouseInputText } from "../components/HouseInputText";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";
import { houseSelector, housesStatusSelector } from "../redux/houses/selectors";
import { getHouseThunk } from "../redux/houses/thunks";
import { STATUSES } from "../types/statuses";

const House: React.FC = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const house = useAppSelector(houseSelector);
  const housesStatus = useAppSelector(housesStatusSelector);

  useEffect(() => {
    dispatch(getHouseThunk(id!));
  }, [dispatch, id]);

  return (
    <Container>
      <Header title="House" goesBack />
      {housesStatus === STATUSES.REJECTED ? (
        <Box marginTop={3}>
          <Typography variant="h6" align="center">
            The house is not found :(
          </Typography>
        </Box>
      ) : (
        house && (
          <Grid container marginTop={4}>
            <Grid item xs={4} paddingX={2}>
              <HouseInputText value={house.name} label="Name" />
            </Grid>
            <Grid item xs={4} paddingX={2}>
              <HouseInputText value={house.region} label="Region" />
            </Grid>
            <Grid item xs={4} paddingX={2}>
              <HouseInputText value={house.coatOfArms} label="Coat of arms" />
            </Grid>
            <Grid item xs={4} paddingX={2}>
              <HouseInputText value={house.words} label="Words" />
            </Grid>
            <Grid item xs={4} paddingX={2}>
              <HouseInputText value={house.titles.join(", ")} label="Titles" />
            </Grid>
            <Grid item xs={4} paddingX={2}>
              <HouseInputText value={house.seats.join(", ")} label="Seats" />
            </Grid>
            <Grid item xs={4} paddingX={2}>
              <HouseInputText
                value={house.diedOut ? "Yes" : "No"}
                label="Has died out"
              />
            </Grid>
            <Grid item xs={4} paddingX={2}>
              <HouseInputText
                value={house.overlord ? "Yes" : "No"}
                label="Has overlord"
              />
            </Grid>
            <Grid item xs={4} paddingX={2}>
              <HouseInputText
                value={house.cadetBranches.length.toString()}
                label="Number of Cadet Branches"
              />
            </Grid>
          </Grid>
        )
      )}
    </Container>
  );
};

export default House;
