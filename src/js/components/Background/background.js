import React, {Component} from "react";
import ReactDOM, { render } from 'react-dom';
import autosize from 'autosize';

class Background extends Component {

    backgroundOff = (e) => {
        this.props.backgroundOff(e);
    };

    descFormSave = e => {
        this.props.descFormSave(e);
    }

    render() {

        const name = this.props.state.board.map( item1 => {
            if (item1.boardBodyActive) {
                return item1.boardCol.map( item2 => {
                    return item2.tasks.map(item3 => {
                        if(item3.detailedDescriptionOpen) {
                            return item3.taskName
                        }
                    });
                })
            }
        });

        const desc = this.props.state.board.map(item1 => {
            if (item1.boardBodyActive) {
                return item1.boardCol.map( item2 => {
                    return item2.tasks.map(item3 => {
                        // if(item3.detailedDescriptionOpen && !this.props.state.descActive) {
                        //     return <div className='as' key={item3.id} data-colid={item2.id} data-id={item3.id} onClick={this.descFormActive}>{item3.desc.length === 0 ? 'Podaj szczegółowy opis' : item3.desc}</div>
                        // }
                        if (item3.detailedDescriptionOpen) {
                            return (
                                <form data-id={item3.id} data-colid={item2.id} onSubmit={this.descFormSave} key={item3.id}>
                                    <TextArea state={this.props.state} descriptionChange={this.props.descriptionChange} id={item3.id} colid={item2.id} desc={item3.desc} newDesc={item3.newDesc} />
                                    <button >Zapisz</button>                                
                                </form>
                            )
                        }
                    });
                })
            }
        })

        return (
            <div className={`${this.props.state.backgroundActive ? 'fullscreen__background' : 'none'}`} onClick={this.backgroundOff}>
                <div className={`${this.props.state.editItemActive ? 'detailed__description' : 'none'}`}>
                    <header className='detailed__description__header'>
                        <h1 className='detailed__description__header__title'>{name}</h1>
                        <button className='detailed__description__header__closeButton' onClick={this.backgroundOff}>X</button>
                    </header>
                    <section className='detailed__description__body'>
                        <div className='detailed__description__body__mainCol'>
                            <div className='card__detail'>
                                <div className='card__detail__labels'></div>
                            </div>
                            <div className='card__detail__description'>
                                <h3>Opis</h3>
                                    {desc}
                                    {/* <button>Zapisz</button> */}
                            </div>
                            <div className='card__detail__checklist'>

                            </div>
                        </div>
                        <div className='detailed__description__body__sidebar'>
                            <div className='card__adds'>

                            </div>
                            <div className='card__actions'></div>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}

class TextArea extends Component {
    componentDidMount(){
       this.textarea.focus();
       autosize(this.textarea);
    }

    descriptionChange = e => {
        this.props.descriptionChange(e);
    }

    render(){
        return (
            <textarea className='as' data-id={this.props.id} data-colid={this.props.colid} onChange={this.descriptionChange} placeholder='Podaj szczegółowy opis...' value={this.props.newDesc} ref={c=>this.textarea=c} rows={1} />
        );
    }
}

export default Background;