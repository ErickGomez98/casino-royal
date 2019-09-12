import React from 'react';


type ItemProps = {
    denominacion: number,
    active: boolean,
    changeStatus: Function
};


const Moneda: React.FC<ItemProps> = (props) => {
    return (
        <div className={props.active ? "moneda" : "moneda moneda-off"} onClick={() => props.changeStatus(props.denominacion)}>
            <div className="moneda-txt" >{props.denominacion}</div>
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

interface IMoneda {
    denominacion: number,
    activo: boolean
}

interface ICasinoState {
    monedas: Array<IMoneda>
}
class CasinoControls extends React.Component<CasinoControlsProps, {}> {
    state: ICasinoState = {
        monedas: [
            {
                denominacion: 2,
                activo: true
            },
            {
                denominacion: 5,
                activo: true
            },
            {
                denominacion: 10,
                activo: true
            },
            {
                denominacion: 20,
                activo: true
            }
        ]
    };

    changeStatusMoneda = (denominacion: number) => {
        this.setState({
            monedas: this.state.monedas.map(moneda => (moneda.denominacion === denominacion ? { ...moneda, activo: !moneda.activo } : moneda))
        });
    }

    render() {
        return (
            <div className="main-controles-container">
                <div className="monedas-title">
                    <h2>Monedas disponibles</h2>
                </div>
                <div className="monedas-container">
                    {this.state.monedas.map(moneda => {
                        return <Moneda key={moneda.denominacion} denominacion={moneda.denominacion} active={moneda.activo} changeStatus={(x: any) => this.changeStatusMoneda(x)} />
                    })}
                </div>
                <div className="divider"></div>
                <div className="creditos-selector-container">
                    <h2>Cargar créditos</h2>
                    <CreditosSelectItem denominacion={1} controlarCreditos={(denominacion: number) => this.props.controlarCreditos(denominacion, 1)} />
                    <CreditosSelectItem denominacion={2} controlarCreditos={(denominacion: number) => this.props.controlarCreditos(denominacion, 1)} />
                    <CreditosSelectItem denominacion={5} controlarCreditos={(denominacion: number) => this.props.controlarCreditos(denominacion, 1)} />
                    <CreditosSelectItem denominacion={10} controlarCreditos={(denominacion: number) => this.props.controlarCreditos(denominacion, 1)} />
                </div>
                <div className="divider"></div>
                <div className="creditos-totales-container">
                    <div>
                        <h2>Créditos: </h2>
                    </div>
                    <div className="creditos-totales">{this.props.creditosTotales}</div>
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
    }

};

export default CasinoControls;