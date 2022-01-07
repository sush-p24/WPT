const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

let dbinfo={

    host:"localhost",
    user:"root",
    password: "cdac",
    database: "react"
};
const selectAllUser = async ()=>{
const connection = mysql.createConnection(dbinfo);

connection.connectAsync();

console.log("SERVER STARTED");
let sql = `select * from message`;
const list = await connection.queryAsync(sql);
console.log(list);
connection.endAsync();
};

const addUser = async(user) => {

    const connection = mysql.createConnection(dbinfo);

connection.connectAsync();
let sql = `insert into message(msg) values (?)`;
connection.queryAsync(sql,[user.msg]);
connection.endAsync();
};

const user ={
    msg: "hi sush!! how are you?",
};

addUser(user);
module.exports ={selectAllUser,addUser};