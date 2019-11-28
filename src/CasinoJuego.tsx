import React from "react";
const CasinoJuegoSlot: React.FC<{ bg: any }> = props => {
  return (
    <div className="casino-juego-slot">
      <h1>{props.bg}</h1>
    </div>
  );
};

type PalacncaProps = {
  onClickJugar: Function;
  playing: boolean;
};

const Palanca: React.FC<PalacncaProps> = props => {
  return (
    <div onClick={() => props.onClickJugar()}>
      <div className="medio-circulo"></div>
      {!props.playing ? (
        <div className="palanca"></div>
      ) : (
        <div className="palanca active"></div>
      )}

      {!props.playing ? (
        <div className="palanca-head"></div>
      ) : (
        <div className="palanca-head active"></div>
      )}
    </div>
  );
};

type CasinoJuegoProps = {
  jugable: boolean;
  showError: Function;
  showSuccess: Function;
  controlarCreditos: Function;
};

type CasinoState = {
  playing: boolean;
  results1: any;
  results2: any;
  results3: any;
};

class CasinoJuego extends React.Component<CasinoJuegoProps, CasinoState> {
  state: CasinoState = {
    playing: false,
    results1: [],
    results2: [],
    results3: []
  };

  /**
   * Función que verifica que sea posible iniciar a jugar.
   *
   * @memberof CasinoJuego
   */
  jugar = () => {
    if (!this.state.playing) {
      this.startPlaying();
    }
  };

  /**
   * Función que se encarga de iniciar un juego y marcar status de jugando
   *
   * @memberof CasinoJuego
   */
  startPlaying = () => {
    this.setState({
      playing: true
    });
    this.generarResultadosRandom();
  };

  /**
   * Función que se encarga de generar los resultados random y determinar si son ganadores
   *
   * @memberof CasinoJuego
   */
  generarResultadosRandom = () => {
    let r1: number[] = [];
    let r2: number[] = [];
    let r3: number[] = [];
    for (let j = 0; j < 70; j++) {
      r1.push(Math.floor(Math.random() * 2) + 1);
    }
    for (let j = 0; j < 50; j++) {
      r2.push(Math.floor(Math.random() * 2) + 1);
    }
    for (let j = 0; j < 30; j++) {
      r3.push(Math.floor(Math.random() * 9) + 1);
    }

    r1.map((item, k) => {
      let tmpT: any = [];
      switch (item) {
        case 1:
          tmpT.push(<CasinoJuegoSlot key={Math.random()} bg="+" />);
          break;
        case 2:
          tmpT.push(<CasinoJuegoSlot key={Math.random()} bg="-" />);
          break;

        default:
          break;
      }
      setTimeout(() => {
        this.setState({
          results1: tmpT
        });
      }, k * 100);
    });

    r2.map((item, k) => {
      let tmpT: any = [];
      switch (item) {
        case 1:
          tmpT.push(<CasinoJuegoSlot key={Math.random()} bg="1" />);
          break;
        case 2:
          tmpT.push(<CasinoJuegoSlot key={Math.random()} bg="0" />);
          break;
      }

      setTimeout(() => {
        this.setState({
          results2: tmpT
        });
      }, k * 100);
    });

    r3.map((item, k) => {
      let tmpT: any = [];
      tmpT.push(<CasinoJuegoSlot key={Math.random()} bg={item} />);

      setTimeout(() => {
        this.setState({
          results3: tmpT
        });
      }, k * 100);
    });

    setTimeout(() => {
      this.setState({
        playing: false
      });
    }, r3.length * 100);
  };
  render() {
    const { playing, results1, results2, results3 } = this.state;

    return (
      <div className="main-juego-container">
        <div className="caja-juego">
          {results1}
          {results2}
          {results3}
          <Palanca onClickJugar={this.jugar} playing={playing} />
        </div>
      </div>
    );
  }
}

export default CasinoJuego;
