function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

let career = document.querySelector("#second-text")
function changeText(){
    setTimeout(() => {
        career.textContent = "Python developper"
    }, 0);
    setTimeout(() => {
        career.textContent = "Backend developper"
    }, 4000);
    setTimeout(() => {
        career.textContent = "Future AI engineer"
    }, 8000);
}
changeText();
setInterval(changeText, 12000);
