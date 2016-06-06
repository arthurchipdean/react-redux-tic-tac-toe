import { connect } from 'react-redux';
import React, { Component } from 'react';
import {
    playerMoved,
    startGame
} from '../actions/index';

import App from '../components/App';

const mapStateToProps = (state) => {
    let message = 'Click below to start a new game',
        gameWon = state.gameState.game_won;
    if(gameWon !== false) {
        message = gameWon + ' has won the game!';
    }
    return {
        board: state.gameState.game_state,
        gameStarted: state.gameState.game_started,
        message: message
    }
};

const mapDispatchtoProps = (dispatch) => {
    return {
        onBoardClick: (e)  => {
            dispatch(playerMoved(e));
        },
        onStartClick: (e) => {
            dispatch(startGame());
        }
    };
};


export default connect(
    mapStateToProps,
    mapDispatchtoProps
)(App);