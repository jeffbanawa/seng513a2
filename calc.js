function insert(num) {
    document.form.textview.value = document.form.textview.value+num;
}

function equal() {
    const input = document.form.textview.value;
    if (input) {
        document.form.textview.value = eval(document.form.textview.value);
        var newText = document.form.textview.value;
        var prev = document.getElementById("answer");
        prev.innerHTML = input+"=";
    }
}
function ac() {
    if (document.form.textview.value === "") {
        var prev = document.getElementById("answer");
        prev.innerHTML = "";
    }
    document.form.textview.value = "";
}