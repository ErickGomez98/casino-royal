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
    showError: Function;
    showSuccess: Function;
}

interface IMoneda {
    denominacion: number,
    activo: boolean
}

interface ICasinoState {
    monedas: Array<IMoneda>,
    resultadoMonedas: Object
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
        ],
        resultadoMonedas: {}
    };

    /**
     * Método que se encarga de actualizar el status active de una moneda. 
     *
     * @memberof CasinoControls
     */
    changeStatusMoneda = (denominacion: number) => {
        this.setState({
            monedas: this.state.monedas.map(moneda => (moneda.denominacion === denominacion ? { ...moneda, activo: !moneda.activo } : moneda))
        });
    }

    cobrarCreditos = () => {
        if (this.props.creditosTotales < 1) {
            this.props.showError("No tienes créidtos");
            return;
        }
        const monedasActivas = this.state.monedas.filter(moneda => moneda.activo === true).map(moneda => moneda.denominacion);
        // Siempre agregar la moneda de 1
        monedasActivas.push(1);

        // Ordenar mayor a menor
        monedasActivas.sort((a, b) => b - a);

        let tmpCreditos: number = 0;
        const resultadoMonedas: any = {};
        while (tmpCreditos !== this.props.creditosTotales) {
            for (let i: number = 0; i < monedasActivas.length; i++) {
                if ((tmpCreditos + monedasActivas[i]) <= this.props.creditosTotales) {
                    tmpCreditos += monedasActivas[i];
                    resultadoMonedas[monedasActivas[i]] = !(resultadoMonedas[monedasActivas[i]]) ? 1 : resultadoMonedas[monedasActivas[i]] + 1;
                    break;
                }
            }
        }

        this.setState({
            resultadoMonedas
        })

        this.props.controlarCreditos(this.props.creditosTotales, 2);
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
                        <button type="button" className="boton-cobrar" onClick={this.cobrarCreditos}>Cobrar</button>
                    </div>
                    <div className="creditos-cobrados-result">
                        {Object.entries(this.state.resultadoMonedas).map(([key, value]) => ({ key, value })).map((item) => {
                            return <div key={item.key}> Moneda: {item.key} | Cantidad: {item.value}</div>
                        })}
                    </div>
                </div>

            </div>
        )
    }

};

export default CasinoControls;