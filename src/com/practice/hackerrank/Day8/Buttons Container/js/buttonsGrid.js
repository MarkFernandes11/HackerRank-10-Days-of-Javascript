let button_ids = [1, 2, 3, 6, 9, 8, 7, 4];
let button_values = [1, 2, 3, 6, 9, 8, 7, 4];

let btn5 = document.getElementById("btn5");

btn5.onclick=function() {
    button_values.unshift(button_values.pop());

    for (i=0; i<=7; i++) {
        document.getElementById("btn"+button_ids[i]).innerHTML=button_values[i];
    }
}