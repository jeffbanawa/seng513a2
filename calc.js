function insert(num) {
    document.form.textview.value = document.form.textview.value+num
}

function equal() {
    const input = document.form.textview.value
    if (input) {
        document.form.textview.value = eval(document.form.textview.value)
    }
}
function ac() {
    document.form.textview.value = ""
}