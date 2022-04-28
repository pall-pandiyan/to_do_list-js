const form_input = document.getElementById("form_input");
const input_text = document.getElementById("input_text");
const button_clear = document.getElementById("button_clear");
const ul_list = document.getElementById("ul_list");

input_text.focus();

const addItem = text => {
    let newItem = `<li>${text} <button onclick="deleteItem(this.parentElement)">x</button></li>`;
    i
    ul_list.insertAdjacentHTML("beforeend", newItem);
    input_text.value = "";
    input_text.focus();
}

form_input.addEventListener("submit", event => {
    event.preventDefault();
    if(input_text.value != "") {
        addItem(input_text.value);
    }
})