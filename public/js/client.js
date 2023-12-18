const deleteBtn = document.querySelectorAll('.del')
const todoItem = document.querySelectorAll('span.not')
//const todoComplete = document.querySelectorAll('div.movies-watched')
const todoComplete = document.querySelectorAll('div.movies-watched')


// using range bar to rate the movie from 1 to 5 
// const rangeBarJS = document.getElementById("rangeBar")
// const rangeValueJS = document.getElementById("rangeValue")

// rangeBarJS.addEventListener("input",() => {
//     rangeValueJS.innerHTML = rangeBarJS.value(Number)
// })


const rangebar = document.getElementById("rangebar");
const rangeval = document.getElementById("rangeval");

rangebar.addEventListener("input", function() {
  rangeval.innerHTML = rangebar.value;
});


Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteTodo)
})

Array.from(todoItem).forEach((el)=>{
    el.addEventListener('click', markComplete)
})

Array.from(todoComplete).forEach((el)=>{
    el.addEventListener('click', rateMovie)
})

// Array.from(todoComplete).forEach((el)=>{
//     el.addEventListener('click', markIncomplete)
// })

async function deleteTodo(){
    const todoId = this.parentNode.dataset.id
    try{
        const response = await fetch('todos/deleteTodo', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markComplete(){
    //const todoId = this.parentNode.dataset.completed
    const todoComplete = this.parentNode.dataset.completed
    try{
        const response = await fetch('/updatePost', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoCompleteFromJSFile': todoComplete
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markIncomplete(){
    const todoId = this.parentNode.dataset.id
    try{
        const response = await fetch('todos/markIncomplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}