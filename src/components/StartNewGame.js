import React, { PropTypes } from 'react';
import _ from 'underscore';

const StartNewGame = ({message,onStartClick}) => (
    <div className="jumbotron" key={_.uniqueId()}>
        <h1>Tic Tac Toe</h1>
        <p>{message}</p>
        <p><button onClick={onStartClick} className="btn btn-success btn-lg">New Game</button></p>
    </div>
);

const propTypes = {
    onStartClick: PropTypes.func.isRequired,
    message: PropTypes.string.isRequired
};
StartNewGame.propTypes = propTypes;

export default StartNewGame;