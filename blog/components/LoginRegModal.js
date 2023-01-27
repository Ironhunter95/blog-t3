import * as React from "react";
import PropTypes from "prop-types";
import { Twitter, Facebook } from "@mui/icons-material/";

import {
  Typography,
  Box,
  Modal,
  TextField,
  Tabs,
  Tab,
  styled,
  Button,
} from "@mui/material";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const modalStyle = {
  position: "absolute",
  top: "48%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid white",
  boxShadow: 24,
  p: 4,
};
const StyledBox = styled(Box)({
  display: "flex",
  flexDirection: "row",
});

const SocialBox = styled(Box)(({ myBgColor }) => ({
  background: myBgColor,
  padding: 4,
  textAlign: "center",
  width: "60px",
  marginLeft: 1,
  cursor: "pointer",
}));

export default function LoginRegModal(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Login" {...a11yProps(0)} />
              <Tab label="Sign up" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <StyledBox
              sx={{
                backgroundImage:
                  "url(https://cdn.pixabay.com/photo/206/03/01/12/24/flowers-123)",
                backgroundSize: "cover",
              }}
            >
              <Box flex={1}>
                <Typography variant="h4">Welcome back!</Typography>
                <Typography variant="body1">
                  Lorem ipsun hello boys afdfsssssssssss
                  <br />
                  awdawdadwawdadwadw
                </Typography>
                <TextField
                  id="outlined"
                  label="Email Address"
                  variant="filled"
                  fullWidth
                />
                <TextField
                  id="pass"
                  label="Password"
                  variant="filled"
                  type="password"
                  fullWidth
                  sx={{ marginTop: 1, marginBottom: 1 }}
                />
                <Button
                  sx={{
                    textAlign: "center",
                    background: "blue",
                    color: "white",
                    width: 300,
                    padding: 1,
                  }}
                >
                  Login
                </Button>
                <Typography variant="body">
                  Or log in with your social media account
                </Typography>
                <StyledBox>
                  <SocialBox myBgColor={"lightBlue"}>
                    <Twitter sx={{ color: "white" }} />
                  </SocialBox>
                  <SocialBox myBgColor={"white"}>
                    <Facebook sx={{ color: "blue" }} />
                  </SocialBox>
                </StyledBox>
              </Box>
            </StyledBox>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <StyledBox
              sx={{
                backgroundImage:
                  "url(https://cdn.pixabay.com/photo/206/03/01/12/24/flowers-123)",
                backgroundSize: "cover",
              }}
            >
              <Box flex={1}>
                <Typography variant="h4">Become a Subscirber</Typography>
                <Typography variant="body1">
                  afasf;ajflkafnldkfndlknd,nsdklgnd/klgsn/gklnsg
                  <br />
                  Already Joined?
                </Typography>
                <TextField
                  id="outlined"
                  label="Email Address"
                  variant="filled"
                  fullWidth
                />
                <TextField
                  id="pass"
                  label="Password"
                  variant="filled"
                  type="password"
                  fullWidth
                  sx={{ marginTop: 1, marginBottom: 1 }}
                />
                <Button
                  sx={{
                    textAlign: "center",
                    background: "blue",
                    color: "white",
                    width: 300,
                    padding: 1,
                  }}
                >
                  Login
                </Button>
                <Typography variant="body">
                  Or log in with your social media account
                </Typography>
                <StyledBox>
                  <SocialBox myBgColor={"lightBlue"}>
                    <Twitter sx={{ color: "white" }} />
                  </SocialBox>
                  <SocialBox myBgColor={"white"}>
                    <Facebook sx={{ color: "blue" }} />
                  </SocialBox>
                </StyledBox>
              </Box>
            </StyledBox>
          </TabPanel>
        </Box>
      </Modal>
    </div>
  );
}
