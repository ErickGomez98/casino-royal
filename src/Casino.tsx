import React from 'react';
import CasinoJuego from './CasinoJuego';
import CasinoControls from './CasinoControls';

type CasinoProps = {};
type CasinoState = {};

export default class Casino extends React.Component<CasinoProps, CasinoState> {
    render() {
        return (
            <div>
                <CasinoControls />
                <CasinoJuego />
            </div>
        )
    }
}