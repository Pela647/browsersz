function myFunction() {
    var elemw = "Height: " + document.documentElement.clientWidth + "px",
        elemh = "Width: " + document.documentElement.clientHeight + "px";
    document.getElementById('sizeh').innerHTML = (elemw);
    document.getElementById('sizew').innerHTML = (elemh);
}
