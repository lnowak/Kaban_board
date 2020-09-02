import React, {Component} from "react";
import ReactDOM, { render } from 'react-dom';

import Shortcuts from './Shortcuts/shortcuts';
import BoardBody from './BoardBody/boardBody';

class Board extends Component {
    render() {
        return (
            <div className='board'>
                <Shortcuts boardState={this.props.boardState} showItemsList={this.props.showItemsList} handleEditListItem={this.props.handleEditListItem} addNewList={this.props.addNewList}/>
                <BoardBody boardState={this.props.boardState} />
            </div>
        )
    }
}

export default Board;


// handleBoardElementActive = () => {
//     this.setState({menuActive: !this.state.menuActive});
// }

// showItemsList = (e) => {
// let id = Number(e);
// let newBoardShortcutActive = this.state.board.map(e => {
//     if (id === e.boardId) {
//         e.boardShortcutActive = !e.boardShortcutActive;
//         return e
//     }
// });
// this.setState({board: newBoardShortcutActive});
// }

// handleEditListItem = (e) => {
// let id = Number(e);
// let editActive = this.state.board.map(e => {
//     if (id === e.boardId) {
//         e.boardShortcutEditActive = !e.boardShortcutEditActive;
//         return e
//     }
// })
// this.setState({board: editActive})
// }

// addNewList = () => {
// const newList = {
//     boardName: `Lista ${this.state.board.length+1}`,
//     boardId: this.state.board.length+1,
//     boardShortcutActive: false,
//     boardShortcutEditActive: false,
//     boardCol: [],
// };
// this.setState({
//     board: [...this.state.board, newList],
// })
// }