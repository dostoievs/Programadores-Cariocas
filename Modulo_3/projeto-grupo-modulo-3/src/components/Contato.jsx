import Button from 'react-bootstrap/Button';
function Contato() {
    return (
        <form>
            <div className="form-group">
                <label htmlFor="formGroupExampleInput">Nome:</label>
                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Digite seu Nome" required/>
                <div className="invalid-feedback">
                    Digite seu Nome
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="formGroupExampleInput2">Sobrenome:</label>
                <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Digite seu Sobrenome" required/>
                <div className="invalid-feedback">
                    Digite seu Sobrenome
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="formGroupExampleInput2">E-mail:</label>
                <input type="email" className="form-control" id="formGroupExampleInput2" placeholder="Digite seu E-mail" required/>
                <div className="invalid-feedback">
                    Digite um e-mail valido
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="validationTextarea">Mensagem:</label>
                <textarea className="form-control is-invalid" id="validationTextarea" placeholder="Digite sua Mensagem" required></textarea>
                <div className="invalid-feedback">
                    Escreva sua Mensagem
                </div>
            </div>
            <div className="form-group center">
                {<Button variant="primary">Enviar</Button>}
            </div>
            
        </form>
    )
}
export default Contato