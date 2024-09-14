import { Link } from 'react-router-dom'
import './index.scss'
import { useState } from 'react'
import Cabecalho from '../../components/Cabecalho';

export default function E04() {
    const [nomeLivro, setNomeLivro] = useState('Livro')
    const [paginasLivro,setPaginasLivro] = useState(0)
    const [tempoLeitura, setTempoLeitura] = useState(0)
    const [valorTotal, setValorTotal] = useState(0)
    function calcularValorTotal() {
        setValorTotal((paginasLivro * tempoLeitura) / 3600)
    }

    return (
        <div className='pagina-e04'>
            <Cabecalho/>
            
            <div className='exercicio'>
                <div className='titulo'>
                    <div className='texto'>
                        <Link to='/'><img src='/voltar.png' alt='voltar' /></Link>
                        <h2>Exercício 04 - Leitura de livro</h2>
                    </div>
                    <div className='faixa'/>
                </div>
                <div className='descricao'>
                    Implementar um programa em Javascript que calcule o tempo que um livro será lido por uma pessoa a partir do nome do livro, do total de páginas e do tempo em segundos de leitura por página
                </div>
                <div className='formulario'>
                    <div className='campos'>
                        <div className='campo'>
                            <label>Nome do livro</label>
                            <input placeholder='Nome' onChange={e => setNomeLivro(e.target.value)} />

                            <label>Total de páginas do livro</label>
                            <input placeholder='0' onChange={e => setPaginasLivro(e.target.value)} />

                            <label>Tempo em segundos de leitura</label>
                            <input placeholder='0' onChange={e => setTempoLeitura(e.target.value)} />
                        </div>
                        <button href='#' className='executar' onClick={calcularValorTotal}>Executar</button>
                    </div>
                    <h3 className='resultado'>O tempo de leitura é de: {valorTotal.toFixed(2)} horas</h3>
                </div>

            </div>
        </div>
    )
}
