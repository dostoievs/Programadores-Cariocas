function Login(){
    return(
        <form>
            <div className="form-group">
                <label htmlFor="formGroupExampleInput">E-mail:</label>
                <input type="email" className="form-control" id="email" placeholder="E-mail" required onChange={() => {
                setNome(document.getElementById('nome').value)}}/>
            </div>
            <div className="form-group">
                <label htmlFor="formGroupExampleInput">Senha:</label>
                <input type="password" className="form-control" id="senha" placeholder="Senha" required onChange={() => {
                setNome(document.getElementById('nome').value)}}/>
            </div>
            <button type='button' onClick={() => ((itens.nomeCompleto!='')&&
                                             (itens.cpf!='')&&
                                             (itens.email!='')&&
                                             (itens.tipoUsuario!='')&&
                                             (itens.senha!='')&&
                                             (itens.password!='')&&
                                             (itens.statusUsuario!='')&&
                                             (itens.senha===itens.confirmacaoSenha))?
                                             PostarItem():console.log('Erro')}>Fazer Login</button>
        </form>
    )
}
export default Login