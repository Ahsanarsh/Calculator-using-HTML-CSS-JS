function getValue(num) {
  let inputValue = document.getElementById("inputValue");
  inputValue.value += num;
}

function answer() {
  let inputValue = document.getElementById("inputValue");
  let result = eval(inputValue.value);
  inputValue.value = result;
}
function del() {
  let inputValue = document.getElementById("inputValue");
  let editValue = inputValue.value.slice(0, -1);
  inputValue.value = editValue;
}
function allClear() {
  let inputValue = document.getElementById("inputValue");
  inputValue.value = "";
}
