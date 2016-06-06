import {
    PLAYER_MOVED,
    COMPUTER_MOVE,
    START_GAME
} from '../constants/AppConstants';

export const playerMoved = (boardPosition) => {
    return {
        type: PLAYER_MOVED,
        boardPosition:boardPosition
    };
};

export const computerMove = () => {
    return {
        type: COMPUTER_MOVE
    };
};

export const startGame = () => {
    return {
        type: START_GAME
    };
};