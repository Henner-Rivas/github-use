import { Typography, Stack } from "@mui/material";
import React from "react";

const PrincipalInformacion = ({ userState }) => {
  return (
    <>
      {userState && (
        <>
          <Stack direction="row" sx={{ justifyContent: "space-between" }}>
            <Typography variant="h4">{userState.name} </Typography>
            <Typography variant="subtitle2">{userState.created_at} </Typography>
          </Stack>
          <Typography variant="caption">{userState.login} </Typography>
        </>
      )}
    </>
  );
};

export default PrincipalInformacion;
