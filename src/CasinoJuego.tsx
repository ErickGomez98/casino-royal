import React from 'react';
import bar from './img/bar_img.png';
import cherry from './img/cherry_img.png';
import bell from './img/bell_img.png';
import seven from './img/seven_img.png';

const CasinoJuegoSlot: React.FC<any> = (props) => {
    return (
        <div className="casino-juego-slot">
            <img src={props.bg} alt="img" />

        </div>
    )
};

type PalacncaProps = {
    onClickJugar: Function;
    playing: boolean;
}

const Palanca: React.FC<PalacncaProps> = (props) => {
    return (
        <div onClick={() => props.onClickJugar()}>
            <div className="medio-circulo"></div>
            {!props.playing
                ? <div className="palanca"></div>
                : <div className="palanca active"></div>
            }

            {!props.playing
                ? <div className="palanca-head"></div>
                : <div className="palanca-head active"></div>
            }
        </div>
    )
};



type CasinoJuegoProps = {
    jugable: boolean;
}

type CasinoState = {
    playing: boolean;
}

class CasinoJuego extends React.Component<CasinoJuegoProps, CasinoState> {
    state: CasinoState = {
        playing: false
    }



    jugar = () => {
        if (!this.props.jugable) {
            alert("no hay créditos para jugar");
        } else {
            this.startPlaying();
        }
    }

    startPlaying = () => {
        this.setState({
            playing: true
        });
    }

    render() {
        const { playing } = this.state;
        return (
            <div className="main-juego-container">
                <div>
                    <h2>Casino Juego</h2>
                </div>
                <div className="caja-juego">
                    <CasinoJuegoSlot bg={bell} />
                    <CasinoJuegoSlot bg={seven} />
                    <CasinoJuegoSlot bg={cherry} />
                    <CasinoJuegoSlot bg={bar} />
                    <Palanca onClickJugar={this.jugar} playing={playing} />
                </div>
            </div>
        )
    }
};

export default CasinoJuego;