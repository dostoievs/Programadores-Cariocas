import './Footer.css'

function Footer() {
  return (
    <div>
      <footer className="colorBack d-flex flex-wrap py-3 border-top">
        <div>
          <strong>Conheça nossas lojas:</strong><br />
          Irajá | Madureira | Barra <br />
          Botafogo | São Conrado
        </div>

        <div>
          <strong>Fale Conosco:</strong><br />
          <i class="fa fa-whatsapp"> </i> (21) 97171-7171 / 97272-7272<br />
          <i class="fa fa-envelope"> </i> contato@spaceburguer.com.br
        </div>

        <div>
          <strong>Fale Conosco:</strong><br />
          <a href="https://twitter.com/login?lang=pt"><i class="fa fa-twitter textColor"> </i> Space.Burger</a><br />
          <a href="https://www.instagram.com/"><i class="fa fa-instagram textColor"> </i> Space.Burguer</a>
        </div>
      </footer>
    </div>
  )
}
export default Footer;