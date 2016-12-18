var fs = require('fs');
var express = require('express');
var app = express();
var port = 8080;
var obj;
var userInp = process.argv;
var inpTxt;
app.listen(port, function (err) {
    if (err) throw (error);
    console.log("server is running on Localhost:8080")
})

app.get('/todos', function (req, res) {
    
    res.set({
        'Content-Type':'Application/JSON',
    })
    .status(200)
    // listTodos();
    .send(obj)
    

})

app.delete('/todos/todo:id', function(req, res) {
    inpTxt = req.params.id;
    remove(inpTxt);
    res.set({
        'Content-Type':'Application/JSON',
    })
    .status(200).send(obj)
})

app.patch('/todo', function(req, res){
    res.set({
        'Content-Type': 'Application/JSON',
    })
    .status(201).send({todos:[]})
})











function listTodos() {
  fs.readFile('todos.json','UTF-8', function(err, data){
    obj = JSON.parse(data);
    console.log(obj.todos);
  });
};

listTodos();


function remove() {
    var todosArr = obj.todos;
    todosArr.splice(inpTxt,1);
    obj = JSON.stringify(obj);
    fs.writeFile('todos.json',obj, function(err){
      if (err) throw err;
    });
  
}