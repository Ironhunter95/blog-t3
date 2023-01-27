import React from "react";
import { Container, Grid, Fab } from "@mui/material";
import Card from "./Card";

const Hero = () => {
  return (
    <Container>
      <Grid container>
        <Grid item xs={12} mb={2} mt={2}>
          <Card
            direction={"row"}
            imgWidth={566}
            imgHeight={400}
            myColor={"black"}
            linkSrc="/"
            fontSize={"40px"}
            imgSrc="https://cdn.pixabay.com/photo/2023/01/12/15/22/taro-7714366_960_720.jpg"
            heading={"Example"}
            title={"The Ultimate Guide"}
            dsc={"Description of the card"}
            author={"Mohammed"}
            EditButton={
              <Fab
                size="small"
                variant="extended"
                color="success"
                aria-label="edit"
              >
                Edit
              </Fab>
            }
          />
        </Grid>
        <Grid item md={3} spacing={1}>
          <Card
            direction={"column"}
            imgWidth={280}
            imgHeight={220}
            myColor={"black"}
            linkSrc="/"
            fontSize={"18px"}
            imgSrc="https://cdn.pixabay.com/photo/2020/12/13/16/37/woman-5828787_960_720.jpg"
            title={"The Ultimate Guide"}
            dsc={"Description of the card"}
            EditButton={
              <Fab
                size="small"
                variant="extended"
                color="success"
                aria-label="edit"
              >
                Edit
              </Fab>
            }
          />
        </Grid>
        <Grid item md={3} spacing={1}>
          <Card
            direction={"column"}
            imgWidth={280}
            imgHeight={220}
            myColor={"black"}
            linkSrc="/"
            fontSize={"18px"}
            imgSrc="https://cdn.pixabay.com/photo/2020/12/13/16/37/woman-5828787_960_720.jpg"
            title={"The Ultimate Guide"}
            dsc={"Description of the card"}
            EditButton={
              <Fab
                size="small"
                variant="extended"
                color="success"
                aria-label="edit"
              >
                Edit
              </Fab>
            }
          />
        </Grid>
        <Grid item md={3} spacing={1}>
          <Card
            direction={"column"}
            imgWidth={280}
            imgHeight={220}
            myColor={"black"}
            linkSrc="/"
            fontSize={"18px"}
            imgSrc="https://cdn.pixabay.com/photo/2020/12/13/16/37/woman-5828787_960_720.jpg"
            title={"The Ultimate Guide"}
            dsc={"Description of the card"}
            EditButton={
              <Fab
                size="small"
                variant="extended"
                color="success"
                aria-label="edit"
              >
                Edit
              </Fab>
            }
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Hero;
