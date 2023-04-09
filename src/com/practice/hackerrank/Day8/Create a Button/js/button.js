function increment() {
    let element = document.getElementById("btn");
    let value = element.value;
    element.setAttribute('value', Number(value)+1);
}