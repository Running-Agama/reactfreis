

import React from 'react';


export default function CardResultados({ resultado, index, onRemove }) {
    return (
        <div className="card-resultado">
            <div className='resultado'>
                <p>Altura: {resultado.Altura} | Peso: {resultado.Peso} | Situação: {resultado.Situação}</p>
            </div>
            <button className='botao-remover' onClick={() => onRemove(index)}>
                <img src="https://placeholder.co/40x40" alt="Remover" />
            </button>
        </div>
    );
}
