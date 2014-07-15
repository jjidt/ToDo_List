$(document).ready(function() {
  $("form#toDo").submit(function(event) {
    event.preventDefault();

    var inputtedTask = $("input#task-to-add").val();
    var inputtedDeadline = $("input#date").val();
    alert(inputtedTask);
    alert(inputtedDeadline);


    var newTask = { "task": inputtedTask, "deadline": inputtedDeadline };

    $("ul#taskList").append("<li>" + newTask.task + " should be completed by " + newTask.deadline + "</li>");

    $("input#task-to-add").val("");
    $("input#date").val("");


    
    
  });
});