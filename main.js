



var calculate = document.querySelector ('#button');
console.dir (calculate);

var first = document.querySelector ('#input1');
console.dir (first);

var second = document.querySelector ('#input2');
console.dir (second);

var answer = document.querySelector ('#output');
console.dir (answer)

calculate.onclick = action;

function action() {
  answer.value =  Number(first.value) + Number(second.value);
}
