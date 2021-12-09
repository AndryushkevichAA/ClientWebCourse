document.addEventListener("DOMContentLoaded", function () {
    var todoList = document.getElementById("todo-list");
    var newTodoText = document.getElementById("new-todo-text");
    var newTodoButton = document.getElementById("new-todo-button");

    newTodoButton.addEventListener("click", function () {
        var text = newTodoText.value.trim();

        newTodoText.classList.remove("invalid");

        if (text.length === 0) {
            newTodoText.classList.add("invalid");
            return;
        }

        var todoItem = document.createElement("li");

        function setEditMode() {
            todoItem.innerHTML = "<input class=\"edit-todo-text\">"
                + "<button class=\"cancel-button\" type=\"button\">Cancel</button>"
                + "<button class=\"save-button\" type=\"button\">Save</button>";

            todoItem.querySelector(".edit-todo-text").value = text;

            todoItem.appendChild(document.querySelector(".error-message").cloneNode(true));

            todoItem.querySelector(".save-button").addEventListener("click", function () {
                var newText = todoItem.querySelector(".edit-todo-text").value.trim();

                if (newText.length === 0) {
                    todoItem.querySelector(".edit-todo-text").classList.add("invalid");
                    return;
                }

                text = newText;
                setViewMode();
            });

            todoItem.querySelector(".cancel-button").addEventListener("click", function () {
                setViewMode();
            });
        }

        function setViewMode() {
            todoItem.innerHTML = "<button class=\"delete-button\" type=\"button\">X</button> "
                + "<span class=\"todo-text\"></span> "
                + "<button class=\"edit-button\" type=\"button\">Edit</button>";

            todoItem.querySelector(".todo-text").textContent = text;

            todoItem.querySelector(".edit-button").addEventListener("click", function () {
                setEditMode();
            });

            todoItem.querySelector(".delete-button").addEventListener("click", function () {
                todoItem.remove();
            });
        }

        setViewMode();

        todoList.appendChild(todoItem);

        newTodoText.value = "";
    });
});