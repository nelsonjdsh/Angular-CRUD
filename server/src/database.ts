import { createPool } from "mysql2/promise";


// Conexion con la base de datos
export async function connect() {
    const connection = await createPool({
        host: "localhost",
        user: "root",
        password: "secret23",
        port: 3306,
        database: "BANCOJSH"
    })
    return connection;
}

// CREATE TABLE TBL_cliente(
//     id_cliente INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
//     Nombre_cliente VARCHAR(180) NOT NULL,
//     apellido_cliente VARCHAR(180) NOT NULL,
//     cedula_cliente VARCHAR(180) NOT NULL,
//     correo_cliente VARCHAR(180) NOT NULL,
//     telefono_cliente VARCHAR(180) NOT NULL,
// );
