import React, { useState } from 'react';

function FillChildInfo(props) {

    const [name, setName] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [info, setInfo] = useState({})
    const [age, setAge] = useState(0);

    // Get age from birthdate
    const calculateAge = () => {
        let tmp = new Date(birthdate);
        var ageDifMs = Date.now() - tmp.getTime();
        var ageDate = new Date(ageDifMs); // miliseconds from epoch
        setAge(Math.abs(ageDate.getUTCFullYear() - 1970));
    }

    const handleSubmit = e => {
        e.preventDefault();

        setAge( calculateAge() );

        setInfo({
            'age': age,
            'name': name
        });

        props.setChildInfo(info);

        // We're all done here, go to next page
        props.nextStep();
    }

    return (
        <div className="fill-child-info">
            <form method="post" onSubmit={handleSubmit} className="form">
                <div className="form__row">
                    <label className="form__label">Prénom</label>
                    <input className="formm_input" type="text" placeholder="Jérôme" value={name} onChange={(e) => setName(e.target.value)} name="name" />

                </div>
                <div className="form__row">
                    <label className="form__label">Date de naissance</label>
                    <input className="form_input" type="date" placeholder="MM/DD/YYYY"  value={birthdate} onChange={(e) => setBirthdate(e.target.value)} name="birthdate" />
                </div>
            </form>
            <a className="btn-common btn-common__blue__fill" onClick={handleSubmit}>Suivant</a>
        </div>
    );
}

export default FillChildInfo;
