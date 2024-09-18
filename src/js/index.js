document.getElementById("btnMenu").addEventListener("click", toggleMenu);
document.getElementById("menu1").style.display = "none";

function toggleMenu() {
    var x = document.getElementById("menu1");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}