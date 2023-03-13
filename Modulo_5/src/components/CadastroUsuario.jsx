import axios from "axios";
import { useState } from "react";
function CadastroUsuario() {
   const [nomeCompleto, setNomeCompleto] = useState("");
   const [cpf, setCpf] = useState("");
   const [email, setEmail] = useState("");
   const [senha, setSenha] = useState("");
   const [confirmacaoSenha, setConfirmacaoSenha] = useState("");
   const [statusUsuario, setStatusUsuario] = useState("");
   const [tipoUsuario, setTipoUsuario] = useState("");
   const itens = {
      id: "",
      nomeCompleto: nomeCompleto,
      cpf: cpf,
      email:  email,
      senha: senha,
      confirmacaoSenha: confirmacaoSenha,
      statusUsuario: statusUsuario,
      tipoUsuario: tipoUsuario,
   }
  function PostarItem() {
    axios
      .post('https://modulo-3-projeto-grupo.onrender.com/itens', itens)
      .then((response) => { console.log(response) })
      .catch((error) => { console.log(error) })
  }
  console.log(itens)
  return (
    <>
      <form>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput">Nome Completo:</label>
          <input type="text" className="form-control" id="nomeCompleto" placeholder="Nome Completo" required onChange={() => {
            setNome(document.getElementById('nomeCompleto').value)
          }} />
          </div>
        
        <div className="form-group">
          <label htmlFor="formGroupExampleInput">CPF:</label>
          <input type="text" className="form-control" id="cpf" placeholder="CPF" required onChange={() => {
            setCpf(document.getElementById('cpf').value)
          }} />

        </div>
        <label htmlFor='categoria'>Permissão de Usuário:</label>
        <select className="form-control" id="tipoUsuario" name="tipoUsuario" onChange={
          ()=>{setTipoUsuario(document.getElementById('tipoUsuario').options[document.getElementById('tipoUsuario').selectedIndex].value);}} required>
          <option value="" disabled>Selecione um tipo de Usuário ...</option>
          <option value='Administrador'>Administrador</option>
          <option value='Usuario'>Usuario</option>
        </select>

        <div className="form-group">
          <label htmlFor="formGroupExampleInput2">E-mail:</label>
          <input type="email" className="form-control" id="email" placeholder="Digite seu e-mail"required onChange={() => {
            setEmail(document.getElementById('email').value)
          }} />
        </div>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput2">Senha:</label>
          <input type="password" className="form-control" id='senha' placeholder="Digite sua senha" required onChange={() => {
            setSenha(document.getElementById('senha').value)
          }}/>
        </div>

        <div className="form-group">
          <label htmlFor="formGroupExampleInput2">Confirmar sua Senha:</label>
          <input type="password" className="form-control" id='confirmacaoSenha' placeholder="Confirme sua senha" required onChange={() => {
            setConfirmacaoSenha(document.getElementById('confirmacaoSenha').value)
          }}/>
        </div>

        <div className="form-group">
          <label htmlFor="formGroupExampleInput2">Status de Usuário:</label>
          <select className="form-control" id="statusUsuario" name="statusUsuario" onChange={()=>{
            setStatusUsuario(document.getElementById('statusUsuario').options[document.getElementById('statusUsuario').selectedIndex].value)}} required>
            <option value="" disabled>Selecione um Status ...</option>
            <option value='Ativo'>Ativo</option>
            <option value='Inativo'>Inativo</option>
          </select>
        </div>
      
        <button type='button' onClick={() => ((itens.nomeCompleto!='')&&
                                             (itens.cpf!='')&&
                                             (itens.email!='')&&
                                             (itens.tipoUsuario!='')&&
                                             (itens.senha!='')&&
                                             (itens.password!='')&&
                                             (itens.statusUsuario!='')&&
                                             (itens.senha===itens.confirmacaoSenha))?
                                             PostarItem():console.log('Erro')}>Cadastrar</button>
      </form>
    </>
  )
}
export default CadastroUsuario