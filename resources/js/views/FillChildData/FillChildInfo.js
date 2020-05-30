import React, { useState } from 'react';

function FillChildInfo(props) {

    const [name, setName] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [age, setAge] = useState(0);

    // Get age from birthdate
    const calculateAge = (date) => {
        let tmp = new Date(date);
        var ageDifMs = Date.now() - tmp.getTime();
        var ageDate = new Date(ageDifMs); // miliseconds from epoch
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    const handleSubmit = e => {
        e.preventDefault();

        let info = {
            birthdate: birthdate,
            name: name
        };

        // We're all done here, go to next page
        props.nextStep(info);
    }

    return (
        <div className="fill-child-info flex-y">
            <form method="post" onSubmit={handleSubmit} className="container__body none form form-auth">
                <div className="form-auth__input-div one">
                    <div className="i">
                        <i className="fas fa-user"></i>
                    </div>
                    <div className="div">
                        <label className="form__label">Prénom</label>
                        <input className="input" type="text" value={name} onChange={(e) => setName(e.target.value)} name="name" />
                    </div>
                </div>
                <div className="form-auth__input-div pass focus">
                    <div className="i">
                        <i className="fas fa-gift"></i>
                    </div>
                    <div className="div">
                        <label className="form__label">Date de naissance</label>
                        <input className="input" type="date" value={birthdate} onChange={(e) => setBirthdate(e.target.value)} name="birthdate" />
                    </div>
                </div>
            </form>
            <a className="btn-common btn-common__blue__fill" onClick={handleSubmit}>Suivant</a>
        </div>
    );
}

export default FillChildInfo;
