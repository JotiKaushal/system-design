const express = require('express');
const app = express();
const PORT = 3000;
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.all('/', (req, res) => {
    console.log(req);
    console.log(res);
    res.send("I'm up!!!")
})


const todos = [{ id: 1, title: "task1", completed: false }, { id: 2, title: "task2", completed: false }, { id: 3, title: "task3", completed: false }]

//create
app.post('/todos', (req, res) => {
    const newTodo = req.body;
    todos.push(newTodo);
    res.status(201).json({ message: "new todo added" })
})

//read
app.get('/todos', (req, res) => {
    res.json(todos)
})

//update
app.put('/todos/:id', (req, res) => {
    const newTodoData = req.body;
    const todoId = req.params.id;
    const todoIndex = todos.findIndex(todo => todo.id === +todoId);
    if (todoIndex !== -1) {
        todos[todoIndex] = {
            id: todoId,
            ...newTodoData
        }
    }else{
        res.status(400).send("todo does not exist");
    }
    res.json({ message: "todo updated" })
})

//delete
app.delete('/todos/:id', (req, res) => {
    const todoId = req.params.id;
    const todoIndex = todos.findIndex(todo => todo.id === +todoId);

    if (todoIndex !== -1) {
        todos.splice(todoIndex, 1)
    }
    res.json({ message: "todo deleted" })
})

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);

})