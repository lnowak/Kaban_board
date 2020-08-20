import React, {Component} from "react";
import ReactDOM, { render } from 'react-dom';
import './../sass/style.scss';

import WelcomeInfo from './components/WelcomeInfo/welcomeInfo';
import Board from './components/Board/board';

class Kaban extends Component {
    state = {

    }
    
    render() {
        return (
            <>
                <WelcomeInfo  />
                <Board />
            </>
        )
    }
}
const App = () => <Kaban />

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<App />, document.getElementById("app"));
});