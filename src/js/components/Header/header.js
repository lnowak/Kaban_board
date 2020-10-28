import React, {Component} from "react";
import ReactDOM, { render } from 'react-dom';

class Header extends Component {

    handleBoardElementActive = e => {
        this.props.handleBoardElementActive();
    }

    render() {

        const tableName = this.props.state.board.map(item => {
            if (item.boardBodyActive) {
                return item.boardName
            }
            
        })

        return (
            <div className='header'>
                <button className='header__button' onClick={this.handleBoardElementActive}>Menu</button>
                <h2 className='header__tableName'>{tableName}</h2>
                <h1>Tablica Kanban</h1>
                
            </div>
        )
    }
}

export default Header;