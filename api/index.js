var express = require("express");
var bodyParser = require("body-parser");
var cors = require('cors')

var tasks = [];
const SERVER_PORT = 3000;
var app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/tasks", function (req, res, next) {
    res.json(tasks);
});

app.post("/tasks", function (req, res, next) {
    var task = req.body;
    task.id = Date.now();
    tasks.push(task);

    res.sendStatus(201);
});

app.put("/tasks//:id", function(req, res, next) {
    let found = tasks.find(function (item) {
        return item.id === parseInt(req.params.id);
    });

    // check if item found
    if (found) {
        let updated = {
            id: found.id,
            task: req.body.task
        };

        let targetIndex = tasks.indexOf(found);

        tasks.splice(targetIndex, 1, updated);

        res.sendStatus(204);
    } else {
        res.sendStatus(404);
    }
});

app.delete("/tasks/:id", function (req, res, next) {

    let found = tasks.find(function (item) {
        return item.id === parseInt(req.params.id);
    });

    if (found) {
        let targetIndex = tasks.indexOf(found);

        tasks.splice(targetIndex, 1);
    }

    res.sendStatus(204);
});

app.listen(SERVER_PORT, function () {
    console.log(`Server running on port ${SERVER_PORT}`);
});