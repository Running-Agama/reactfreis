import { Link } from 'react-router-dom'
import './index.scss'
import { useState } from 'react'
import Cabecalho from '../../components/Cabecalho';

export default function E02() {
    const [valorPedido, setValorKilos] = useState(0);
    const [valorTotal, setValorTotal] = useState(0);

    function calcularValorTotal() {
        let total = valorPedido * 1000;
        setValorTotal(total);
    }

    return (
        <div className='pagina-e02'>
            <Cabecalho/>
            
            <div className='exercicio'>
                <div className='titulo'>
                    <div className='texto'>
                        <Link to='/'><img src='/voltar.png' alt='voltar' /></Link>
                        <h2>Exercício 04 - Converter kg/gramas</h2>
                    </div>
                    <div className='faixa'/>
                </div>
                <div className='descricao'>
                Implementar um programa em Javascript para converter kilos em gramas.
                </div>
                <div className='formulario'>
                    <div className='campos'>
                        <div className='campo'>
                            <label>Valor em quilos</label>
                            <input placeholder='0' onChange={e => setValorKilos(e.target.value)} />

                            <label>Valor em quilos</label>
                            <input placeholder='0' onChange={e => setValorKilos(e.target.value)} />

                            <label>Valor em quilos</label>
                            <input placeholder='0' onChange={e => setValorKilos(e.target.value)} />
                        </div>
                        <button href='#' className='executar' onClick={calcularValorTotal}>Executar</button>
                    </div>
                    <h3 className='resultado'>Resultado: O peso em gramas é de {valorTotal}</h3>
                </div>

            </div>
        </div>
    )
}
