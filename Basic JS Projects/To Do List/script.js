let button = document.querySelector("button");
let input = document.querySelector("#inputBox");
let list = document.querySelector("#listContainer")

function addTask() {
    button.addEventListener("click", function() {
        if (input.value === '') {
            alert("Please write any task.")
        } else {
            const li = document.createElement("li");
            li.innerHTML = input.value;
            list.appendChild(li);
            let span = document.createElement("span");
            span.innerHTML = "\u00d7";
            li.appendChild(span);
            input.value = '';
            saveList();
        }
    })

}

function listFunc() {
    list.addEventListener("click", function(e){
        if (e.target.tagName === "LI") {
            e.target.classList.toggle("checked");
            saveList();
        } else if(e.target.tagName === "SPAN"){
            e.target.parentElement.remove();
            saveList();
        }
    })
}

function saveList(){
    localStorage.setItem("data", list.innerHTML);
};
function showList() {
    list.innerHTML = localStorage.getItem("data");
}

addTask();
listFunc();
showList();