const input = document.querySelector("#input");
const submitBtn = document.querySelector("button[type='submit']");
const resetBtn = document.querySelector("button[type='reset']");

const ul = document.querySelector("ul");
const form = document.querySelector("form")
const p = document.querySelector(".info")
const tasks = [];

const showMsg = (msgText,status) => {
    p.innerText = msgText;
    p.setAttribute("class",status)
    setTimeout(()=>{
        p.innerText= "";
    },2000)

}


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const newTask =input.value;
    if (!newTask.trim()) {
        showMsg("Please a valid task", "danger")
        return};
    if (tasks.includes(newTask)){
   showMsg("This task has already existed","danger")
    return;}
    tasks.push(newTask);
    
    ul.innerHTML+=`<li>${newTask}</li>`
    showMsg( "Item added succesfully","success")
    
    input.value = "";
})

resetBtn.addEventListener("click",()=>{
    ul.innerHTML = "";
    input.valuev = "";
    tasks.length = 0;
});