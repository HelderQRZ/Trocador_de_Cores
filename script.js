function aleatorio() {
    var r = Math.floor(Math.random() * 256)
    var g = Math.floor(Math.random() * 256)
    var b = Math.floor(Math.random() * 256)
    document.body.style.background = `rgb(${r}, ${g}, ${b})`

}
function vermelho() {
    document.body.style.background = 'rgb(228, 57, 57)'
}
function azul() {
    document.body.style.background = 'rgb(83, 84, 173)'
}
function verde() {
    document.body.style.background = 'rgb(90, 231, 24)'
}
function branco() {
    document.body.style.background = 'rgb(255,255,255)'
}