//server.js
const express = require("express");
const cors = require('cors')
const app = express();
const PORT = 3000;

const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('Módulo_3/projeto-individual-modulo-3-react-js/mock/db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)

app.use(express.json())

app.use((req, res, next) => {
	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
	//Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});

app.get("/", (requisicao, resposta) => {
    resposta.json({message: 'ok'});
});
 
server.listen(PORT, () => {
  console.log(`Aplicação rodando em http://localhost:${PORT}`)
})
