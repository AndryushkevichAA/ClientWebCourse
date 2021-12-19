$(function () {
    var todoList = $("#todo-list");
    var newTodoText = $("#new-todo-text");
    var newTodoButton = $("#new-todo-button");

    newTodoButton.click(function () {
        var text = newTodoText.val().trim();

        newTodoText.removeClass("invalid");

        if (text.length === 0) {
            newTodoText.addClass("invalid");
            return;
        }

        var todoItem = $("<li>");

        function setEditMode() {
            todoItem.html("<input class=\"edit-todo-text\">"
                + "<button class=\"cancel-button\" type=\"button\">Cancel</button>"
                + "<button class=\"save-button\" type=\"button\">Save</button>");

            todoItem.find(".edit-todo-text").val(text);

            todoItem.append(document.querySelector(".error-message").cloneNode(true));

            todoItem.find(".save-button").click(function () {
                var newText = todoItem.find(".edit-todo-text").val().trim();

                if (newText.length === 0) {
                    todoItem.find(".edit-todo-text").addClass("invalid");
                    return;
                }

                text = newText;
                setViewMode();
            });

            todoItem.find(".cancel-button").click(function () {
                setViewMode();
            });
        }

        function setViewMode() {
            todoItem.html("<button class=\"delete-button\" type=\"button\">X</button> "
                + "<span class=\"todo-text\"></span> "
                + "<button class=\"edit-button\" type=\"button\">Edit</button>");

            todoItem.find(".todo-text").text(text);

            todoItem.find(".edit-button").click(function () {
                setEditMode();
            });

            todoItem.find(".delete-button").click(function () {
                todoItem.remove();
            });
        }

        setViewMode();

        todoList.append(todoItem);

        newTodoText.val("");
    });
});