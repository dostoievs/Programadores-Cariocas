import { useState, useEffect } from "react"
import Pratos from "../components/cardapio/Pratos"
import Fundo from "../components/contato/Fundo"
import styles from './Cardapio.module.css'
function Cardapio() {
  const [dados, setdados] = useState([])
  const [bebidas, setbebidas] = useState([])
  const [acompanhamentos, setacompanhamentos] = useState([])
  const [sobremesa, setsobremesa] = useState([])
  const [hamburguer, sethamburguer] = useState([])

  useEffect(() => {
    console.log('teste')
    loadCardapio();
  }, [])
  async function loadCardapio() {
    try {
      const resp = await fetch(`https://server-space-burguer.onrender.com/cardapio`, {
        method: 'GET',
      });
      console.log('resposta fetch->', resp)
      if (resp.status == 200 || 201) {
        const Dados = await resp.json();

        console.log('Dados do fetc->', Dados);
        setdados(Dados)
        sethamburguer(Dados[0].hamburguer)
        setbebidas(Dados[1].bebidas)
        setsobremesa(Dados[2].sobremesas)
        setacompanhamentos(Dados[3].acompanhamentos)

      }

    } catch (e) {
      console.log(e)
    }
  }
    return (
     
      <div className={styles.fundo}>
        <>
        <Pratos hamburguer={hamburguer} bebidas={bebidas} acompanhamentos={acompanhamentos} sobremesa={sobremesa}/>
       
      </>
        {/* <Fundo /> */}
      </div>
    )
 

}
export default Cardapio;
