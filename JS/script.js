$(document).ready(function(){
    // Function to add new todo item
    $("#todo-form").submit(function(event){
        event.preventDefault(); // Prevent form submission

        // Get the todo text from input
        var todoText = $("#todo-app__container-input-text").val();

        // Append new todo item to the list
        if(todoText.trim() !== "") {
            $("#todo-list").append('<li><div class="todo-app__container-input-circle-shape"></div>' + todoText + '<div class="todo-app__container-cancel-icon"></div></li>');
            // Clear the input field
            $("#todo-app__container-input-text").val("");
            // Update the number of items
            updateItemCount();
        }
    });

    // Function to update the number of items
    function updateItemCount(){
        var nonCanceledItemCount = $("#todo-list li:not(.canceled)").length;
        $("#left-item-number").text(nonCanceledItemCount);
    }

    // Click event listener for the cancel icon
    $("#todo-list").on("click", ".todo-app__container-cancel-icon", function(){
        // event.stopPropagation();
        $(this).closest("li").toggleClass("canceled");
        updateItemCount(); // Update the count of non-canceled items
    });

    // Click event listener for todo text
    $("#todo-list").on("click", "li", function(){
        $(this).toggleClass("canceled");
        updateItemCount(); // Update the count of non-canceled items
    });

    // Click event listener for the ".all-active" button
    $(".all-active").click(function(){
        $("#todo-list li").show();
        updateItemCount(); // Update the count of non-canceled items
        $(".filter-btns").removeClass("active");
        $(this).addClass("active");
    });

    // Click event listener for the ".active-work" button
    $(".active-work").click(function(){
        $("#todo-list li.canceled").hide();
        $("#todo-list li:not(.canceled)").show();
        updateItemCount(); // Update the count of non-canceled items
        $(".filter-btns").removeClass("active");
        $(this).addClass("active");
    });

    // Click event listener for the ".completed-btn" button
    $(".completed-btn").click(function(){
        $("#todo-list li:not(.canceled)").hide();
        $("#todo-list li.canceled").show();
        updateItemCount(); // Update the count of non-canceled items
        $(".filter-btns").removeClass("active");
        $(this).addClass("active");
    });

    // Click event listener for the ".clear-completed-btn" button
    $(".clear-completed-btn").click(function(){
        $("#todo-list li.canceled").addClass("canceled-remove");
        setTimeout(function(){
            $("#todo-list li.canceled-remove").remove();
            updateItemCount();
        }, 500); // Adjust timing to match the CSS animation duration
    });

    $("#todo-list").sortable();

    // Click event listener for the light theme button
    $(".todo-app__light-theme-button").click(function(){
        $("body").removeClass("dark-theme").addClass("light-theme");
        // Toggle visibility of the theme buttons
        $(".todo-app__light-theme-button").hide();
        $(".todo-app__dark-theme-button").show();
        // Apply light theme functionality here
    });

    // Click event listener for the dark theme button
    $(".todo-app__dark-theme-button").click(function(){
        $("body").removeClass("light-theme").addClass("dark-theme");
        // Toggle visibility of the theme buttons
        $(".todo-app__dark-theme-button").hide();
        $(".todo-app__light-theme-button").show();
        // Apply dark theme functionality here
    });
});
