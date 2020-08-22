import React, {Component} from "react";
import ReactDOM, { render } from 'react-dom';



class Header extends Component {

    handleMenuActive = e => {
        this.props.handleMenuActive();
    }

    render() {
        console.log(this.props.headerState)
        return (
            <div className='header'>
                <button className={`header__button`} onClick={this.handleMenuActive}>Menu</button>
                <h1>Tablica Kanban</h1>
                <button className='header__button'>Użytkownik</button>
            </div>
        )
    }
}

export default Header;