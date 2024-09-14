import { Link } from 'react-router-dom'
import './index.scss'
import { useState } from 'react'
import Cabecalho from '../../components/Cabecalho';

export default function E03() {
    const [quantidadePequeno,setQuantidadePequeno] = useState(0)
    const [quantidadeMedio,  setQuantidadeMedio]   = useState(0)
    const [quantidadeGrande, setQuantidadeGrande]  = useState(0)
    const [valorTotal,       setValorTotal]        = useState(0)
    function calcularValorTotal() {
        let valor = (quantidadePequeno * 13.5) + (quantidadeMedio * 15) + (quantidadeGrande * 17.5)
        setValorTotal(valor);
    }

    return (
        <div className='pagina-e03'>
            <Cabecalho/>
            
            <div className='exercicio'>
                <div className='titulo'>
                    <div className='texto'>
                        <Link to='/'><img src='/voltar.png' alt='voltar' /></Link>
                        <h2>Exercício 03 - Valor total por quantidade</h2>
                    </div>
                    <div className='faixa'/>
                </div>
                <div className='descricao'>
                   Implementar um programa em Javascript para calcular o total de uma venda de açaí a partir das quantidades compradas para cada tamanho: pequeno, médio e grande, sabendo que o valor do açaí é R$ 13,50; R$ 15,00 e R$ 17,50 respectivamente
                </div>
                <div className='formulario'>
                    <div className='campos'>
                        <div className='linha-campos'> 
                            <div className="campo">    
                                <label >Quantidade Pequeno</label>                  
                                <input placeholder='0' onChange={e => setQuantidadePequeno(e.target.value)} />
                            </div>  
                            <div className="campo">  
                                <label >Quantidade Medio</label>                       
                                <input placeholder='0' onChange={e => setQuantidadeMedio(e.target.value)} />
                            </div>
                            <div className="campo">  
                                <label>Quantidade Grande</label>                     
                                <input placeholder='0' onChange={e => setQuantidadeGrande(e.target.value)} />
                            </div>

                        </div>
  
                        <button href='#' className='executar' onClick={calcularValorTotal}>Executar</button>
                    </div>
                    <h3 className='resultado'>Resultado: O valor total é de {valorTotal}</h3>
                </div>

            </div>
        </div>
    )
}
