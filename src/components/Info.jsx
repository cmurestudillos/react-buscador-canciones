import React from 'react';

const Info = ({info}) => {

    if(Object.keys(info).length === 0 ) return null;

    const { strArtistThumb, strGenre, strBiographyES } = info;
    
    return ( 
        <div className="card shadow p-3 mb-5 bg-white rounded">
            <div className="card-header font-weight-bold">
                <h3>Informaci&oacute;n Artista</h3>
                <hr></hr>
            </div>
            <div className="card-body">
                <img src={strArtistThumb} alt="Logo Artista" className="shadow p-3 mb-5 bg-white rounded" />
                <p className="card-text">G&eacute;nero: <span className="badge badge-primary"> {strGenre}</span></p>
                <h2 className="card-text">Biograf&iacute;a:</h2>
                <p className="card-text text-justify">{strBiographyES}</p>
                <p className="card-text text-center">
                    <a href={`https://${info.strFacebook}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href={`https://${info.strTwitter}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href={`${info.strLastFMChart}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-lastfm"></i>
                    </a>
                </p>
            </div>
        </div>
     );
}
 
export default Info;