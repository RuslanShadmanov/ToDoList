const input = document.querySelector("#input");
const submitBtn = document.querySelector("button[type='submit']");
const resetBtn = document.querySelector("button[type='reset']");

const ul = document.querySelector("ul");
const form = document.querySelector("form")
const p = document.querySelector(".info")
const showCompletedBtn = document.querySelector(".comleted-button")
const showPendingBtn = document.querySelector(".pending")
const showAllBtn = document.querySelector(".all")
let tasks = [];

const showMsg = (msgText,status) => {
    p.innerText = msgText;
    p.setAttribute("class",status)
    setTimeout(()=>{
        p.innerText= "";
    },2000)

}


form.addEventListener('submit', (e) => {
    e.preventDefault();

    const inputVal = input.value;
    
    if (!inputVal.trim()) {
        showMsg("Please a valid task", "danger")
        return};

        const isFound = tasks.some((task)=>task.name===inputVal)

        // const isFound = tasks.find(task=>task.name===inputVal)

    if (isFound){
   showMsg("This task has already existed","danger")
    return;}

const newTask = {
    name: inputVal,
    id: Date.now(),
    isDone:false,
};

    tasks.push(newTask);
     
    const li = document.createElement("li")
    li.innerText = newTask.name;
    li.setAttribute("id",newTask.id);
    const deleteBtn = document.createElement("button")
    deleteBtn.innerText = "delete"
    deleteBtn.addEventListener("click",(e)=>{
        ul.removeChild(e.target.parentNode);
        tasks = tasks.filter((task)=>task.id !==Number (e.target.parentNode.id))

    })
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox'
    checkbox.addEventListener ('click',(e) => {
        e.target.parentNode.classList.toggle ("completed");
        tasks =tasks.map((task)=>{
            if (task.id=== Number(e.target.parentNode.id)){
                task.isDone = e.target.checked;
            }
            return task;
        })
    })

    li.appendChild(checkbox);
    li.appendChild(deleteBtn);
    ul.appendChild(li);
    showMsg( "Item added succesfully","success")
    
    input.value = "";
})

resetBtn.addEventListener("click",()=>{
    ul.innerHTML = "";
    input.valuev = "";
    tasks.length = 0;
})
showCompletedBtn.addEventListener("click", () => {
    const completed =tasks.filter((task)=>task.isDone===true);
    ul.innerHTML = "";
   completed.forEach((task)=>{
    const li = document.createElement('li');
    li.innerHTML = task.name;
    ul.appendChild(li);
   });
}
)
showPendingBtn.addEventListener("click", () => {
    const pending =tasks.filter((task)=>task.isDone===false);
    ul.innerHTML = "";
   pending.forEach((task)=>{
    const li = document.createElement('li');
    li.innerHTML = task.name;
    ul.appendChild(li);
   });
})
showAllBtn.addEventListener("click", () => {
    ul.innerHTML = "";
   tasks.forEach((task)=>{
    const li = document.createElement('li');
    li.innerHTML = task.name;
    ul.appendChild(li);
   });
})


// newTask.map(()=>{
//     newTask.isDone===true
// })
// console.log (newTask)