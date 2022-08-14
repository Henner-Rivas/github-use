import { Stack, Typography } from "@mui/material";
import React from "react";
import LocationInformacion from "../../components/LocationInformacion";
import PaperInformacion from "../../components/PaperInformation";

const Descrition = ({ userState }) => {
  return (
    <>
      <Stack>
        <Typography variant="body1">
          {userState?.bio ??
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dolore magni ipsum fugit, saepe doloribus tempora. Earum sunt molestiae enim harum incidunt, praesentium quasi magnam ullam odit culpa natus temporibus."}
        </Typography>
        <PaperInformacion userState={userState} />
        <LocationInformacion userState={userState} />
      </Stack>
    </>
  );
};

export default Descrition;
