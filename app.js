// in sublime
var express = require('express');
var port = process.env.PORT || 3000;
var app = express();




app.use(express.json()); // to support JSON-encoded bodies
app.use(express.urlencoded()); //

app.get('/', function (req, res) {
    console.log(req);
    res.json({
        status: true,
        message: "Success"

    });
    // res.send(

    //     JSON.stringify({ Hello: 'World' }));
});
app.listen(port, function () {
    console.log(`Example app listening on port !`);
});