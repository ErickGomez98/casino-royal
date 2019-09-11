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

type CreditosSelectItemProps = {
    denominacion: number,
    controlarCreditos: Function
}

const CreditosSelectItem: React.FC<CreditosSelectItemProps> = (props) => {
    return (
        <div className="creditos-select-item" onClick={() => props.controlarCreditos(props.denominacion)}>
            <div>{props.denominacion}</div>
        </div>
    )
}

type CasinoControlsProps = {
    creditosTotales: number;
    controlarCreditos: Function;
}
const CasinoControls: React.FC<CasinoControlsProps> = (props) => {
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
                <CreditosSelectItem denominacion={1} controlarCreditos={(denominacion: number) => props.controlarCreditos(denominacion, 1)} />
                <CreditosSelectItem denominacion={2} controlarCreditos={(denominacion: number) => props.controlarCreditos(denominacion, 1)} />
                <CreditosSelectItem denominacion={5} controlarCreditos={(denominacion: number) => props.controlarCreditos(denominacion, 1)} />
                <CreditosSelectItem denominacion={10} controlarCreditos={(denominacion: number) => props.controlarCreditos(denominacion, 1)} />
            </div>
            <div className="divider"></div>
            <div className="creditos-totales-container">
                <div>
                    <h2>Créditos: </h2>
                </div>
                <div className="creditos-totales">{props.creditosTotales}</div>
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