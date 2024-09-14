
import { Link } from 'react-router-dom';
import './index.scss';
import { useState } from 'react';
import Cabecalho from '../../components/Cabecalho';
import CardResultados from '../../components/CardResultados';

export default function E10() {
    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);
    const [resultados, setResultados] = useState([]);

    function removerResultado(index) {
        setResultados(resultados.filter((_, i) => i !== index));
    }

    function calcularIMC() {
        const alturaNum = +altura;
        const pesoNum = +peso;

        const IMC = pesoNum / (alturaNum ** 2);

        let situacao;

        if (IMC > 40) {
            situacao = 'Obesidade grau III';
        } else if (IMC > 35) {
            situacao = 'Obesidade grau II';
        } else if (IMC > 30) {
            situacao = 'Obesidade grau I';
        } else if (IMC >= 25) {
            situacao = 'Acima do peso';
        } else if (IMC >= 18.5) {
            situacao = 'Peso normal';
        } else if (IMC >= 17) {
            situacao = 'Abaixo do peso';
        } else {
            situacao = 'Muito abaixo do peso';
        }

        setResultados(resultados => [
            ...resultados,
            {
                Altura: alturaNum,
                Peso: pesoNum,
                Situação: situacao
            }
        ]);
    }

    return (
        <div className='pagina-e10'>
            <Cabecalho />

            <div className='exercicio'>
                <div className='titulo'>
                    <div className='texto'>
                        <Link to='/'><img src='/voltar.png' alt='voltar' /></Link>
                        <h2>Exercício 03 - Valor total por quantidade</h2>
                    </div>
                    <div className='faixa' />
                </div>
                <div className='descricao'>
                    Implementar um programa em Javascript para calcular o total de uma venda de açaí a partir das quantidades compradas para cada tamanho: pequeno, médio e grande, sabendo que o valor do açaí é R$ 13,50; R$ 15,00 e R$ 17,50 respectivamente
                </div>
                <div className='formulario'>
                    <div className='campos'>
                        <div className='linha-campos'>
                            <div className="campo">
                                <label>Altura </label>
                                <br />
                                <input type="number" placeholder='0' onChange={e => setAltura(e.target.value)} />
                            </div>
                            <div className="campo">
                                <label>Peso</label>
                                <br />
                                <input type="number" placeholder='0' onChange={e => setPeso(e.target.value)} />
                            </div>
                        </div>
                        <button className='executar' onClick={calcularIMC}>Executar</button>
                    </div>
                    <div className="coluna-resultados">
                        <div className="campo-resultados">
                            {resultados.map((resultado, index) => (
                                <CardResultados
                                    key={index}
                                    resultado={resultado}
                                    index={index}
                                    onRemove={removerResultado}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
