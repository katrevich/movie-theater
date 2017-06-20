import React from 'react';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import styled from 'styled-components';

const RoomsListContainter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: strech;
  margin: 0 0 0 -2%;
  flex-wrap: wrap;
`

const RoomsListItemContainer = styled.div`
  margin: 0 0 2% 2%;
  width: 48%;
`

const RoomsList = props => (
  <RoomsListContainter>
    <RoomsListItemContainer>
      <Card>
        <CardTitle title="Room name 1" subtitle="small" />
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
        <CardActions>
          <FlatButton primary={true} label="Edit" />
          <FlatButton secondary={true} label="Delete" />
        </CardActions>
      </Card>
    </RoomsListItemContainer>
    <RoomsListItemContainer>
      <Card>
        <CardTitle title="Room name 2" subtitle="small" />
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
        <CardActions>
          <FlatButton primary={true} label="Edit" />
          <FlatButton secondary={true} label="Delete" />
        </CardActions>
      </Card>
    </RoomsListItemContainer>
    <RoomsListItemContainer>
      <Card>
        <CardTitle title="Room name 3" subtitle="small" />
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
        <CardActions>
          <FlatButton primary={true} label="Edit" />
          <FlatButton secondary={true} label="Delete" />
        </CardActions>
      </Card>
    </RoomsListItemContainer>
  </RoomsListContainter>
)

export default RoomsList;
