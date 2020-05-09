const btnDigits = document.querySelectorAll('.digits button');
btnDigits.forEach( digit => digit.addEventListener('click', digitPressed));

const display = document.querySelector('.display');

function digitPressed(ev) {
   display.value += ev.target.innerText;
}

const btnDecimal = document.querySelectorAll('.decimal button');
btnDecimal.forEach( digit => digit.addEventListener('click', decimalPressed));
 
function decimalPressed() {
   display.value += ;
}


function operPressed(ev) {
   display.value += ev.target.innerText;
}

const btnEq = document.querySelector('.eq');
btnEq.addEventListener('click', eqPressed);

function eqPressed() {
    display.value = eval(display.value);
}
