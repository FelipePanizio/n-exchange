const cors = require("cors");
const express = require("express");
const app = express();
const axios = require("axios");

var currency = "https://api.n.exchange/en/api/v1/currency/";

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.render("index.html")
});


app.get("/currency", async (req, res) => {
    const { data } = await axios(currency);
    
    return res.json(data);


});

app.get("/currency/:a", async (req, res) => {

    const { a } = req.params;
    var code = a.toUpperCase();

    const { data } = await axios(currency);
    const codigo = data.find(cod => cod.code == code);

    return res.json(codigo);

});

app.post("/clients", function (req, res) { });
app.put("/clients/:id", function (req, res) { });
app.delete("/clients/:id", function (req, res) { });


app.listen(3000);