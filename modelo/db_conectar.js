import mysql from 'mysql'
var conectar = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'admin',
    database : 'distribuidora'
});

conectar.connect( function(err){

    if (err) {
        console.error('error en la conexion ' + err.stack)
        return;
    }
    console.log('conexion exitosa ID '+ conectar.threadId);
});

export{conectar}