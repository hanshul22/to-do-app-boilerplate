var listofActivites = [];

var input = document.getElementById("input");

var todolist = document.getElementById("todolist")
document.getElementById("button").onclick = click;

function click() {
    listofActivites.push(input.value);
    console.log(listofActivites);
    input.value = "";
    showList();
}

function showList() {
    todolist.innerHTML = "";
    listofActivites.forEach(function(n,i) {
      todolist.innerHTML += 
      "<li>" +
      n +
      "<a onclick='editItem("+
      i +
      ")'>Edit</a>"+
      "<a onclick = 'deleteItem(" +
      i + 
      ")'>&times | </a></li>";

    });
}
function deleteItem(i){
    listofActivites.splice(i,1);
    showList();

}
function editItem(i){
    var x = prompt ("please enter your new value");
    listofActivites.splice(i,1,x);
    showList();
}
