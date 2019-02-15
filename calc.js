function insert(num) {
    document.form.textview.value = document.form.textview.value+num;
}

function equal() {
    const input = document.form.textview.value;
    if (input) {
        var prevText = document.form.textview.value+"=";
        document.form.textview.value = eval(document.form.textview.value);
        var prev = document.getElementById("answer");
        prev.innerHTML = prevText;
    }
}
function ac() {
    document.form.textview.value = "";
}