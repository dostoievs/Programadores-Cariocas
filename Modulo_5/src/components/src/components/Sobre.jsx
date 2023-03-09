import gifComendoHamburguer from '../assets/comendo-hamburguer-hugo-bonemer.gif'
function Sobre(){
    return(
        <div>
            <h1>Quem somos nós?</h1>
            <div className='row'>
            <img src={gifComendoHamburguer} alt="loading..." width='200px'className='col'/>
            <h2 className='col'>A Han? Burguer é uma hamburgueria</h2>
            </div>
        </div>
    )
}
export default Sobre; 