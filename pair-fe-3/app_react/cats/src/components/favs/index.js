import React, { Component } from "react";
import { obtenerFavoritos as svcObtenerFavoritos, eliminarFavorito as svcEliminarFavorito, obtenerFavoritos } from "../../service";
import Fav from "./fav";

class Favs extends Component {
    constructor(props) {
        super(props);

        this.obtenerFavoritos = this.obtenerFavoritos.bind(this);
        this.eliminarFavorito = this.eliminarFavorito.bind(this);
        this.state = { favs: [] };
    }

    obtenerFavoritos() {
        svcObtenerFavoritos().then((json) => {
            this.setState({ favs: json.images });
        });
    }

    eliminarFavorito(id) {
        svcEliminarFavorito(id).then((correcto) => {
            if (correcto) {
                console.info(`Se eliminó el elemento: ${id}`);
                this.obtenerFavoritos();
            } else {
                console.error("Ocurrio un error al eliminar el elemento.");
            }
        });
    }

    componentDidMount() {
        this.obtenerFavoritos();
    }

    render() {
        return (
            <div className="favs-container">
                <h1>Favorites</h1>
                <div className="favs">
                    {this.state.favs.map((fav) => {
                        return (
                            <Fav id={fav.id} url={fav.url} eliminarEventHandler={this.eliminarFavorito} key={fav.id}/>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default Favs;
