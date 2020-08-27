import React, {Component} from "react";
import ReactDOM, { render } from 'react-dom';



class Shortcuts extends Component {
    
    showItemsList = () => {
        this.props.showItemsList();
    }

    render() {
        let menuActive = this.props.boardState.menuActive;
        const list = this.props.boardState.board.map(item => {
            return (
                <li key={item.boardId} onClick={this.showItemsList}>{item.boardName}
                    <ul>
                        <li className={item.boardShortcutActive ? '' : 'none'}>Project backlog</li>
                    </ul>
                </li>
            )
        });

        return (
            <div className={`board__section board__shortcuts ${menuActive ? 'board__shortcuts--active' : 'board__shortcuts--disactive'}`} >
                <ul>
                   {list}
                   <li>Utwórz nową listę</li>
                </ul>
            </div>
        )
    }
}

export default Shortcuts;