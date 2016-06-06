import { Provider } from 'react-redux'
import React, { PropTypes } from 'react';

import Board from '../components/Board/index';
import StartNewGame from '../components/StartNewGame';

const App  = ({board, onBoardClick, gameWon, onStartClick, gameStarted, message}) => (
    <div style={{ height: '100%' }}>
        {(() => {
            if(gameStarted) {
                return (
                    <Board
                        board={board}
                        onClick={onBoardClick}
                    />
                );
            }
            return (
                <StartNewGame
                    onStartClick={onStartClick}
                    message={message}
                />
            )
        })()}

    </div>
);
const propTypes = {
    board: PropTypes.arrayOf(
        PropTypes.arrayOf(
            PropTypes.string
        )
    ),
    onBoardClick: PropTypes.func.isRequired,
    onStartClick: PropTypes.func.isRequired,
    gameStarted: PropTypes.bool.isRequired,
    message: PropTypes.string.isRequired
};
App.propTypes = propTypes;

export default App;
