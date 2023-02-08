/*//server.js
//import http from "node:http";
const express = require("express");
const cors = require('cors')
const app = express();
const PORT = 3000;

const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('./mock/db.json')
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
    resposta.json({ message: 'ok' });
});


server.listen(PORT, () => {
    console.log(`Aplicação rodando em http://localhost:${PORT}`)
})*/
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('./mock/db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use((req, res, next) => {
 if (isAuthorized(req)) { // add your authorization logic here
   next() // continue to JSON Server router
 } else {
   res.sendStatus(401)
 }
})
server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})
