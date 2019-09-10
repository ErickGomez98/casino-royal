import React from 'react';
import './App.css';
import CasinoJuego from './CasinoJuego';
import CasinoControls from './CasinoControls';

type CasinoProps = {};
type CasinoState = {
    playable: boolean
};

export default class Casino extends React.Component<CasinoProps, CasinoState> {
    state: CasinoState = {
        playable: false
    };
    render() {
        const { playable } = this.state;
        return (
            <div className="casino-main-container">
                <div className="casino-controls-container">
                    <CasinoControls />
                </div>
                <div className="casino-juego-container">
                    <CasinoJuego jugable={playable} />
                </div>
            </div>
        )
    }
}