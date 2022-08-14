import {
  LanguageOutlined,
  LocationCitySharp,
  Twitter,
  BusinessCenterOutlined,
} from "@mui/icons-material";
import { Typography, Grid, Stack } from "@mui/material";
import React from "react";

const LocationInformacion = ({ userState }) => {
  return (
    <>
      <Grid container spacing={2} sx={{ flexDirection: "row" }}>
        <Grid item xs={6}>
          <Stack direction={"row"} spacing={2}>
            <LocationCitySharp />
            <Typography>{userState?.location || "Not Available"} </Typography>
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <Stack direction={"row"} spacing={2}>
            <Twitter />
            {userState?.twitter_username ? (
              <Typography>
                {" "}
                {"@"}
                {userState.twitter_username}
              </Typography>
            ) : (
              <Typography> Not Available</Typography>
            )}
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <Stack direction={"row"} spacing={2}>
            <LanguageOutlined />
            <a target="_blank" href={`https://${userState?.blog}`}>
              <Typography>{userState?.blog ?? "Not Available"} </Typography>
            </a>
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <Stack direction={"row"} spacing={2}>
            <BusinessCenterOutlined />
            <Typography>{userState?.company ?? "Not Available"} </Typography>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default LocationInformacion;
