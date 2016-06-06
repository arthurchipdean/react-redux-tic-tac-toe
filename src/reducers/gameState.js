import {
    PLAYER_MOVED,
    START_GAME
} from '../constants/AppConstants';
import _ from 'underscore';
const blankBoard = [['','',''],['','',''],['','','']];
const initialState = {game_state:blankBoard,game_started:false, game_won: false};

const pickMove = (board) => {
    //Just find a blank spot
    let i =0, k=0;
    for(;i < 3;i++) {
        for(;k < 3;k++) {
            let position = board[i][k];
            if(position == '') {
                board[i][k] = 'O';
                return board;
            }
        }
    }
};
const gameWon = (board) => {
    for(let players = ['X','O'], k = 0; k < players.length; k++) {
        let player = players[k];
        //Check Row
        for(let i = 0; i < 2; i++) {
            if(_.every([board[i][0],board[i][1],board[i][2]], position => position == player)) {
                return player;
            }
        }
        //Check Columns
        for(let i = 0; i < 2; i++) {
            if(_.every([board[0][i],board[1][i],board[2][i]], position => position == player)) {
                return player;
            }
        }
        //Check Diagonals
        if(_.every([board[0][0],board[1][1],board[2][2]], position => position == player)) {
            return player
        }
        //Check Diagonals
        if(_.every([board[0][2],board[1][1],board[2][0]], position => position == player)) {
            return player
        }
    }
    return false;
};
const gameState = (state = initialState, action) => {
    switch(action.type) {
        case PLAYER_MOVED:
            let s = _.flatten(state.game_state);
            s[action.boardPosition] = 'X';
            let newGameState = [[s[0],s[1],s[2]],[s[3],s[4],s[5]],[s[6],s[7],s[8]]];
            newGameState = pickMove(newGameState);
            let newData = {game_state: newGameState};
            if(gameWon(newGameState)) {
                newData.game_won = true;
                newData.game_started = false;
            }
            return Object.assign({}, state, newData);
            break;
        case START_GAME:
            return Object.assign({},state, {game_started: true, game_won: false,game_state:blankBoard});
            break;
        default:
            return state;
    }
};

export default gameState;