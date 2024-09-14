
import './index.scss'
import Cabecalho from '../../components/Cabecalho'
import Card from '../../components/Card'
 
export default function Inicio() {
    return (
        <div className='pagina-inicio'>
            <Cabecalho/>
            <div className='menu'>
                <div className='titulo'>
                    <h2>Escolha um treino...</h2>
                </div>
                <div className='cards'>
                    <Card cor='laranja' link='/e01' titulo='Cupom de Desconto' subtitulo='Exercício 1'/>
                    <Card cor='roxo' link='/e02' titulo='Converter kg/gramas' subtitulo='Exercício 2'/>
                    <Card cor='laranja' link='/e03'  titulo='Valor total por quantidade' subtitulo='Exercício 3'/>
                    <Card cor='laranja' link='/e04'  titulo='Valor total por quantidade' subtitulo='Exercício 4'/>
                    <Card cor='roxo'    link='/e05'  titulo='Media de notas' subtitulo='Exercicio 5'/>
                    <Card cor='roxo'    link='/e06'  titulo='Media de notas' subtitulo='Exercicio 6'/>
                    <Card cor='roxo'    link='/e10'  titulo='Media de notas' subtitulo='Exercicio 11'/>



                </div>
            </div>
        </div>
    )
}