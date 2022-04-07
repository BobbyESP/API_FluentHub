import jsonwebtoken from "jsonwebtoken";
import express from "express";
import bcrypt from "bcrypt";
import finalPass from "../getEncryptedPass.js"

var validToken;

const Router = express.Router();

Router.post("/", async (req, res)=> {
    //Data
    const apps = [{ app: "FluentHub", guid: finalPass}]

    let app = apps.find(a => a.app === req.body.app);
    if(!app) {
        res.send({ ok: false, error: "Invalid app name"});
        return;
    }

    const valid = await bcrypt.compare(req.body.guid, app.guid);
    if(!valid){
        res.send({ ok: false, error: "Invalid GUID"});
        return;
    }
    
    const token = jsonwebtoken.sign({
        id: app._id
    }, "jwtPrivateKey", { expiresIn: "15m"});

    res.send({
        ok: true,
        token: token
    });
});

Router.get("/", async (req, res) => {
    res.send({
        ok: true,
        result: "Hmmm... I think that this is not what you wanted. Try making a POST request"
    });
});

module.exports = router;
