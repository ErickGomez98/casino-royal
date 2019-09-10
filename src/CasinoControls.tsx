import React from 'react';


type ItemProps = {
    denominacion: number
};


const Moneda: React.FC<ItemProps> = (props) => {
    return (
        <div className="moneda">
            <div {...props} className="moneda-txt">{props.denominacion}</div>
        </div>
    )
}

const CreditosSelectItem: React.FC<ItemProps> = (props) => {
    return (
        <div className="creditos-select-item">
            <div>{props.denominacion}</div>
        </div>
    )
}

const CasinoControls: React.FC = (props) => {
    return (
        <div className="main-controles-container">
            <div className="monedas-title">
                <h2>Monedas disponibles</h2>
            </div>
            <div className="monedas-container">
                <Moneda denominacion={2} />
                <Moneda denominacion={5} />
                <Moneda denominacion={10} />
                <Moneda denominacion={20} />
            </div>
            <div className="divider"></div>
            <div className="creditos-selector-container">
                <h2>Cargar créditos</h2>
                <CreditosSelectItem denominacion={1} />
                <CreditosSelectItem denominacion={2} />
                <CreditosSelectItem denominacion={5} />
                <CreditosSelectItem denominacion={10} />
            </div>
            <div className="divider"></div>
            <div className="creditos-totales-container">
                <div>
                    <h2>Créditos: </h2>
                </div>
                <div className="creditos-totales">550</div>
            </div>
            <div className="divider"></div>
            <div className="cobrar-creditos-container">
                <div>
                    <button type="button" className="boton-cobrar">Cobrar</button>
                </div>
                <div className="creditos-cobrados-result">
                    creditos-cobrados
                </div>
            </div>

        </div>
    )
};

export default CasinoControls;