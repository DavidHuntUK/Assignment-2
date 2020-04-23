window.onload = function () {
    // declare variables
    let form = document.getElementById("form");
    let input = document.getElementById("input");
    let btn = document.getElementById("btn");
    let list = document.getElementById("list");
    let btnClear = document.getElementById("btnClear");
    let id = 1;

    //listItem = {item: "todo item", checked: close}
    let liItem = "";
    let toDoList = [];

    // add event listeners for the form buttons
    btn.addEventListener("click", addTodoItem);
    list.addEventListener("click", boxChecked);
    btnClear.addEventListener("click", clearList);

    //input.addEventListener("keydown", addTodoItem);

    if (localStorage.length < 0) {
            btnClear.style.display = "none"; //hide 'clear' button
            this.console.log("button");
    }

    if (localStorage.length <= 0) {
            btnClear.style.display = "none"; //hide 'clear' button
    }

    // function to add items to the todo list
    function addTodoItem() {
            // 3 = signs means absolute
            if (input.value === "") {
                    alert("Error: You must enter an item for your list.");
            }
            else {
                    if(list.style.borderTop === "") {
                            console.log("here..");
                            list.style.borderTop = "2px solid white";
                            btnClear.style.display = "inline";
                    }
                    let text = input.value;
                    let item = `<li id="li-${id}">${text}<input id="box-${id}" class="checkboxes" type="checkbox"></li>`;

                    list.insertAdjacentHTML('beforeend', item);
                    liItem = {item: text, checked: false};
                    toDoList.push(liItem);
                    id++; //increment id by 1
                    addToLocalStorage(); //function call
                    form.reset();
            }
    }
    function boxChecked(event) {
            // change list item styling if the checkbox next to it is clicked
            const element = event.target;
            if (element.type === "checkbox") {
                    element.parentNode.style.textDecoration = "line-through";
                    todoList = JSON.parse(localStorage.getItem("todoList"));
                    todoList[element.id.split('-')[1] - 1].checked = element.checked.toString();
                    localStorage.setItem("todoList", JSON.stringify(todoList));
            }
    }
    function addToLocalStorage() {
            // does the browser support local storage? if not throw an alert
            if (typeof (Storage) !== "undefined") {
                    localStorage.setItem("todoList", JSON.stringify(todoList));
            } else {
                    alert("Your browser does not support local storage. Either upgrade or try a different browser");
            }
    }
    function displayList() {
            list.style.borderTop = "2px solid white";
            todoList = JSON.parse(localStorage.getItem("todoList"));
            todoList.forEach(function (element) {
                    console.log(element.item);
                    let text = element.item;
                    let item = `<li id="li-${id}">${text}<input id="box-${id}" class="checkboxes" type="checkbox"></li>`;
                    list.insertAdjacentHTML("beforeend", item);

                    // alter styling if boxis checked
                    if (element.checked) {
                            let li = document.getElementById("li-" + id);
                            li.style.textDecoration = "line-through";
                            li.childNodes[1].checked = element.checked;
                    }
            });
    }
    function clearList() {
            todoList = [];
            localStorage.clear();
            list.innerHTML = "";
            btnClear.style.display = "none";
            list.style.borderTop = "";
    }
}
