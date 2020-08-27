import React, {Component} from "react";
import ReactDOM, { render } from 'react-dom';

import Shortcuts from './Shortcuts/shortcuts';
import BoardBody from './BoardBody/boardBody';

class Board extends Component {
    render() {
        return (
            <div className='board'>
                <Shortcuts boardState={this.props.boardState} showItemsList={this.props.showItemsList} />
                <BoardBody boardState={this.props.boardState} />
            </div>
        )
    }
}

export default Board;