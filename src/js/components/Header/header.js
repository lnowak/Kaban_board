import React, {Component} from "react";
import ReactDOM, { render } from 'react-dom';



class Header extends Component {

    handleBoardElementActive = e => {
        let buttonId = Number(e.target.dataset.button_id);
        this.props.handleBoardElementActive(buttonId);
    }

    render() {
        // console.log(this.props.headerState)
        return (
            <div className='header'>
                <button className='header__button' data-button_id={1} onClick={this.handleBoardElementActive}>Menu</button>
                <h1>Tablica Kanban</h1>
                <button className='header__button' data-button_id={2} onClick={this.handleBoardElementActive}>Użytkownik</button>
            </div>
        )
    }
}

export default Header;