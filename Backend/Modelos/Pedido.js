
const conexion = require('../Config/dbl');

async function registrarPedido(
    nombre,
    correo,
    producto,
    cantidad,
    tamano,
    llevar,
    observaciones
) {

    const db = await conexion();

    const sql = `
        INSERT INTO pedidos
        (nombre, correo, producto, cantidad, tamano, llevar, observaciones)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    try {

        const [resultado] = await db.execute(sql, [
            nombre,
            correo,
            producto,
            cantidad,
            tamano,
            llevar,
            observaciones
        ]);

        return resultado.insertId;

    } finally {
        await db.end();
    }

}

module.exports = {
    registrarPedido
};

