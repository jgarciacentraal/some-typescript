"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1["default"].get(url).then(function (res) {
    var toDo = res.data;
    var id = toDo.id;
    var title = toDo.title;
    var completed = toDo.completed;
    logToDo(id, title, completed);
});
var logToDo = function (id, title, completed) {
    console.log("\n    id: " + id + "\n    title: " + title + "\n    completed: " + completed + "\n  ");
};
