import React, { useState } from "react";
import { Header } from "semantic-ui-react";
import Preview from "./features/Preview";
import SearchBox from "./features/SearchBox";

const ImagePredictionDashBoard = () => {
  const [searchState, setSearchState] = useState("");
  return (
    <>
      <Header as='h1'>Image Classification Prediction Demo</Header>
      <SearchBox setSearchState={setSearchState} />
      <Preview searchState={searchState}></Preview>
    </>
  );
};

export default ImagePredictionDashBoard;
