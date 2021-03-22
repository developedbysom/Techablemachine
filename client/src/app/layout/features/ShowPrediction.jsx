import React from "react";
import { Segment, Item } from "semantic-ui-react";
const ShowPrediction = ({ predictedData }) => {
  return (
    <Segment className='item-predict'>
      <Item.Group>
        <Item>
          <Item.Image size='tiny' circular src='' />
          <Item.Content>
            <Item.Header content={predictedData.Product} />
            <Item.Description>
              Probability: {predictedData.Probability * 100} %
            </Item.Description>
          </Item.Content>
        </Item>
      </Item.Group>
    </Segment>
  );
};

export default ShowPrediction;
