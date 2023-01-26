import React from "react";
import {
  AppBar,
  Button,
  Container,
  IconButton,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { Search as SearchIcon, Menu as MenuIcon } from "@mui/icons-material/";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Fade from "@mui/material/Fade";

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
  color: "white",
  fontSize: "34px",
  cursor: "pointer",
});

function ScrollTop(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: false,
    threshold: 150,
  });
  return (
    <Fade in={trigger}>
      <Box role={"presentation"}>{children}</Box>
    </Fade>
  );
}

const NavbarTop = (props) => {
  return (
    <>
      <ScrollTop {...props}>
        <AppBar
          sx={{
            position: "fixed",
            top: "0px",
            width: "100%",
            backgroundColor: "black !important",
          }}
        >
          <Menu>
            <Typography
              flex={3}
              variant="h6"
              component={"div"}
              sx={{ marginLeft: 2 }}
            >
              Blogs App The one that is the one
            </Typography>
            <Box flex={1}>
              <Stack direction={"row"}>
                <MenuItem sx={{ color: "white", fontWeight: "bold" }}>
                  Login
                </MenuItem>
                <MenuItem
                  sx={{
                    color: "white",
                    backgroundColor: "#0049fb",
                    textAlign: "center",
                    fontWeight: "bold",
                    marginRight: "0px",
                    height: "50%",
                    marginTop: 2,
                    fontSize: "11px",
                    margin: "15.5px 2px 0px 4px",
                  }}
                >
                  Sign Up
                </MenuItem>
                <MenuItem
                  sx={{
                    color: "white",
                    backgroundColor: "green",
                    textAlign: "center",
                    fontWeight: "bold",
                    marginRight: "0px",
                    height: "50%",
                    marginTop: 2,
                    fontSize: "11px",
                  }}
                >
                  Create
                </MenuItem>
                <IconButton
                  size="small"
                  edge="start"
                  color="inherit"
                  sx={{ ml: 2 }}
                >
                  <SearchIcon sx={{ fontSize: 35, fontWeight: 200 }} />
                </IconButton>
                <IconButton size="small" edge="start" color="inherit">
                  <MenuIcon sx={{ fontSize: 39 }} />
                </IconButton>
              </Stack>
            </Box>
          </Menu>
        </AppBar>
      </ScrollTop>
    </>
  );
};

export default NavbarTop;
