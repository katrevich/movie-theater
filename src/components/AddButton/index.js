import React, { Component } from 'react';
import styled from 'styled-components';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

const AddButtonContainer = styled.div`
  position: fixed;
  right: 30px;
  bottom: 50px;
`

class AddButton extends Component {

  state = {
    open: false
  }

  openDialog = () => {
    this.setState({open: true})
  }

  closeDialog = () => {
    this.setState({open: false})
  }

  render() {
    return (
      <AddButtonContainer>
        <FloatingActionButton onClick={this.openDialog}>
          <ContentAdd />
        </FloatingActionButton>
        <Dialog
          modal={false}
          open={this.state.open}
          onRequestClose={this.closeDialog}>
          {this.props.children}
        </Dialog>
      </AddButtonContainer>
    )
  }
}

export default AddButton;
