import { Box, Button, Grid, Stack } from "@mui/material";
import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../../firebase";

const Home = ({ router }) => {
  return (
    <>
      <h1>Home</h1>
      <Stack spacing={3} direction="row" alignItems="center">
        <Box border="1px solid #000" p="20px">
          <h1>Todo-list</h1>
        </Box>
        <Box border="1px solid #000" p="20px">
          <h1>Add Task</h1>
        </Box>
      </Stack>

      <Button
        variant="contained"
        onClick={() => signOut(auth).then(() => router.push("/login"))}
      >
        Logout
      </Button>
    </>
  );
};

export default Home;
