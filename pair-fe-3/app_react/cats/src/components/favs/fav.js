import React from "react";
import PropTypes from "prop-types";

const Fav = ({ id, url, eliminarEventHandler }) => {
    return (
        <div className="fav">
            <button className="delete-fav" data-id-cat={id} onClick={(event) => eliminarEventHandler(id, event)}><i className='fas fa-times-circle'></i></button>
            <img className='fav-img' alt='Fav' src={url} />
        </div>
    )
};

Fav.propTypes = {
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    eliminarEventHandler: PropTypes.func.isRequired
}

export default Fav