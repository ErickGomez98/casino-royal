import React from 'react';
import bar from './img/bar_img.png';
import cherry from './img/cherry_img.png';
import bell from './img/bell_img.png';
import seven from './img/seven_img.png';

const CasinoJuegoSlot: React.FC<{ bg: any }> = (props) => {
    return (
        <div className="casino-juego-slot">
            <img src={props.bg} alt="img" />
        </div>
    )
}


type PalacncaProps = {
    onClickJugar: Function;
    playing: boolean;
}

const Palanca: React.FC<PalacncaProps> = (props) => {
    return (
        <div onClick={() => props.onClickJugar()}>
            <div className="medio-circulo"></div>
            {!props.playing
                ? <div className="palanca"></div>
                : <div className="palanca active"></div>
            }

            {!props.playing
                ? <div className="palanca-head"></div>
                : <div className="palanca-head active"></div>
            }
        </div>
    )
};



type CasinoJuegoProps = {
    jugable: boolean;
    showError: Function;
    showSuccess: Function;
    controlarCreditos: Function;
}

type CasinoState = {
    playing: boolean;
    results: any;
}

class CasinoJuego extends React.Component<CasinoJuegoProps, CasinoState> {
    state: CasinoState = {
        playing: false,
        results: []
    }

    /**
     * Función que verifica que sea posible iniciar a jugar.
     *
     * @memberof CasinoJuego
     */
    jugar = () => {
        if (!this.props.jugable) {
            this.props.showError("No hay créditos disponibles para jugar");
        } else {
            if (!this.state.playing) {
                this.startPlaying();
            }
        }
    }

    /**
     * Función que se encarga de iniciar un juego y marcar status de jugando
     *
     * @memberof CasinoJuego
     */
    startPlaying = () => {
        this.setState({
            playing: true
        });
        this.props.controlarCreditos(7, 2);
        this.generarResultadosRandom();
    }

    /**
     * Función que se encarga de generar los resultados random y determinar si son ganadores
     *
     * @memberof CasinoJuego
     */
    generarResultadosRandom = () => {
        const results: Array<Array<Number>> = [];
        for (let i = 0; i < 50; i++) {
            results.push(
                [
                    Math.floor(Math.random() * 4) + 1,
                    Math.floor(Math.random() * 4) + 1,
                    Math.floor(Math.random() * 4) + 1,
                    Math.floor(Math.random() * 4) + 1
                ]
            )
        }

        results.map((item, k) => {
            let tpl: any = [];
            for (let i = 0; i < item.length; i++) {
                switch (item[i]) {
                    case 1:
                        tpl.push(<CasinoJuegoSlot key={i} bg={bell} />)
                        break;
                    case 2:
                        tpl.push(<CasinoJuegoSlot key={i} bg={seven} />)
                        break;
                    case 3:
                        tpl.push(<CasinoJuegoSlot key={i} bg={cherry} />)
                        break;
                    case 4:
                        tpl.push(<CasinoJuegoSlot key={i} bg={bar} />)
                        break;
                }
            }
            setTimeout(() => {
                this.setState({
                    results: tpl
                });
            }, k * 50);
        })

        setTimeout(() => {
            this.setState({
                playing: false
            })

            const lastResult = results[results.length - 1];
            let isResult: number = 0;
            for (let i = 0; i < lastResult.length; i++) {
                let count = 0;
                for (let j = 0; j < lastResult.length; j++) {
                    if (lastResult[i] === lastResult[j]) {
                        count++;
                    }
                }
                if (count >= 3) {
                    isResult = count;
                }
            }

            if (isResult > 0) {
                console.log(isResult);
                if (isResult === 3) {
                    this.props.showSuccess("Has ganado 85 créditos!");
                    this.props.controlarCreditos(85, 1);
                } else if (isResult === 4) {
                    this.props.controlarCreditos(125, 1);
                    this.props.showSuccess("Has ganado 125 créditos!")
                }
            }
        }, (results.length) * 50);
    }

    render() {
        const { playing, results } = this.state;
        return (
            <div className="main-juego-container">
                <div>
                    <h2>CASINO | Juega por 7 créditos</h2>
                </div>
                <div className="caja-juego">
                    {results}
                    <Palanca onClickJugar={this.jugar} playing={playing} />
                </div>

                <div style={{marginTop: 40, fontSize: 20}}>
                    <div style={{fontSize: 30}}>PREMIOS</div>
                    <div>3 iguales: 85 créditos</div>
                    <div>4 iguales: 125 créditos</div>
                </div>
            </div>
        )
    }
};

export default CasinoJuego;