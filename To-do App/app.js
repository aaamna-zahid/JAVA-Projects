const item = document.querySelector("#item")
const toDoBox = document.querySelector("#to-do-box")

item.addEventListener(
    "keyup",
    function (event) {
        if (event.key == "Enter") {
            addToDo(this.value)    //here this refers to item
            this.value = ""    //here it is shifted into console but we have to shift it to the box
        }
    }
)

const addToDo = (item) => {
    const listItem = document.createElement("li")
    listItem.innerHTML = ` 
               ${item}
                     <i class="fas fa-times"></i>
                `;

    listItem.addEventListener(
        "click",
        function () {
            this.classList.toggle("done")
            saveToLocalStorage();
        }

    )
    listItem.querySelector("i").addEventListener(
        "click",
        function () {
            listItem.remove()
            saveToLocalStorage();
        }

    )
    toDoBox.appendChild(listItem)
    saveToLocalStorage();
}


// Save to localStorage
const saveToLocalStorage = () => {
    const allListItems = toDoBox.querySelectorAll("li");
    const data = [];

    allListItems.forEach((item)=> {
        data.push({
            text: item.childNodes[0].textContent.trim(),
        });
    });

    if (data.length === 0) {
        localStorage.removeItem("todo-list");
    } else {
        localStorage.setItem("todo-list", JSON.stringify(data));
    }
};