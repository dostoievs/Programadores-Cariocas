import Button from 'react-bootstrap/Button'
function FormItem() {
    return (
            <form>
            <div className="form-group">
                <label htmlFor="formGroupExampleInput">Produto:</label>
                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Nome do Produto" required/>
                <div className="invalid-feedback">
                    Digite seu Nome
                </div>
            </div>
            <label htmlFor='categoria'>Categoria:</label>
            <select class="form-control" id="categoria" name="categoria">
                <option>Comidas</option>
                <option>Bebidas</option>
                <option>Acompanhamentos</option>
                <option>Sobremesa</option>
            </select>
            <div className="form-group">
                <label htmlFor="formGroupExampleInput2">Preço:</label>
                <input type="number" className="form-control" id="formGroupExampleInput2" placeholder="Digite seu E-mail" required/>
                <div className="invalid-feedback">
                    Digite um e-mail valido
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="formGroupExampleInput2">Quantidade:</label>
                <input type="number" className="form-control" id="formGroupExampleInput2" placeholder="Digite seu E-mail" required/>
                <div className="invalid-feedback">
                    Digite um e-mail valido
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="validationTextarea">Descrição:</label>
                <textarea className="form-control is-invalid" id="validationTextarea" placeholder="Digite sua Mensagem" required></textarea>
                <div className="invalid-feedback">
                    Escreva sua Mensagem
                </div>
            </div>
            <label htmlFor='status'>Status:</label>
            <select class="form-control" id="categoria" name="categoria">
                <option>Ativo</option>
                <option>Inativo</option>
            </select>
            <div className="form-group center">
                {<Button variant="primary">Enviar</Button>}
            </div>
            
        </form>
    )
}
export default FormItem