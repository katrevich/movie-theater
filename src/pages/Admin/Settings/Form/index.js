import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import FormRow from '../../../../components/FormRow';
import FormButtons from '../../../../components/FormButtons';

class SettingsForm extends Component {

  submitHandler(e) {
    e.preventDefault();
    console.log(e.target);
  }

  render() {
    return (
      <form onSubmit={ this.submitHandler } className="form-wrap">
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
    )
  }
}

export default SettingsForm;
