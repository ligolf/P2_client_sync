$(document).ready(function () {
    // Getting a reference to the input field where user adds a new todo
    var $newItemInput = $("input.new-item");
    // Our new todos will go inside the todoContainer
    var $openitemContainer = $(".openitem-container");
    // Adding event listeners for deleting, editing, and adding todos
    $(document).on("click", "button.delete", deleteTodo);
    $(document).on("click", "button.complete", toggleComplete);
    $(document).on("click", ".todo-item", editTodo);
    $(document).on("keyup", ".todo-item", finishEdit);
    $(document).on("blur", ".todo-item", cancelEdit);
    $(document).on("submit", "#todo-form", insertTodo);

    // Our initial todos array
    var openitem = [];

    // Getting todos from database when page loads
    getOpenitems();

    // This function resets the todos displayed with new todos from the database
    function initializeRows() {
        $openitemContainer.empty();
        var rowsToAdd = [];
        for (var i = 0; i < openitem.length; i++) {
            rowsToAdd.push(createNewRow(openitem[i]));
        }
        $openitemContainer.prepend(rowsToAdd);
    }

    // This function grabs todos from the database and updates the view
    function getOpenitems() {
        $.get("/api/openitem", function (data) {
            openitem = data;
            initializeRows();
        });
    }

    // This function deletes a todo when the user clicks the delete button
    function deleteOpenitems(event) {
        event.stopPropagation();
        var id = $(this).data("id");
        $.ajax({
            method: "DELETE",
            url: "/api/openitem/" + id
        }).then(getOpenitems);
    }

    // This function handles showing the input box for a user to edit a todo
    function editOpenitems() {
        var currentOpenitems = $(this).data("openitem");
        $(this).children().hide();
        $(this).children("input.edit").val(currentOpenitems.text);
        $(this).children("input.edit").show();
        $(this).children("input.edit").focus();
    }

    // Toggles complete status
    function toggleComplete(event) {
        event.stopPropagation();
        var openitem = $(this).parent().data("openitem");
        openitem.complete = !openitem.complete;
        updateopenitem(openitem);
    }

    // This function starts updating a todo in the database if a user hits the "Enter Key"
    // While in edit mode
    function finishEdit(event) {
        var updatedOpenitems = $(this).data("openitem");
        if (event.which === 13) {
            updatedOpenitems.text = $(this).children("input").val().trim();
            $(this).blur();
            updateTodo(updatedOpenitems);
        }
    }

    // This function updates a todo in our database
    function updateOpenitems(openitem) {
        $.ajax({
            method: "PUT",
            url: "/api/openitem",
            data: openitem
        }).then(getOpenitems);
    }

    // This function is called whenever a todo item is in edit mode and loses focus
    // This cancels any edits being made
    function cancelEdit() {
        var currentOpenitems = $(this).data("openitem");
        if (currentOpenitems) {
            $(this).children().hide();
            $(this).children("input.edit").val(currentOpenitems.text);
            $(this).children("span").show();
            $(this).children("button").show();
        }
    }

    // This function constructs a todo-item row
    function createNewRow(openitem) {
        var $newInputRow = $(
            [
                "<li class='list-group-item todo-item'>",
                "<span>",
                openitem.text,
                "</span>",
                "<input type='text' class='edit' style='display: none;'>",
                "<button class='delete btn btn-danger'>x</button>",
                "<button class='complete btn btn-primary'>✓</button>",
                "</li>"
            ].join("")
        );

        $newInputRow.find("button.delete").data("id", openitem.id);
        $newInputRow.find("input.edit").css("display", "none");
        $newInputRow.data("openitem", openitem);
        if (openitem.complete) {
            $newInputRow.find("span").css("text-decoration", "line-through");
        }
        return $newInputRow;
    }

    // This function inserts a new todo into our database and then updates the view
    function insertOpenitems(event) {
        event.preventDefault();
        var openitem = {
            catagory: $newItemInput.val().trim(),

        };

        $.post("/api/openitem", openitem, getOpenitems);
        $newItemInput.val("");
    }
});