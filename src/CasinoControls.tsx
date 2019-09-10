import React from 'react';

const Moneda: React.FC<any> = (props) => {
    return (
        <div {...props} className="moneda-txt">{props.denominacion}</div>
    )
}

const CasinoControls: React.FC = (props) => {
    return (
        <div className="main-controles-container">
            <div className="monedas-container">
                <div className="moneda">
                    <Moneda denominacion={2} />
                </div>
                <div className="moneda">
                    <Moneda denominacion={5} />
                </div>
                <div className="moneda">
                    <Moneda denominacion={10} />
                </div>
                <div className="moneda">
                    <Moneda denominacion={20} />
                </div>
            </div>
        </div>
    )
};

export default CasinoControls;