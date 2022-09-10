import React from "react";

export class ClickTracker extends React.Component {
    state = {
        button: '',
    }

    eventHandler = (event) => {
        this.setState((state) => {
            return {
                button: (state.button = event.target.text),
            }
        })
    }

    render() {
        return (
             <>
                <button onClick={this.eventHandler}>
                     <img src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Perspective-Button-Stop-icon.png" width={200} alt="" />
                </button>
                <button onClick={this.eventHandler}>
                     <img src="https://upload.wikimedia.org/wikipedia/commons/c/c9/Perspective-Button-Go-icon.png" width={200} alt="" />
                </button>
                <button onClick={this.eventHandler}>
                     <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Button_Icon_Yellow.svg/1200px-Button_Icon_Yellow.svg.png" width={200} alt="" />
                </button>
                <h1>LAST BUTTON PRESSED IS: {this.state.button}</h1>
             </>
        );
    }
}

// EVENTS_04 CI SONO DIVERSE SOLUZIONI, SI PUò AGGIUNGERE IL TESTO MA CON L'AGGIUNTA DI UN EVENTO ONCLICK SUL TAG <IMG>... COSì SI PUò ANDARE A FARE UN EVENTO CON TARGET DEL TESTO FUORI DAL TAG <IMG>.
// EVENTS_04 CI SONO DIVERSE SOLUZIONI, SI PUò AGGIUNGERE IL TESTO MA CON L'AGGIUNTA DI UN EVENTO ONCLICK SUL TAG <IMG>... COSì SI PUò ANDARE A FARE UN EVENTO CON TARGET DEL TESTO FUORI DAL TAG <IMG>.
// EVENTS_04 CI SONO DIVERSE SOLUZIONI, SI PUò AGGIUNGERE IL TESTO MA CON L'AGGIUNTA DI UN EVENTO ONCLICK SUL TAG <IMG>... COSì SI PUò ANDARE A FARE UN EVENTO CON TARGET DEL TESTO FUORI DAL TAG <IMG>.
// EVENTS_04 CI SONO DIVERSE SOLUZIONI, SI PUò AGGIUNGERE IL TESTO MA CON L'AGGIUNTA DI UN EVENTO ONCLICK SUL TAG <IMG>... COSì SI PUò ANDARE A FARE UN EVENTO CON TARGET DEL TESTO FUORI DAL TAG <IMG>.
// EVENTS_04 CI SONO DIVERSE SOLUZIONI, SI PUò AGGIUNGERE IL TESTO MA CON L'AGGIUNTA DI UN EVENTO ONCLICK SUL TAG <IMG>... COSì SI PUò ANDARE A FARE UN EVENTO CON TARGET DEL TESTO FUORI DAL TAG <IMG>.
// EVENTS_04 CI SONO DIVERSE SOLUZIONI, SI PUò AGGIUNGERE IL TESTO MA CON L'AGGIUNTA DI UN EVENTO ONCLICK SUL TAG <IMG>... COSì SI PUò ANDARE A FARE UN EVENTO CON TARGET DEL TESTO FUORI DAL TAG <IMG>.