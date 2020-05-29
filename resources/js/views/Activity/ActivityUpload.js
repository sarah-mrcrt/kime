import React from 'react';

function ActivityUpload(props) {

    // récupérer l'input type="file" name="upload-file"

    return (

        <div className="container yellow background activity-upload">
        <a className="container__close" href="/">X</a>
            <div className="content">
                <h1>Ajouter ma création</h1>
            </div>
            <label for="file-input" className="activity-upload__input-img">
                <img src="/img/upload-img.svg"/>
            </label>

            <input id="file-input" className="activity-upload__input-file" name="upload-file" type="file"/>
            <button className="btn-common noMargin btn-common__blue__fill">Envoyer ma création</button>
        </div>
    ) 
}

export default ActivityUpload;