import Button from "./Button";
function Form(){
    return(
        <form>
            <label>Classificação:
            <input type="text" id="classificacao"/>
            </label><br />
            <label>Nome
            <input type="text" id="nome"/>
            </label><br />
            <label>Preço:
            <input type="number" id="preco"/>
            </label><br />
            <label>Estoque:
            <input type="number" id="estoque"/>
            </label><br />
            <Button texto="Prop Enviar" color="green"></Button>
            <Button texto="Prop Enviar" color="black"></Button>
            <Button texto="Prop Enviar" color="red"></Button>
        </form>
    )
}
export default Form;