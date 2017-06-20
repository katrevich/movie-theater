import React from 'react';
import AddButton from '../../../components/AddButton';
import MoviesList from './List';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FormRow from '../../../components/FormRow';
import FormButtons from '../../../components/FormButtons';

const Movies = props => (
  <div>
    <h2>Movies</h2>
    <MoviesList />
    <AddButton>
      <form action="" className="form-wrap">
        <FormRow>
          <TextField
            fullWidth={true}
            hintText="Name"
            floatingLabelText="Movie theater name"
            floatingLabelFixed={true}
          />
        </FormRow>
        <FormRow>
          <TextField
            fullWidth={true}
            hintText="Description"
            floatingLabelText="Movie theater description"
            floatingLabelFixed={true}
            multiLine={true}
            rows={1}
            rowsMax={4}
          />
        </FormRow>
        <FormButtons>
          <RaisedButton type="submit" label="Submit" primary={true} />
        </FormButtons>
      </form>
    </AddButton>
  </div>
)

export default Movies;
