import React from "react";
import { Grid, CardMedia, Stack } from "@mui/material";
import PrincipalInformacion from "../../components/principalInformation";
import Descripcion from "../Description";
const UserCard = ({ userApi }) => {
  console.log("🚀 ~ file: index.js ~ line 5 ~ UserCard ~ avatar_url", userApi);

  return (
    <>
      <Grid container spacing={2} columns={{ xs: 6, md: 12 }}>
        {userApi && (
          <Grid item xs={3}>
            <CardMedia
              component="img"
              alt="GitHub User"
              image={userApi?.avatar_url}
              sx={{
                width: "100%",
                height: "auto",
                borderRadius: "50%",
              }}
            />
          </Grid>
        )}
        <Grid item xs={9}>
          <Stack direction="column" spacing={1} sx={{ margin: "30px" }}>
            <PrincipalInformacion userState={userApi} />
            <Descripcion userState={userApi} />
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default UserCard;
