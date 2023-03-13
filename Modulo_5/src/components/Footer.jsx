import  './Footer.css'
import {Link} from 'react-router-dom'
import { FaInstagramSquare, FaTwitterSquare, FaWhatsappSquare, FaEnvelopeSquare} from "react-icons/fa";

function Footer() {
    return (
        <footer className="colorBack d-flex flex-wrap py-3 border-top">
          <div>
            <strong>Conheça nossas lojas:<br />
            Irajá | Madureira | Barra <br />
            Botafogo | São Conrrado</strong>
          </div>
  
          <div>
            <strong>Dicas e Sugestões:</strong><br />
            <FaWhatsappSquare/> <strong><Link className="text-decoration-none text-light" to='http://api.whatsapp.com/send?1=pt_BR&phone=5521976784483'> (21)97678-4483</Link></strong><br />
            <FaEnvelopeSquare/><strong><Link className="text-decoration-none text-light" to="mailto:gomes.david.9@gmail.com" target="_blank"> gomes.david.9@gmail.com</Link></strong>
          </div>
  
          <div>
            <strong>Siga nossas Redes Sociais:</strong><br />
            <FaTwitterSquare/> <strong><Link className="text-decoration-none text-light" to="#"> Han?Hum</Link></strong><br />
            <FaInstagramSquare/><strong><Link className="text-decoration-none text-light" to="#"> Han?Hum</Link></strong>
          </div>
        </footer>
    )
  }
  export default Footer;
  
