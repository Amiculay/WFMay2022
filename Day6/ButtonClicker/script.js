var count = 0;

function status() {
    var signing = document.querySelector('button');
    count++;
    if(count % 2 == 0) {
        signing.innerText = "Login";
        console.log("Logging in", count);
    } else {
        signing.innerText = "Logout";
        console.log("Logging out", count);
    }
}

function remove() {
    var deleteButton = document.getElementById('add');
    deleteButton.remove();
}

function message() {
    alert("Ninja was liked");
}