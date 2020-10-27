const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = 3000;

// Precisamos avisar o Express para utilizar o body-parser
// Assim, ele saberá como transformar as informações no BODY da requisição
//      em informação útil para a programação

app.use(bodyParser.json());

/*
-> Create, Read (All/Single), Update & Delete
-> Criar, Ler (Tudo ou Individual), Atualizar e Remover
*/

/*
URL -> http://localhost:3000
Endpoint ou Rota -> [GET] /mensagem
Endpoint ou Rota -> [POST] /mensagem
Endpoint: [GET] /mensagem
Descrição: Ler todas as mensagens
Endpoint: [POST] /mensagem
Descrição: Criar uma mensagem
Endpoint: [GET] /mensagem/{id}
Descrição: Ler mensagem específica pelo ID
Exemplo: [GET] /mensagem/1
Endpoint: [PUT] /mensagem/{id}
Descrição: Edita mensagem específica pelo ID
Endpoint: [DELETE] /mensagem/{id}
Descrição: Remove mensagem específica pelo ID
*/

app.get('/', function (req, res) {
  res.send('Hello World');
});

const mensagens = ['Essa é uma mensagem', 'Essa é outra mensagem'];

// Read All
app.get('/mensagem', function (req, res) {
    res.send(mensagens);
});

// Create
app.post('/mensagem', function (req, res) {
    const texto = req.body.texto;

    mensagens.push(texto);

    res.send(`A mensagem '${texto}' foi criada com sucesso.`);
});

// Read Single
app.get('/mensagem/:id', function (req, res) {
    const id = req.params.id;

    const mensagem = mensagens[id - 1];

    res.send(mensagem);
});

// Update
app.put('/mensagem/:id', function (req, res) {
    const id = req.params.id;
    const texto = req.body.texto;

    mensagens[id - 1] = texto;

    res.send(`A mensagem de ID '${id}' foi editada com sucesso para o texto '${texto}'.`);
});

// Delete
app.delete('/mensagem/:id', function (req, res) {
    const id = req.params.id;

    delete mensagens[id - 1];

    res.send(`A mensagem de ID '${id}' foi removida com sucesso.`);
});

app.listen(port, function () {
    console.log('App rodando em http://localhost:' + port);
});