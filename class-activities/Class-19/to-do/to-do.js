const submitBtn = $(`#to-do-submit`);
const toDoInput = $(`#to-do-input`);
const toDoList = $(`#to-do-list`);

let toDoArray = [];
let count = 0;


$(`#to-do-submit`).on("click",function(event){
    //console.log(event);
    event.preventDefault();
    count++;

    let toDoText = toDoInput.val();
    let newItem = $(`<p id="item${count}">`);
    newItem.text(toDoText);
    let newButton = $(`<button>`);
    newButton.attr("data-to-do",count);
    newButton.addClass("checkbox");
    newButton.text("X");
    newItem.append(newButton);
    toDoList.append(newItem);
})

