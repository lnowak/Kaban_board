import React, {Component} from "react";
import ReactDOM, { render } from 'react-dom';

import Shortcuts from './Shortcuts/shortcuts';
import BoardBody from './BoardBody/boardBody';
import UserInfo from './UserInfo/userInfo'

class Board extends Component {
 render() {
     return (
         <div className='board'>
            <Shortcuts boardState={this.props.boardState} />
            <BoardBody boardState={this.props.boardState} />
            <UserInfo />
         </div>
     )
 }
}

export default Board;