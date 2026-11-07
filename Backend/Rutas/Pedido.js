
const express = require('express');
const router = express.Router();

const pedidosController = require('../Controladores/Pedido');

router.post('/recibirPedido', pedidosController.recibirPedido);

router.post('/pedido', pedidosController.registrarPedido);

module.exports = router;
