import React, { useState, useEffect } from "react";
import { Container } from "@mui/material";
import Search from "./components/search";
import { get_user } from "./services/get_user";
import UserCard from "./containers/userCard";

const App = () => {
  const [user, setUser] = useState("octocat");
  const [userInput, setUserInput] = useState(user);
  const [userApi, setUserApi] = useState();
  const [notFound, setNotFound] = useState(false);

  async function getUserGithub(userInput) {
    const userGithub = await get_user(userInput);

    if (userGithub.message == "Not Found") {
      setUserInput("octocat");
      setNotFound(true);
    } else {
      setTimeout(() => {
        setNotFound(false);
      }, 1000);
      setUserApi(userGithub);
    }
  }
  useEffect(async () => {
    await getUserGithub(userInput);
  }, [userInput]);
  return (
    <Container
      sx={{
        background: "whitesmoke",
        width: "80vw",
        marginTop: "40px",
        displey: "flex",
        flexDireccion: "column",
        alignItems: "center",
        borderRadius: "5px",
      }}
    >
      <Search setInputUser={setUserInput} userInput={userInput} />
      <UserCard userApi={userApi} notFound={notFound} />
    </Container>
  );
};

export default App;
