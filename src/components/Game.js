import React from 'react';
import Board from './Board.js';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export default class Game extends React.Component {

  handleClick(i) {
    const { dispatch } = this.props;
    let stepNum = this.props.stepNumber;
    console.log(stepNum);
    const action = {
      type: 'OLD_STEP',
      stepNumber: stepNum,
    }
    dispatch(action);
    const history = this.props.history;
    const current = history[stepNum];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]){
      return;
    }
    squares[i] = this.props.xIsNext ? 'X' : 'O';
    const action2 = {
      type: 'ADD_MOVE',
      index: i,
      value: squares[i],
    }
    dispatch(action2);
    const action3 = {
      type: 'SWITCH_TURN',
    }
    dispatch(action3);
    let step = (this.props.stepNumber + 1)
    const action4 = {
      type: 'SET_STEP',
      step: step
    }
    dispatch(action4);
  }

  jumpTo(step){
    console.log(step);
    const { dispatch } = this.props;
    const action = {
      type: 'VERIFY_TURN',
      stepNumber: step
    }
    dispatch(action);
    const action2 = {
      type: 'SET_STEP',
      step: step
    }
    dispatch(action2);
  }

  render() {
    const history = this.props.history;
    const current = history[this.props.stepNumber];
    const winner = calculateWinner(current.squares);
    console.log(current.squares);
    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move:
        'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if(winner){
      status = 'Winner' + winner;
    } else {
      status = 'Next player:' + (this.props.xIsNext ? 'X' : 'O');
    }
    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

Game.propTypes ={
  history: PropTypes.array,
  xIsNext: PropTypes.bool,
  stepNumber: PropTypes.number,
};

const mapStateToProps = state => {
  return {
    history: state.history,
    xIsNext: state.xIsNext,
    stepNumber: state.stepNumber,
  }
}

Game = connect(mapStateToProps)(Game);