import React from 'react';
import './App.css';
import CasinoJuego from './CasinoJuego';
import CasinoControls from './CasinoControls';

type CasinoProps = {};
type CasinoState = {
    playable: boolean,
    creditosTotales: number
};

export default class Casino extends React.Component<CasinoProps, CasinoState> {
    state: CasinoState = {
        playable: false,
        creditosTotales: 0,
    };


    controlCredits = (creditos: number) => {
        this.setState((state) => {
            return {
                creditosTotales: state.creditosTotales + creditos,
                playable: state.creditosTotales + creditos > 7 ? true : false
            }
        });
    }


    render() {
        const { playable, creditosTotales } = this.state;
        return (
            <div className="casino-main-container">
                <div className="casino-controls-container">
                    <CasinoControls creditosTotales={creditosTotales} controlarCreditos={(creditos: number) => this.controlCredits(creditos)} />
                </div>
                <div className="casino-juego-container">
                    <CasinoJuego jugable={playable} />
                </div>
            </div>
        )
    }
}