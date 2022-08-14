import { Paper, Stack, Typography } from "@mui/material";
import React from "react";

const PaperInformacion = ({ userState }) => {
  return (
    <>
      <Paper elevation={2} sx={{ margin: "20px" }}>
        <Stack
          direction="row"
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            margin: "10px",
          }}
        >
          <Stack>
            <Typography>Repost</Typography>
            <Typography>{userState?.public_repos}</Typography>
          </Stack>
          <Stack>
            <Typography> Followers</Typography>

            <Typography>{userState?.followers}</Typography>
          </Stack>
          <Stack>
            <Typography>Following</Typography>

            <Typography>{userState?.following}</Typography>
          </Stack>
        </Stack>
      </Paper>
    </>
  );
};

export default PaperInformacion;
