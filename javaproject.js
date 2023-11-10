
let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let spring = "";

let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            spring = String(eval(spring));
            input.value = spring;
        }
        else if(e.target.innerHTML == 'AC'){
            spring = "";
            input.value = spring;
        } 
        else if(e.target.innerHTML == 'DEL')
        {
            spring = string.substring(0,string.length-1);
            input.value = spring;  
        }
        else {
            spring += e.target.innerHTML;
            input.value = spring;
        }
    });
});
