const list = document.querySelector("Ul");
const input = document.querySelector("Input");
const button = document.querySelector("Button");
function PokeAdd() {
    let name = input.value;
    input.value = "";
    let myList = document.getElementsByTagName("UL")[0];
    let newItem = document.createElement("Li");
    let btn = document.createElement("Button");
    let text = document.createElement("Spam");
    newItem.appendChild(text);
    text.textContent = name;
    newItem.appendChild(btn);
    btn.textContent = "Excluir";
    myList.appendChild(newItem);
    btn.onclick = function(element) {
        myList.removeChild(newItem);}
    input.focus();
}
