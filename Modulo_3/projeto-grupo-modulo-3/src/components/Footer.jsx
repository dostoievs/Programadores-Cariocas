import  './Footer.css'
function Footer() {
    return (
        <footer className="colorBack d-flex flex-wrap py-3 border-top">
          <div>
            <strong>Conheça nossas lojas:</strong><br />
            Irajá | Madureira | Barra <br />
            Botafogo | São Conrrado
          </div>
  
          <div>
            <strong>Fale Conosco:</strong><br />
            <i className="fa fa-whatsapp"> <a className='links' href='http://api.whatsapp.com/send?1=pt_BR&phone=5521976784483'>(21)97678-4483</a></i><br />
            <i className="fa fa-envelope"> <a className="links" href="mailto:gomes.david.9@gmail.com" target="_blank">gomes.david.9@gmail.com</a></i>
          </div>
  
          <div>
            <strong>Fale Conosco:</strong><br />
            <i className="fa fa-twitter"> Space.Burger</i><br />
            <i className="fa fa-instagram textColor"> Space.Burguer</i>
          </div>
        </footer>
    )
  }
  export default Footer;
  