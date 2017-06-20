import React from 'react';
import RoomsList from './List';
import AddButton from '../../../components/AddButton';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FormRow from '../../../components/FormRow';
import FormButtons from '../../../components/FormButtons';

const Rooms = props => (
  <div>
    <h2>Rooms</h2>
    <RoomsList />
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

export default Rooms;
