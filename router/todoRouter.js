const express = require("express")
const router = express.Router()
const uuidv4 = require('uuid').v4

let todos = [
    {
    id: "haf24jd",
    todo: "do laundry",
    done: "false"
    },
    {
    id: "jp2nkl2",
    todo: "wash dishes",
    done: "true"
    }
    ]
router.get('/get-all-todos', function(req, res){
    res.json(todos)
})

router.get('/get-todo-by-id/:id', function(req, res){
    let idIndex = todos.map(e=>e.id).indexOf(req.params.id)
    if(idIndex>-1){
        res.json(todos[idIndex])
    } else{
        res.json({message:"ID not found"})
    }
})

router.get('/get-todos-by-done/:done', function (req,res){
    let newDoneArray = []
    todos.forEach(item=>{
        if(item.done === req.params.done){
            newDoneArray.push(item)
        }
    })
    res.json(newDoneArray)
})

router.post('/create-new-todo', function(req, res){
    if(!req.body.done){
        let newTodo={"id":req.body.id, "todo":req.body.todo}
        todos.push(newTodo)
    }
    res.json(todos)
})

module.exports = router