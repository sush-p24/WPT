const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");

app.use(cors());

const {selectAllUser,addUser} = require("./user");
const res = require("express/lib/response");

app.get ("/user", async(req,res) => {
    const list = await selectAllUser();
    res.json(list);
});

app.post("/add-user", async (req,res) => {
    const user= req.body;
    await addUser(user);
    res.json({Messsage : "message sent"});
});

app.listen(3010,()=>console.log("SERVER STARTED"));