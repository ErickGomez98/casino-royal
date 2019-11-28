import React from "react";
// @ts-ignore
import "./App.css";
import "react-notifications/lib/notifications.css";
import CasinoJuego from "./CasinoJuego";

type CasinoProps = {};
type CasinoState = {
  playable: boolean;
  creditosTotales: number;
};

export default class Casino extends React.Component<CasinoProps, CasinoState> {
  state: CasinoState = {
    playable: false,
    creditosTotales: 0
  };

  /**
   * Función que se encarga de controlar todos los créditos del juego.
   *
   * @memberof Casino
   */
  controlCredits = (creditos: number, type: number) => {
    // Si type == 1 es suma, si es == 2 es resta
    if (type === 1) {
      this.setState(state => {
        return {
          creditosTotales: state.creditosTotales + creditos,
          playable: state.creditosTotales + creditos >= 7 ? true : false
        };
      });
    } else if (type === 2) {
      this.setState(state => {
        return {
          creditosTotales: state.creditosTotales - creditos,
          playable: state.creditosTotales - creditos >= 7 ? true : false
        };
      });
    }
  };

  render() {
    const { playable } = this.state;
    return (
      <div className="casino-main-container">
        <div className="casino-juego-container">
          <CasinoJuego
            jugable={playable}
            showError={() => {}}
            showSuccess={() => {}}
            controlarCreditos={(creditos: number, type: number) =>
              this.controlCredits(creditos, type)
            }
          />
        </div>
      </div>
    );
  }
}
