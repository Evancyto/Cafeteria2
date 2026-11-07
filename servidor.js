
const express = require('express');
const path = require('path');
require('dotenv').config();

const pedidosRoutes = require('./Backend/Rutas/Pedido');

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.static(
    path.join(__dirname, 'Frontend', 'Paginas')
));

app.use(pedidosRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
