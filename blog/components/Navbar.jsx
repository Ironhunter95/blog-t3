import React from "react";
import {
  AppBar,
  Button,
  Container,
  IconButton,
  Stack,
  styled,
} from "@mui/material";
import { Box } from "@mui/system";
import { Search as SearchIcon, Menu as MenuIcon } from "@mui/icons-material/";

const Menu = styled(Box)({
  borderBottom: "1px solid black",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  paddingTop: "2px",
});

const MenuItem = styled(Button)({
  fontWeight: 900,
  fontSize: "12px",
  marginRight: "2px",
  color: "black",
});

const Logo = styled("div")({
  fontWeight: 900,
  color: "black",
  fontSize: "34px",
  cursor: "pointer",
});

const LogoDsc = styled(Box)({
  fontWeight: 600,
  color: "black",
  fontSize: "12px",
  cursor: "pointer",
});

const Navbar = () => {
  return (
    <>
      <Container>
        <AppBar position="static" color="transparent" elevation={0}>
          <Menu>
            <Stack direction={"row"} flex={1}>
              <Logo>Blogs App</Logo>
              <Stack direction={"column"} sx={{ marginLeft: 1, marginTop: 1 }}>
                <LogoDsc>The one that is</LogoDsc>
                <LogoDsc>the one</LogoDsc>
              </Stack>
            </Stack>
            <Stack direction={"row"} m={2}>
              <MenuItem sx={{ fontSize: "15px" }}>Books</MenuItem>
              <MenuItem sx={{ fontSize: "15px" }}>Videos</MenuItem>
              <MenuItem sx={{ fontSize: "15px" }}>Year in Review</MenuItem>
              <Button>Login</Button>
              <MenuItem
                sx={{
                  color: "#0049fb",
                  border: "1px solid #0049fb",
                  fontWeight: "bold",
                }}
              >
                Sign Up
              </MenuItem>
              <MenuItem
                sx={{
                  color: "green",
                  border: "1px solid green",
                  fontWeight: "bold",
                }}
              >
                Create
              </MenuItem>
            </Stack>
            <IconButton size="small" edge="start" color="inherit">
              <SearchIcon sx={{ fontSize: 35 }} />
            </IconButton>
            <IconButton size="small" edge="start" color="inherit">
              <MenuIcon sx={{ fontSize: 39 }} />
            </IconButton>
          </Menu>
        </AppBar>
      </Container>
    </>
  );
};

export default Navbar;
