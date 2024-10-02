document.addEventListener("DOMContentLoaded", function () {
    solveTask1();
    solveTask2();
    solveTask3();
    solveTask4();
    solveTask5();
    solveTask6();
    solveTask7();
    solveTask8();
    solveTask9();
});

function solveTask1() {
    document.querySelector('#task1').innerText = "Changed using 'innerText'.";
}

function solveTask2() {
    document.querySelector('#task2').innerHTML = "<button>Submit</button>";
}

function solveTask3() {
    document.body.style.backgroundColor = '#232323';
}

function solveTask4() {
    document.querySelectorAll(".item").forEach(item => {
        item.style.border = "2px solid black";
    });
}

function solveTask5() {
    document.querySelector('#task5').href = 'https://www.springboard.com/';
}

function solveTask6() {
    document.querySelector('#task6').value = 'DOM Master';
}

function solveTask7() {
    const seventhTask = document.querySelector('#task7');
    seventhTask.classList.add('new-class');
}

function solveTask8() {
    const newButton = document.createElement('button');
    newButton.innerText = 'New Button';
    document.getElementById('task8').appendChild(newButton);
}

function solveTask9() {
    const task9El = document.getElementById("task9");
    task9El.parentNode.removeChild(task9El);
}


