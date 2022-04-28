const form_input = document.getElementById("form_input");
const input_text = document.getElementById("input_text");
const button_clear = document.getElementById("button_clear");
input_text.focus();

form_input.addEventListener("submit", event => {
    event.preventDefault();
    if(input_text.value != "") {
        alert(input_text.value);

        input_text.value = "";
        input_text.focus();
    }
})