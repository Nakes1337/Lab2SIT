const express = require("express");

const app = express();
var names = [];

app.get("/", function (request, response) {
    response.send("<h1>Main page</h1>");
});

app.post("/create", function (request, response) {
    names = request.query.name;
    response.send(names);
});

app.get("/list", function (request, response) {
    let responseText = "<ul>";
    for (let i = 0; i < names.length; i++) {
        responseText += names[i];
        if (i !== names.length - 1) {
            responseText += " , ";
        }
    }
    responseText += "</ul>";
    response.send(responseText);
});

app.listen(1337);
