import React, { useState } from "react";
import { Button, Grid, GridColumn, Image } from "semantic-ui-react";
import ShowPrediction from "./ShowPrediction";

const Preview = ({ searchState }) => {
  const [predictedData, setPredictedData] = useState({
    Product: "",
    Probability: "",
  });

  const handlePredict = function () {
    if (searchState === "") {
      return;
    }

    console.log(searchState);
    const data = {
      ImageUrl: searchState,
    };
    const requesOptions = {
      method: "POST",
      Accept: "application/json",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
      mode: "cors",
    };

    fetch("http://localhost:5000/image/classify", requesOptions).then(
      (response) => {
        if (response.status !== 200) {
          setPredictedData({
            Product: "Sorry I am not sure!",
            Probability: 0,
          });
          console.log("Something went wrong!");
        } else {
          response.json().then((data) => {
            debugger;
            setPredictedData({
              Product: data[0].class,
              Probability: data[0].score,
            });
          });
        }
      }
    );
  };
  return (
    <Grid>
      <GridColumn width={10}>
        <h2>Image Preview Pane</h2>
        <Image src={searchState} size='massive' wrapped />
      </GridColumn>
      <GridColumn width={6}>
        <h2>Image Prediction Pane</h2>
        <Button className='predictImageBtn' onClick={handlePredict}>
          Predict Image
        </Button>
        <ShowPrediction predictedData={predictedData} />
      </GridColumn>
    </Grid>
  );
};
export default Preview;
