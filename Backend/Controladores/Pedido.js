
const pedidoModel = require('../Modelos/Pedido');

async function recibirPedido(req, res) {

    try {

        const nombre = req.body.nombre;
        const correo = req.body.correo;
        const producto = req.body.producto;
        const cantidad = Number(req.body.cantidad);
        const tamano = req.body.tamano;
        const llevar = req.body.llevar || 'No';
        const observaciones = req.body.observaciones || '';

        if (
            typeof nombre !== 'string' || !nombre.trim() ||
            typeof correo !== 'string' || !correo.trim() ||
            typeof producto !== 'string' || !producto.trim() ||
            !Number.isInteger(cantidad) || cantidad < 1 ||
            typeof tamano !== 'string' || !tamano.trim() ||
            typeof observaciones !== 'string'
        ) {
            return res.status(400).send('Datos del pedido inválidos');
        }

        const parametros = new URLSearchParams({
            nombre: nombre.trim(),
            correo: correo.trim(),
            producto: producto.trim(),
            cantidad: cantidad,
            tamano: tamano,
            llevar: llevar,
            observaciones: observaciones
        });

        res.redirect('/resumen.html?' + parametros.toString());

    } catch (error) {

        console.error(error);
        res.status(500).send('Error al recibir el pedido');

    }

}

async function registrarPedido(req, res) {

    try {

        const nombre = req.body.nombre;
        const correo = req.body.correo;
        const producto = req.body.producto;
        const cantidad = Number(req.body.cantidad);
        const tamano = req.body.tamano;
        const llevar = req.body.llevar || 'No';
        const observaciones = req.body.observaciones || '';

        if (
            typeof nombre !== 'string' || !nombre.trim() ||
            typeof correo !== 'string' || !correo.trim() ||
            typeof producto !== 'string' || !producto.trim() ||
            !Number.isInteger(cantidad) || cantidad < 1 ||
            typeof tamano !== 'string' || !tamano.trim() ||
            typeof observaciones !== 'string'
        ) {
            return res.status(400).send('Datos del pedido inválidos');
        }

        const id = await pedidoModel.registrarPedido(
            nombre.trim(),
            correo.trim(),
            producto.trim(),
            cantidad,
            tamano,
            llevar,
            observaciones
        );

        res.send(`
            <!DOCTYPE html>
            <html lang="es">
            <head>
                <meta charset="UTF-8">
                <title>Pedido registrado</title>
                <link rel="stylesheet" href="/style.css">
            </head>
            <body>
                <h1>Pedido registrado correctamente</h1>
                <form>
                    <p>Tu pedido fue guardado en la base de datos.</p>
                    <label>Folio del pedido:</label>
                    <p>${id}</p>
                    <div class="botones">
                        <a href="/formulario.html">Regresar a la cafetería</a>
                    </div>
                </form>
            </body>
            </html>
        `);

    } catch (error) {

        console.error('Error al registrar pedido:', error);
        res.status(500).send('Error al guardar el pedido');

    }

}

module.exports = {
    recibirPedido,
    registrarPedido
};


