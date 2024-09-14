import { Link } from 'react-router-dom'
import './index.scss'
import { useState } from 'react'
import Cabecalho from '../../components/Cabecalho';

export default function E05() {
    const [nota1, setNota1] = useState(0)
    const [nota2, setNota2] = useState(0)
    const [nota3, setNota3] = useState(0)
    const [mediaAluno, setMediaAluno] = useState(0)
    const [alunoPassou, setAlunoPassou] = useState('false')
    function calcularMediaAluno() {
        const nota = Number(nota1) + Number(nota2) + Number(nota3)
        if(mediaAluno>=5){
            setAlunoPassou('true')
        }
        else{
            setAlunoPassou('false')
        }
        setMediaAluno(nota /3)
        


    }

    return (
        <div className='pagina-e05'>
            <Cabecalho/>
            
            <div className='exercicio'>
                <div className='titulo'>
                    <div className='texto'>
                        <Link to='/'><img src='/voltar.png' alt='voltar' /></Link>
                        <h2>Exercício 06 - Salario liquido</h2>
                    </div>
                    <div className='faixa'/>
                </div>
                <div className='descricao'>
                Implemente um programa em javascript para calcular o salário líquido de um funcionário, a partir de seu salário base, do bônus mensal em porcentagem e do total de descontos em reais
                </div>
                <div className='formulario'>
                    <div className='campos'>
                        <div className='campo'>
                            <label>Nota 1</label>
                            <input placeholder='0' onChange={e => setNota1(e.target.value)} />

                            <label>Nota 2</label>
                            <input placeholder='0' onChange={e => setNota2(e.target.value)} />

                            <label>Nota 3</label>
                            <input placeholder='0' onChange={e => setNota3(e.target.value)} />
                        </div>
                        <button href='#' className='executar' onClick={calcularMediaAluno}>Executar</button>
                    </div>
                    <h3 className='resultado'>A nota média do aluno é de {mediaAluno.toFixed(1)} <br/> aluno passou? {alunoPassou}</h3>
                </div>

            </div>
        </div>
    )
}
