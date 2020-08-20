import React, {Component} from "react";
import ReactDOM, { render } from 'react-dom';

import './../sass/style.scss';

class Kaban extends Component {
    render() {
        return <div>działa</div>
    }
}
const App = () => <Kaban />

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<App />, document.getElementById("app"));
});