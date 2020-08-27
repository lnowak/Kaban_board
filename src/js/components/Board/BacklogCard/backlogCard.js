import React, {Component} from "react";
import ReactDOM, { render } from 'react-dom';



class BacklogCard extends Component {

    render() {
        let boardList = this.props.boardState.board.map(e => {
            return e.backlogActive ? 'board__backlog' : 'none'
        })
        return (
            <div className={boardList} ></div>
        )
    }
}

export default BacklogCard;