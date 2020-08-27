import React, {Component} from "react";
import ReactDOM, { render } from 'react-dom';



class Shortcuts extends Component {
    
    showItemsList = (e) => {
        let id = e.target.dataset.id;
        this.props.showItemsList(id);
    }

    showBacklog = (e) => {
        let id = e.target.dataset.id;
        this.props.showBacklog(id);
    }

    addNewList = () => {
        this.props.addNewList();
    }

    render() {
        let menuActive = this.props.boardState.menuActive;
        const list = this.props.boardState.board.map(item => {
            // console.log(item.boardId)
            return (
                <li key={item.boardId} data-id={item.boardId} onClick={this.showItemsList}>{item.boardName}
                    <ul>
                        <li className={item.boardShortcutActive ? '' : 'none'} data-id={item.boardId} onClick={this.showBacklog} >Project backlog</li>
                    </ul>
                </li>
            )
        });

        return (
            <div className={`board__section board__shortcuts ${menuActive ? 'board__shortcuts--active' : ''}`} >
                <ul>
                   {list}
                   <li onClick={this.addNewList}>Utwórz nową listę</li>
                </ul>
            </div>
        )
    }
}

export default Shortcuts;