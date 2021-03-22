import React, { useState } from "react";
import { Grid, GridColumn, Input, Label } from "semantic-ui-react";

const SearchBox = ({ setSearchState }) => {
  const [inputUrl, setInputUrl] = useState("");

  const handleChange = function (e) {
    setSearchState(e.target.value);
    setInputUrl(e.target.value);
  };
  const handleClear = function () {};
  return (
    <Grid>
      <GridColumn width={16}>
        <Input
          fluid
          value={inputUrl}
          icon='search'
          iconPosition='left'
          className='search-bar'
          placeholder='search....'
          onChange={handleChange.bind(this)}
          action={{
            icon: "delete",
            onClick: (event, data) => {
              handleClear(event, data);
            },
          }}
        />

        <Label pointing className='pointedLabel'>
          Enter Image URL{" "}
        </Label>
      </GridColumn>
    </Grid>
  );
};

export default SearchBox;
