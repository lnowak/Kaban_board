import React, {Component} from "react";

import TextArea from './textarea';

class Background extends Component {

    backgroundOff = (e) => {
        this.props.backgroundOff(e);
    };

    descFormSave = e => {
        this.props.descFormSave(e);
    }

    changeHeaderTitle = (e) => {
        this.props.changeHeaderTitle(e);
    }

    changeListItemName = (e) => {
        this.props.changeListItemName(e);
    }

    saveListItemName = e => {
        this.props.saveListItemName(e);
    }

    render() {
        const name = this.props.state.board.map( item1 => {
            if (item1.boardBodyActive) {
                return item1.boardCol.map( item2 => {
                    return item2.tasks.map(item3 => {
                        if(item3.detailedDescriptionOpen && !item3.descActive) {
                            return <h1 data-boardid={item2.id} data-id={item3.id} key={item3.id} className='detailed__description__header__title' onClick={this.changeHeaderTitle}>{item3.taskName}</h1>
                        } if(item3.detailedDescriptionOpen && item3.descActive) {
                            return (
                            <form onSubmit={this.saveListItemName} data-boardid={item2.id} data-id={item3.id} key={item3.id}>
                                <input className='detailed__description__header__input' autoFocus value={this.props.state.newColumnItemName} data-boardid={item2.id} data-id={item3.id} onChange={this.changeListItemName}/>
                            </form>
                            )
                        }
                    });
                })
            }
        });

        const desc = this.props.state.board.map(item1 => {
            if (item1.boardBodyActive) {
                return item1.boardCol.map( item2 => {
                    return item2.tasks.map(item3 => {
                        if (item3.detailedDescriptionOpen) {
                            return (
                                <form className='form__desc' data-id={item3.id} data-colid={item2.id} onSubmit={this.descFormSave} key={item3.id}>
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
            <div className={`${this.props.state.backgroundActive ? 'fullscreen__background' : 'none'}`} onMouseDownCapture={this.backgroundOff}>
                <div className={`${this.props.state.editItemActive ? 'detailed__description' : 'none'}`}>
                    <header className='detailed__description__header'>
                        {name}
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
                                <span>Etykiety</span>
                            </div>
                            <div className='card__actions'>
                                <span>Usuń</span>
                                <span>Przenieś...</span>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}

export default Background;