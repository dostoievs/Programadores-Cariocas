import axios from "axios";
import { useEffect, useState } from "react";
import AdicionarItem from "./AdicionarItem";
import ItemCardapio from "./ItemCardapio";
import { Link, Outlet } from 'react-router-dom'
function ExibirCardapio() {
  const [cardapio, setCardapio] = useState([])
  const [ref, setRef]=useState(0)
  useEffect(() => {
    axios
      .get('https://modulo-3-projeto-grupo.onrender.com/itens')
      .then((response) => {
        setCardapio(response.data)
      })
      .catch((error) => { console.error(error) })
  }, [ref])
  return (
    <div>
      {/*<button onClick={()=>setRef(ref+1)}>Atualizar</button>*/}
      {<Link to="/cardapio/adicionar-item">Adicionar Produtos ao Cardápio</Link>}
      <Outlet/><br></br>
      <h2 className='comidas'>Comidas</h2>
      <section className="section site-portfolio">
        <div className="container">
          <div id="portfolio-grid" className="row no-gutter" data-aos="fade-up" data-aos-delay="200">
            {cardapio.map((element) => (
                  element.status=="Ativo" && element.categoria=='Comida'?
                    <ItemCardapio element={element} key={element.id}/>
                  :''
              ))}
          </div>
        </div>
      </section>
        
      <h2 className="bebidas">Bebidas</h2>
      <section className="section site-portfolio">
                <div className="container">
                  <div id="portfolio-grid" className="row no-gutter" data-aos="fade-up" data-aos-delay="200">
                    {cardapio.map((element) => (
                            element.status=="Ativo" && element.categoria=='Bebidas'?
                              <ItemCardapio element={element} key={element.id} style={{flex:1, flexDirection:'row'}}/>
                            :''
                        ))}
                    </div>
                </div>
      </section>

      <h2 className="sobremesas">Sobremesas</h2>
        <section className="section site-portfolio">
                <div className="container">
                  <div id="portfolio-grid" className="row no-gutter" data-aos="fade-up" data-aos-delay="200">
                      {cardapio.map((element) => (
                          element.status=="Ativo" && element.categoria=='Sobremesa'?
                            <ItemCardapio element={element} key={element.id} style={{flex:1, flexDirection:'row'}}/>
                          :''
                      ))}
                  </div>
                </div>
      </section>
      <h2 className="acompanhamentos">Acompanhamentos</h2>
      <section className="section site-portfolio">
                <div className="container">
                  <div id="portfolio-grid" className="row no-gutter" data-aos="fade-up" data-aos-delay="200">
                      {cardapio.map((element) => (
                          element.status=="Ativo" && element.categoria=='Acompanhamentos'?
                            <ItemCardapio element={element} key={element.id} style={{flex:1, flexDirection:'row'}}/>
                          :''
                      ))}
                  </div>
                </div>
      </section>
      </div>
  )
}
export default ExibirCardapio