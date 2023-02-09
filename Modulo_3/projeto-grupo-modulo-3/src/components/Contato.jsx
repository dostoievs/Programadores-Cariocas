function Contato() {
    return (
        <form>
            <div className="form-group">
                <label htmlFor="formGroupExampleInput">Nome:</label>
                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input" />
            </div>
            <div className="form-group">
                <label htmlFor="formGroupExampleInput2">Sobrenome:</label>
                <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input" />
            </div>
            <div className="form-group">
                <label htmlFor="formGroupExampleInput2">E-mail:</label>
                <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input" />
            </div>
            <div class="mb-3">
                <label for="validationTextarea">Mensagem:</label>
                <textarea class="form-control is-invalid" id="validationTextarea" placeholder="Required example textarea" required></textarea>
                <div class="invalid-feedback">
                    Please enter a message in the textarea.
                </div>
            </div>
        </form>
    )
}
export default Contato