import React, { Component, PropTypes } from 'react';
import _ from 'underscore';

const propTypes = {
    board: PropTypes.arrayOf(
        PropTypes.arrayOf(
            PropTypes.string
        )
    )
};
class Board extends Component {
  render() {
    let board = this.props.board;
    return (
      <div key={_.uniqueId()}>
        {(() => {
            let boardPosition = 0;
            return board.map(row => {
                return (
                    <div className="col-md-12 game-row">
                        {row.map(piece => (
                            <div className="col-md-4 game-column"
                                 onClick={this.props.onClick.bind(null,boardPosition)}
                                 data-boardPosition={boardPosition++}
                                 key={_.uniqueId()}>
                                <strong className="letter">{piece}</strong>
                            </div>
                        ))}
                    </div>
                )
            });
        })()}
      </div>
    );
  }
}

Board.propTypes = propTypes;
export default Board;
