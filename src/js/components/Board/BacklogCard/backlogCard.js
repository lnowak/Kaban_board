import React, {Component} from "react";
import ReactDOM, { render } from 'react-dom';



class BacklogCard extends Component {

    render() {
        let boardList = this.props.boardState.board.map(e => {
            return <div key={e.boardId} data-id={e.boardId} className={e.backlogActive ? 'board__backlog' : 'none'} ></div>
        });
        
        return (
            <>
                {boardList}
            </>
        )
    }
}

export default BacklogCard;