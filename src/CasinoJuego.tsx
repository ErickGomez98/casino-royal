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
        let results: Array<Array<Number>> = [];
        for (let i = 0; i < 10; i++) {
            results.push(
                [
                    Math.floor(Math.random() * 4) + 1,
                    Math.floor(Math.random() * 4) + 1,
                    Math.floor(Math.random() * 4) + 1,
                    Math.floor(Math.random() * 4) + 1
                ]
            )
        }

        results = [
            [1,1,2,2,1,4,1,2,3,2,1],
            [2,3,4,2,3,4,1,2,3,4,2],
            [4,2,1,2,3,2,4,1,2,3,2],
            [3,2,1,4,1,2,2,3,4,2,1],
        ];

        let xd: Array<Number> = [];

        let aaa: Array<Array<Number>> = [];

        results.map((v, k) => {
            // la idea es que cada vuelta asi con ese array va a mostrar de cada slot por slot, y cuando finalice uno
            // pues se deberia de quedar ese asi renderizado y no eliminarlo, ese es el pedo xd.
            v.map((i, n) => {

                xd[k] = i;
                console.log(xd);
                const qggg = [...xd];
                //aaa = [...aaa, xd];
                aaa.push(qggg)
                
            });
        });


        // Ahora lo que vale aaa tiene todas las combinaciones, creo que ahora lo que tengo que hacer es un .map sobre aaa
        // donde en cada vuelta del ciclo voy a hacer el tpl.push que ya tenia, de esta manera al inicio solo va a agregar
        // un elemento a la vez, y al finalizar pues ya va a agregar todos los demas elementos pero los primeros tambien los
        // estaria renderizando otra vez pero como el valor ya no se mueve entonces no debería de afectar.

        // debera de ser un map adentro de un map, en el map grande se regresa el tpl completo al state, y en el map de adentro se va
        // construyendo el tpl, tonces para sacar el timeout deberia de ser creo multiplicar los indices de cada map y sumarle los ms
        // para el timeout

        console.log(aaa);
        





















        
        for(let j = 0; j < 4; j++){
            results.map((item, k) => {

                let tpl: any = [];
                if(j === 0){
                    switch (item[j]) {
                        case 1:
                            tpl.push(<CasinoJuegoSlot key={Math.random()} bg={bell} />)
                            break;
                        case 2:
                            tpl.push(<CasinoJuegoSlot key={Math.random()} bg={seven} />)
                            break;
                        case 3:
                            tpl.push(<CasinoJuegoSlot key={Math.random()} bg={cherry} />)
                            break;
                        case 4:
                            tpl.push(<CasinoJuegoSlot key={Math.random()} bg={bar} />)
                            break;
                    }                    
                }else if(j === 1){
                    tpl.push(<CasinoJuegoSlot key={Math.random()} bg={bell} />)
                    switch (item[j]) {
                        case 1:
                            tpl.push(<CasinoJuegoSlot key={Math.random()} bg={bell} />)
                            break;
                        case 2:
                            tpl.push(<CasinoJuegoSlot key={Math.random()} bg={seven} />)
                            break;
                        case 3:
                            tpl.push(<CasinoJuegoSlot key={Math.random()} bg={cherry} />)
                            break;
                        case 4:
                            tpl.push(<CasinoJuegoSlot key={Math.random()} bg={bar} />)
                            break;
                    }    
                } else if (j === 2) {
                    tpl.push(<CasinoJuegoSlot key={Math.random()} bg={bell} />)
                    tpl.push(<CasinoJuegoSlot key={Math.random()} bg={bell} />)
                    switch (item[j]) {
                        case 1:
                            tpl.push(<CasinoJuegoSlot key={Math.random()} bg={bell} />)
                            break;
                        case 2:
                            tpl.push(<CasinoJuegoSlot key={Math.random()} bg={seven} />)
                            break;
                        case 3:
                            tpl.push(<CasinoJuegoSlot key={Math.random()} bg={cherry} />)
                            break;
                        case 4:
                            tpl.push(<CasinoJuegoSlot key={Math.random()} bg={bar} />)
                            break;
                    }
                } else if (j === 3) {
                    tpl.push(<CasinoJuegoSlot key={Math.random()} bg={bell} />)
                    tpl.push(<CasinoJuegoSlot key={Math.random()} bg={bell} />)
                    tpl.push(<CasinoJuegoSlot key={Math.random()} bg={bell} />)
                    switch (item[j]) {
                        case 1:
                            tpl.push(<CasinoJuegoSlot key={Math.random()} bg={bell} />)
                            break;
                        case 2:
                            tpl.push(<CasinoJuegoSlot key={Math.random()} bg={seven} />)
                            break;
                        case 3:
                            tpl.push(<CasinoJuegoSlot key={Math.random()} bg={cherry} />)
                            break;
                        case 4:
                            tpl.push(<CasinoJuegoSlot key={Math.random()} bg={bar} />)
                            break;
                    }
                }

/*                
                switch (item[j]) {
                    case 1:
                        tpl.push(<CasinoJuegoSlot key={j} bg={bell} />)
                        break;
                    case 2:
                        tpl.push(<CasinoJuegoSlot key={j} bg={seven} />)
                        break;
                    case 3:
                        tpl.push(<CasinoJuegoSlot key={j} bg={cherry} />)
                        break;
                    case 4:
                        tpl.push(<CasinoJuegoSlot key={j} bg={bar} />)
                        break;
                }
*/
                /*
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
                */
                setTimeout(() => {
                    this.setState({
                        results: tpl
                    });
                }, j * 500);
            })
        }
        

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
        }, (results.length) * 500);
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