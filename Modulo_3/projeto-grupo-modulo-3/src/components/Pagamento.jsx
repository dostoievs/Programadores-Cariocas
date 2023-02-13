function Pagamento(){
    const [nomeCartao, setNomeCartao] = useState("");
    const [tipoCartao, setTipoCartao] = useState("Comidas");
    const [numeroCartao, setNumeroCartao] = useState(0);
    const [dataVencimento, setDataVencimento] = useState(0);
    const [codigoSeguranca, setCodigoSeguranca] = useState("");
    const itens = {
       id: "",
       nomeCartao: categoria,
       tipoCartao: nome,
       numeroCartao:  Number.parseFloat(preco),
       dataVencimento: estoque,
       codigoSeguranca: foto,
    }
    return(
        <form>
            <label htmlFor='tipoCartao'>Tipo do Cartão:</label>
            <select className="form-control" id="tipoCartao" name="tipoCartao" defaultValue={''} onChange={()=>{setTipoCartao(document.getElementById('categoria').options[document.getElementById('categoria').selectedIndex].value);}} required>
              <option value="" disabled>Selecione o tipo do cartão ...</option>
              <option value='Débito'>Débito</option>
              <option value='Crédito'>Crédito</option>
            </select>
            <div className="form-group">
              <label htmlFor="formGroupExampleInput">Nome:</label>
              <input type="text" className="form-control" id="nomeCartao" placeholder="Nome Impresso no Cartão" required onChange={() => {
                setNomeCartao(document.getElementById('nomeCartao').value)
              }} />
            </div>
            <div className="form-group">
              <label htmlFor="formGroupExampleInput2">Número:</label>
              <input type="text" className="form-control" id="numeroCartao" placeholder="Número impresso no Cartão" required onChange={() => {
                setNumeroCartao(document.getElementById('numeroCartao').value)
              }} />
            </div>
            <div className="form-group">
              <label htmlFor="formGroupExampleInput2">Data de vencimento:</label>
              <input type="date" className="form-control" id="dataVencimento" placeholder="Data de Vencimento" required onChange={() => {
                setDataVencimento(document.getElementById('dataVencimento').value)
              }} />
            </div>
            <div className="form-group">
              <label htmlFor="formGroupExampleInput2">Código de Segurança:</label>
              <input type="number" className="form-control" id="codigoSeguranca" min='0' placeholder="Código de Segurança" required onChange={() => {
                setCodigoSeguranca(parseInt(document.getElementById('codigoSeguranca').value))
              }}/>
            </div>
            <button type='submit'onClick={() => ((itens.status!='')&&
                                                 (itens.nome!='')&&
                                                 (itens.categoria!='')&&
                                                 (itens.foto!='')&&
                                                 (itens.estoque!='')&&
                                                 (itens.preco!='')&&
                                                 (itens.descricao!=''))?
                                                 PostarItem():''}>Postar</button>
        </form>
    )
}
export default Pagamento