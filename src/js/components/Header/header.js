import React, {Component} from "react";
import ReactDOM, { render } from 'react-dom';

class Header extends Component {

    handleBoardElementActive = e => {
        this.props.handleBoardElementActive();
    }

    render() {
        return (
            <div className='header'>
                <button className='header__button' onClick={this.handleBoardElementActive}>Menu</button>
                <h1>Tablica Kanban</h1>
            </div>
        )
    }
}

export default Header;