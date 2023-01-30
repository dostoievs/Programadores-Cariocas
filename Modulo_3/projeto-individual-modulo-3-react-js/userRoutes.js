var express = require('express');
var router = express.Router();
 
router.get('/itens', function(req, res) {
    res.send(`Lista todos os itens`);
});
 
router.post('/itens', function(req, res) {
    res.send(`Inclui um itens`);
});
 
router.put('/itens/:id', function(req, res) {
    res.send(`Edita o itens ${req.params.id}`);
});
 
router.delete('/itens/:id', function(req, res) {
    res.send(`Exclui o itens ${req.params.id}`);
});
module.exports = router;