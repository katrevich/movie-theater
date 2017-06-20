import React from 'react';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import styled from 'styled-components';

const MoviesListContainter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: strech;
  margin: 0 0 0 -2%;
  flex-wrap: wrap;
`

const MoviesListItemContainer = styled.div`
  margin: 0 0 2% 2%;
  width: 48%;
`

const MoviesList = props => (
  <MoviesListContainter>
    <MoviesListItemContainer>
      <Card>
        <CardTitle title="Movie name 1" />
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
    </MoviesListItemContainer>
    <MoviesListItemContainer>
      <Card>
        <CardTitle title="Movie name 2" />
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
    </MoviesListItemContainer>
    <MoviesListItemContainer>
      <Card>
        <CardTitle title="Movie name 3" />
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
    </MoviesListItemContainer>
  </MoviesListContainter>
)

export default MoviesList;
