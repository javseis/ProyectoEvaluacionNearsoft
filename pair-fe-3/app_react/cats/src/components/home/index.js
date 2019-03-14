import React, { Component } from "react";
import { obtenerImagen as svcObtenerImagen, agregarFavorito as svcAgregarFavorito } from "../../service";

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = { id: "", url: "" };
    }

    obtenerImagen = () => {
        svcObtenerImagen().then((json) => {
            console.log(json.image);
            this.setState({ id: json.image.id, url: json.image.url })
        });
    };

    agregarFavorito = () => {
        svcAgregarFavorito(this.state.id).then((json)=>{
            console.log(json);
            this.obtenerImagen();
        });
    }

    componentDidMount() {
        this.obtenerImagen();
    }

    render() {
        return (
            <div className="images-container">
                <div id="image" className="cat-image">
                    <img id="cat" alt="Gatito" src={this.state.url} />
                </div>
                <div className="actions">
                    <button type="button" id="next" onClick={this.obtenerImagen} title="Siguiente">𝗫</button>
                    <button type="button" id="like" onClick={this.agregarFavorito} title="Me gusta">❤</button>
                </div>
            </div>
        );
    }
}

export default Home;
