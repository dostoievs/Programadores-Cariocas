function FormItem() {
    return (
        <>
            <form>
                <label htmlFor="nomeItem">Nome:</label>
                <input type="text" name="nomeItem" id="nomeItem"/>
                <br />
                <label htmlFor="categoriaItem">Categoria:</label>
                <input type="text" name="categoriaItem" id="categoriaItem"/>
                <br />
                <label>Preço:</label>
                <input type="number" name="precoItem" id="precoItem"/>
                <label>Estoque:</label>
                <input type="number" name="estoqueItem" id="estoqueItem"/>
                <br />
                <br />
                <br />
            </form>
        </>
    )
}
export default FormItem