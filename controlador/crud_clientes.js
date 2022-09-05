import express from "express"
import { conectar } from "../modelo/db_conectar.js"
var crud_cliente = ({})
crud_cliente.leer = (req, res) => {

    conectar.query('select * from clientes',(error,results)=>{

        if (error){
            throw error;
        }else{
            res.render('clientes/index',{resultado:results})
        }
    })

};

crud_cliente.cud = (req, res) => {

    const btn_crear = req.body.btn_crear;
    const btn_actualizar = req.body.btn_actualizar;
    const btn_borrar = req.body.btn_borrar;
    const id = req.body.txt_id;
    const codigo = req.body.txt_codigo;
    const nombre = req.body.txt_nombre;
    const direcccion = req.body.txt_direcccion;
    const telefono = req.body.txt_telefono;

    if(btn_crear){
        
        conectar.query('insert into clientes set ?',
        {id:id, codigo:codigo, nombre:nombre, direcccion:direcccion, 
        telefono:telefono},(error,results)=>{

            if(error){
                console.log(error);
            }else{
                res.redirect('/');
            }
        });
    }

    if(btn_actualizar){

        conectar.query('update clientes set ? where id = ?', 
        [{id:id, codigo:codigo, nombre:nombre, direcccion:direcccion, 
        telefono:telefono},id],(error,results)=>{

            if(error){
                console.log(error);
            }else{
                res.redirect('/');
            }
        });
    }

    if (btn_borrar){

        conectar.query('delete from clientes where id = ?', 
        [id],(error,results)=>{

            if(error){
                console.log(error);
            }else{
                res.redirect('/');
            }
        });
    }
};

export {crud_cliente}