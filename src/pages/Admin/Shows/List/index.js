import React from 'react';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import styled from 'styled-components';

const ShowsListContainter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: strech;
  margin: 0 0 0 -2%;
  flex-wrap: wrap;
`

const ShowsListItemContainer = styled.div`
  margin: 0 0 2% 2%;
  width: 48%;
`

const ShowsList = props => (
  <ShowsListContainter>
    <ShowsListItemContainer>
      <Card>
        <CardTitle title="Movie name 12/12/2017" subtitle="14:00" />
        <CardActions>
          <FlatButton primary={true} label="Edit" />
          <FlatButton secondary={true} label="Delete" />
        </CardActions>
      </Card>
    </ShowsListItemContainer>
    <ShowsListItemContainer>
      <Card>
        <CardTitle title="Movie name 12/12/2017" subtitle="14:00" />
        <CardActions>
          <FlatButton primary={true} label="Edit" />
          <FlatButton secondary={true} label="Delete" />
        </CardActions>
      </Card>
    </ShowsListItemContainer>
    <ShowsListItemContainer>
      <Card>
        <CardTitle title="Movie name 12/12/2017" subtitle="14:00" />
        <CardActions>
          <FlatButton primary={true} label="Edit" />
          <FlatButton secondary={true} label="Delete" />
        </CardActions>
      </Card>
    </ShowsListItemContainer>
  </ShowsListContainter>
)

export default ShowsList;
