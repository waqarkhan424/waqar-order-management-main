import React from "react";
import { Grid, Paper } from "@mui/material";
const MealCard = (props) => {
  const { name, img, desc, price } = props;
  return (
    <article>
      <Paper
        sx={{
          width: "70%",
          margin: "auto",
          borderRadius: "15px",
          marginBottom: "20px",
        }}
      >
        <Grid container>
          <Grid item xs={9} p={2}>
            <h4>{name}</h4>
            <p>{desc}</p>
            <h4>
              {price.toLocaleString("en-PK", {
                style: "currency",
                currency: "PKR",
                minimumFractionDigits: 0,
              })}
            </h4>
          </Grid>
          <Grid item xs={3} p={2}>
            <img src={img} />
          </Grid>
        </Grid>
      </Paper>
    </article>
  );
};

export default MealCard;
