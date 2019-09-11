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
}

type CasinoState = {
    playing: boolean;
    // results: Array<Array<number>>
    results: any
}

class CasinoJuego extends React.Component<CasinoJuegoProps, CasinoState> {
    state: CasinoState = {
        playing: false,
        results: []
    }



    jugar = () => {
        if (!this.props.jugable) {
            this.props.showError("No hay créditos disponibles para jugar");
        } else {
            if (!this.state.playing) {
                this.startPlaying();
            }
        }
    }

    startPlaying = () => {
        this.setState({
            playing: true
        });
        this.generarResultadosRandom();
    }

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
            }, k * 100);
        })

        setTimeout(() => {
            this.setState({
                playing: false
            })

            const lastResult = results[results.length - 1];
            let isResult: number = 0;
            console.log(lastResult);
            for (let i = 0; i < lastResult.length; i++) {
                let count = 0;
                for (let j = i; j < lastResult.length; j++) {
                    if (lastResult[i] === lastResult[j]) {
                        count++;
                    }
                }
                if (count >= 3) {
                    isResult = count;
                }
            }

            if (isResult > 0) {
                console.log(`es resultado con ${isResult} coincidencias`);
            }
        }, (results.length) * 100);



    }

    render() {
        const { playing, results } = this.state;
        return (
            <div className="main-juego-container">
                <div>
                    <h2>Casino Juego</h2>
                </div>
                <div className="caja-juego">
                    {results}
                    <Palanca onClickJugar={this.jugar} playing={playing} />
                </div>
            </div>
        )
    }
};

export default CasinoJuego;