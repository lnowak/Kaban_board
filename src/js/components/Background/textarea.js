import React, {Component} from "react";
import autosize from 'autosize';


class TextArea extends Component {
    componentDidMount(){
       autosize(this.textarea);
    }

    descriptionChange = e => {
        this.props.descriptionChange(e);
    }

    render(){
        return (
            <textarea className='as' data-id={this.props.id} data-colid={this.props.colid} onChange={this.descriptionChange} placeholder='Podaj szczegółowy opis...' value={this.props.newDesc} ref={c=>this.textarea=c} rows={2} />
        );
    }
}

export default TextArea;