import React, { Component } from 'react';
import styled from 'styled-components';

const SeatsWrap = styled.div`
  max-width: 700px;
  margin: 50px auto;
  border: 1px solid #efefef;
  padding:0 0 20px;

  .row{
    font-size: 0;
  }

  .screen{
    border-top: 2px solid #5495ff;
    height: 20px;
    border-radius: 50%;
    margin-bottom: 70px;
    margin: 0 30px;
  }
`;

const Seat = styled.div`
  width: 20px;
  height: 40px;
  border:  ${(props) => props.status === 'selected' ? '1px solid #e5f774' : '1px solid #ddd'};
  border-radius: 2px;
  display: inline-block;
  vartical-align: top;
  margin: 2px;
  cursor: pointer;
  background: ${(props) => props.status === 'selected' ? '#e5f774' : 'fff'};

  &:hover{
    background: #5495ff;
    border-color: #5495ff;
  }
`;

const SelectedSeats = styled.div`
  margin: 50px auto;
  text-align: center;

  span{

    + span:before{
      content: '|';
      margin: 0 5px;
    }
  }
`;

class Seats extends Component {

  render() {
    let { onSelect, seats, selected } = this.props;

    return (
      <SeatsWrap>
        <h1>Screen</h1>
        <div className="screen"></div>
        { seats.map((seat, i) => <Seat
          status={seat.status}
          key={i}
          onClick={() => onSelect(seat.row, seat.col) } />)}
        <SelectedSeats>
          { selected.map(seat => <span>{seat.row + ' - ' + seat.col}</span>) }
        </SelectedSeats>
        Total: { selected.reduce((total, seat) => total += seat.price, 0) }
      </SeatsWrap>
    );
  }
}

export default Seats;
