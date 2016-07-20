var i = 1;
function cgbg() {
    i++;
    if (i == 9)i = 1;
    if (i % 2 == 0) {
        document.body.style.backgroundColor = "#fff";
    } else {
        document.body.style.backgroundColor = "#000";
    }
}
setInterval(cgbg, 100);
