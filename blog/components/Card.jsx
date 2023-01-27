import React from "react";
import {
  Stack,
  Typography,
  Box,
  Modal,
  TextField,
  Tabs,
  Tab,
  styled,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";

const TextContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});
const StyledLink = styled(Box)(({ fontSize, myColor }) => ({
  fontSize: fontSize,
  color: myColor || "black",
  fontFamily: "soirce-serif-pro, Source Serif Pro",
  fontWeight: "bold",
  cursor: "pointer",
  lineHeight: 1,
  ":hover": {
    textDecoration: "underline",
  },
}));
const Card = (props) => {
  return (
    <Stack sx={{ cursor: "pointer" }} direction={props.direction}>
      <Box sx={{ marginRight: 12 }}>
        <Box sx={{ marginBottom: -4.5 }}>{props.EditButton}</Box>
        <Link href={props.linkSrc}>
          <Box
            height={props.imgHeight}
            width={props.imgWidth}
            sx={{ position: "relative" }}
          >
            <Image
              component="img"
              src={props.imgSrc}
              alt="Picture of the post"
              fill
            />
          </Box>
        </Link>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextContainer>
          <Typography
            variant="h7"
            sx={{
              borderBttom: "2px solid ",
              fontWeight: 900,
              textTransform: "uppercase",
              width: "fit-content",
              marginBottom: "15px",
            }}
          >
            {props.header}
          </Typography>
          <StyledLink fontSize={props.fontSize}>
            <Link href={props.linkSrc}>{props.title}</Link>
          </StyledLink>
          <Box>{props.dsc}</Box>
          <Typography variant="h6" fontWeight={900}>
            {props.author}
          </Typography>
        </TextContainer>
      </Box>
    </Stack>
  );
};

export default Card;
