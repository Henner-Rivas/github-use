import { SearchSharp } from "@mui/icons-material";
import { TextField, Stack, IconButton } from "@mui/material";
import React, { useState } from "react";

const Search = ({ user, setInputUser }) => {
  const [valueSearch, setValueSearch] = useState("");

  function handleSubmit() {
    setInputUser(valueSearch);
  }
  function hanldeOnchageValue(e) {
    let value = e.target.value;
    setValueSearch(value);
  }
  return (
    <Stack
      direction="row"
      sx={{
        display: "flex",
        justifyContent: "center",
        margin: "15px 30px",
      }}
    >
      <TextField
        id="outlined-basic"
        variant="outlined"
        placeholder="Buscar usuario de GitHub"
        label="GiHub User"
        size="small"
        value={valueSearch}
        onChange={hanldeOnchageValue}
        sx={{
          width: "90%",
          marginTop: "30px  ",
        }}
      />
      <IconButton
        onClick={handleSubmit}
        size="small"
        sx={{
          size: "small",

          marginTop: "30px  ",
          left: "-45px",
        }}
      >
        <SearchSharp></SearchSharp>
      </IconButton>
    </Stack>
  );
};

export default Search;
