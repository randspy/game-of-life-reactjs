import React from 'react';
import './Board.css'

class BoardComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {board: [[0, 0, 0], [0, 0, 0], [0, 0, 0]]};

  }

  render() {
    return <div className="board">
      {this.state.board.map(item =>
          <div className="row">{item.map(elem =>
            <div className="cell"></div>)}</div>
        )}
    </div>;
  }
}

export default BoardComponent;
