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

const CasinoJuego: React.FC = () => {
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
                <div className="medio-circulo"></div>
                <div className="palanca"></div>
                <div className="palanca-head"></div>
            </div>
        </div>
    )
};

export default CasinoJuego;