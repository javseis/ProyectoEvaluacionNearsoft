const API_HOST = "http://localhost:8080/api/images";
const API_HOST_FAV = `${API_HOST}/fav`;

export const obtenerImagen = () => {
    return fetch(API_HOST, {
        headers: {
            api_key: "g00dLuCk"
        },
        method: "GET"
    }).then((response) => {
        return response.json();
    });
};

export const agregarFavorito = (idCat) => {
    return fetch(`${API_HOST_FAV}/${idCat}`, {
        headers: {
            api_key: "g00dLuCk"
        },
        method: "POST"
    }).then((response) => {
        return response.json();
    });
};

export const obtenerFavoritos = ()=>{
    return fetch(API_HOST_FAV, {
        headers: {
            api_key: "g00dLuCk"
        },
        method: "GET"
    }).then((response) => {
        return response.json();
    });
};

export const eliminarFavorito = (idCat) => {
    return fetch(`${API_HOST_FAV}/${idCat}`, {
        headers: {
            api_key: "g00dLuCk"
        },
        method: "DELETE"
    }).then((response) => {
        return response.ok;
    });
};
