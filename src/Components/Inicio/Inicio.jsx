import React from 'react';

const Inicio = () => {

    function MostrarAlerta() {
        alert("Bienvenidos todos !");
    }

    return (
        <div>
            <h1>BiNEVENIDOS A REACT</h1>
            <div>
                <button className='btn btn primary' onClick={MostrarAlerta}>
                    WELCOME
                </button>
            </div>
        </div>
    );
}

export default Inicio;
