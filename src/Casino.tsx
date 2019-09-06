import React from 'react';
import './App.css';
import CasinoJuego from './CasinoJuego';
import CasinoControls from './CasinoControls';

type CasinoProps = {};
type CasinoState = {};

export default class Casino extends React.Component<CasinoProps, CasinoState> {
    render() {
        return (
            <div className="casino-main-container">
                <div className="casino-controls-container">
                    <CasinoControls />
                </div>
                <div className="casino-juego-container">
                    <CasinoJuego />
                </div>
            </div>
        )
    }
}