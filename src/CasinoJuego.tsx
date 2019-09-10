import React from 'react';

const CasinoJuegoSlot: React.FC<any> = (props) => {
    return (
        <div className="casino-juego-slot">
            {props.bg}
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
                <CasinoJuegoSlot bg="xd" />
                <CasinoJuegoSlot bg="ab" />
                <CasinoJuegoSlot bg="cd" />
                <CasinoJuegoSlot bg="ef" />
                <div className="medio-circulo"></div>
                <div className="palanca"></div>
                <div className="palanca-head"></div>
            </div>
        </div>
    )
};

export default CasinoJuego;