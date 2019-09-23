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
    results1: any;
    results2: any;
    results3: any;
    results4: any;
}

class CasinoJuego extends React.Component<CasinoJuegoProps, CasinoState> {
    state: CasinoState = {
        playing: false,
        results1: [],
        results2: [],
        results3: [],
        results4: []
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
        let r1: number[] = [];
        let r2: number[] = [];
        let r3: number[] = [];
        let r4: number[] = [];
        for (let j = 0; j < 30; j++) {
            r1.push(
                Math.floor(Math.random() * 4) + 1,
            )
        }
        for (let j = 0; j < 40; j++) {
            r2.push(
                Math.floor(Math.random() * 4) + 1,
            )
        }
        for (let j = 0; j < 50; j++) {
            r3.push(
                Math.floor(Math.random() * 4) + 1,
            )
        }
        for (let j = 0; j < 60; j++) {
            r4.push(
                Math.floor(Math.random() * 4) + 1,
            )
        }
        r1.map((item, k) => {
            let tmpT: any = [];
            switch (item) {
                case 1:
                    tmpT.push(<CasinoJuegoSlot key={Math.random()} bg={bell} />)
                    break;
                case 2:
                    tmpT.push(<CasinoJuegoSlot key={Math.random()} bg={seven} />)
                    break;
                case 3:
                    tmpT.push(<CasinoJuegoSlot key={Math.random()} bg={cherry} />)
                    break;
                case 4:
                    tmpT.push(<CasinoJuegoSlot key={Math.random()} bg={bar} />)
                    break;
            }

            setTimeout(() => {
                this.setState({
                    results1: tmpT
                })
            }, k * 100);
        })

        r2.map((item, k) => {
            let tmpT: any = [];
            switch (item) {
                case 1:
                    tmpT.push(<CasinoJuegoSlot key={Math.random()} bg={bell} />)
                    break;
                case 2:
                    tmpT.push(<CasinoJuegoSlot key={Math.random()} bg={seven} />)
                    break;
                case 3:
                    tmpT.push(<CasinoJuegoSlot key={Math.random()} bg={cherry} />)
                    break;
                case 4:
                    tmpT.push(<CasinoJuegoSlot key={Math.random()} bg={bar} />)
                    break;
            }

            setTimeout(() => {
                this.setState({
                    results2: tmpT
                })
            }, k * 100);
        })

        r3.map((item, k) => {
            let tmpT: any = [];
            switch (item) {
                case 1:
                    tmpT.push(<CasinoJuegoSlot key={Math.random()} bg={bell} />)
                    break;
                case 2:
                    tmpT.push(<CasinoJuegoSlot key={Math.random()} bg={seven} />)
                    break;
                case 3:
                    tmpT.push(<CasinoJuegoSlot key={Math.random()} bg={cherry} />)
                    break;
                case 4:
                    tmpT.push(<CasinoJuegoSlot key={Math.random()} bg={bar} />)
                    break;
            }

            setTimeout(() => {
                this.setState({
                    results3: tmpT
                })
            }, k * 100);
        })

        r4.map((item, k) => {
            let tmpT: any = [];
            switch (item) {
                case 1:
                    tmpT.push(<CasinoJuegoSlot key={Math.random()} bg={bell} />)
                    break;
                case 2:
                    tmpT.push(<CasinoJuegoSlot key={Math.random()} bg={seven} />)
                    break;
                case 3:
                    tmpT.push(<CasinoJuegoSlot key={Math.random()} bg={cherry} />)
                    break;
                case 4:
                    tmpT.push(<CasinoJuegoSlot key={Math.random()} bg={bar} />)
                    break;
            }

            setTimeout(() => {
                this.setState({
                    results4: tmpT
                })
            }, k * 100);
        })

        setTimeout(() => {
            this.setState({
                playing: false
            })
            const lastResult = [r1[r1.length - 1], r2[r2.length - 1], r3[r3.length - 1], r4[r4.length - 1]];
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
                if (isResult === 3) {
                    this.props.showSuccess("Has ganado 85 créditos!");
                    this.props.controlarCreditos(85, 1);
                } else if (isResult === 4) {
                    this.props.controlarCreditos(125, 1);
                    this.props.showSuccess("Has ganado 125 créditos!")
                }
            }
        }, (r4.length) * 100);
    }
    render() {
        const { playing, results1, results2, results3, results4 } = this.state;

        return (
            <div className="main-juego-container">
                <div>
                    <h2>CASINO | Juega por 7 créditos</h2>
                </div>
                <div className="caja-juego">
                    {results1}
                    {results2}
                    {results3}
                    {results4}
                    <Palanca onClickJugar={this.jugar} playing={playing} />
                </div>

                <div style={{ marginTop: 40, fontSize: 20 }}>
                    <div style={{ fontSize: 30 }}>PREMIOS</div>
                    <div>3 iguales: 85 créditos</div>
                    <div>4 iguales: 125 créditos</div>
                </div>
            </div>
        )
    }
};

export default CasinoJuego;