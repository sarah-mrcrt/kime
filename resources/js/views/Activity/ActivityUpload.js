import React, { useState } from 'react';
import axios from 'axios';

function ActivityUpload(props) {

    const [file, setFile] = useState();
    const kidId = props.kid.id;
    const activityId = props.activityId;

    // récupérer l'input type="file" name="upload-file"

    const handleSubmit = evt => {

        // Upload img
        
        let data = new FormData();
        data.append('img', file, file.name);
            
        axios.post('/api/creationCreate/' + kidId + '/' + activityId, data)
        .then(json => {
            if(json.data.data) {
                props.next();
                console.log('Creation uploaded successfully');
            }
        }).catch(error => {
            console.log(error);
        })
    
    }

   

    return (

        <div className="container yellow background activity-upload">
            <div className="content">
                <h1>Ajouter ma création</h1>
            </div>
            <label htmlFor="file-input" className="activity-upload__input-img">
                <img src="/img/upload-img.svg"/>
            </label>

            <input onChange={(e) => setFile(e.target.files[0])} id="file-input" className="activity-upload__input-file" name="upload-file" type="file"/>
            <button onClick={handleSubmit} className="btn-common noMargin btn-common__blue__fill">Envoyer ma création</button>
        </div>
    ) 
}

export default ActivityUpload;