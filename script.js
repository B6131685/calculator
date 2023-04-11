const toggleButtonEL = document.querySelector(".theme-selector");
const HTML = document.querySelector("html");
const SCREEN = document.querySelector(".screen");
let result = 0;
SCREEN.innerHTML = result;
let worngFloat = false // 2.00.33 ❗❗❗ 
function btn1() {
  HTML.setAttribute("data-theme", "1");
  toggleButtonEL.setAttribute("data-select", "1");
}

function btn2() {
  HTML.setAttribute("data-theme", "2");
  toggleButtonEL.setAttribute("data-select", "2");
}

function btn3() {
  HTML.setAttribute("data-theme", "3");
  toggleButtonEL.setAttribute("data-select", "3");
}

function reset() {
  worngFloat = false;
  SCREEN.innerHTML = "0";
}

function del() {
  if (SCREEN.innerHTML.length !== 1) {
    let arrstr = Array.from(SCREEN.innerHTML);
    arrstr.pop();
    SCREEN.innerHTML = arrstr.join("");
  } else if (SCREEN.innerHTML.length === 1 && SCREEN.innerHTML !== "0") {
    SCREEN.innerHTML = "0";
  }
}

function isNumber(value) {
  // *** typeof NaN --> "number" !!!
  // isFinite(Number(value)) --> if NaN return false
  return typeof Number(value) === "number" && isFinite(Number(value));
}

function type(letter) {
  if (isNumber(letter)) {
    if (SCREEN.innerHTML === "0") {
      SCREEN.innerHTML = letter;
    } else {
      SCREEN.innerHTML += letter;
    }
  } else {

    let arrstr = Array.from(SCREEN.innerHTML);
    const lastchar = arrstr[arrstr.length - 1];
    switch (true) {
      case letter === "." && lastchar === ".":
        break;
      case letter === "." && isNumber(lastchar) && !worngFloat:
        worngFloat = true;
        SCREEN.innerHTML += letter;
        break;
      case (!isNumber(letter)) && (!isNumber(lastchar)):
        if(letter === '.' && !worngFloat){
          SCREEN.innerHTML = arrstr.join("") + letter;
          worngFloat = false;
        }else if(letter !== '.'){
          worngFloat = false;
          arrstr.pop();
          SCREEN.innerHTML = arrstr.join("") + letter;
        }
        break;
      case (!isNumber(letter) && letter !=='.') :
        worngFloat = false;
        SCREEN.innerHTML += letter;
        break;
      default:
        break;
    }
  }
}


function calc(){
  try {
      expression = SCREEN.innerHTML.replace(/x/g, '*');
      SCREEN.innerHTML = eval(expression);
    } catch (e) {
      console.log("Invalid Expression");
      SCREEN.innerHTML = 0;
    }
}