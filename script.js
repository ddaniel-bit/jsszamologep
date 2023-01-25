function megszerkesztheto() {
    var a = parseFloat(document.getElementById("egyikb").value)
    var b = parseFloat(document.getElementById("masikb").value)
    var c = parseFloat(document.getElementById("a").value)
    if (a+b>c && a+c>b && b+c>a){
        alert("Szerkeszthető")
    } 
    else {
        alert("Nem szerkeszthető")
    }
}
function veletlen() {
    document.getElementById("egyikb").value = parseInt((Math.random()*(91)+10))
    document.getElementById("masikb").value = parseInt((Math.random()*(91)+10))
    document.getElementById("a").value = parseInt((Math.random()*(91)+10))
}
function atfogo() {
    document.getElementById("a").value = Math.sqrt(Math.pow(parseFloat(document.getElementById("egyikb").value), 2) + Math.pow(parseFloat(document.getElementById("masikb").value), 2))
}