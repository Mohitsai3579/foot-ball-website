function myFunction() {
    alert("Subbmitted successfully see youuu sooooon!!!!!!");
}

function mymohit() {
  alert("you are locating to the login pagee");
  window.location.href= 'login.html';
}
function mymini() {
  alert("you are locating to the login pagee");
  window.location.href= 'index.html';
}

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle"
);

ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
  ball.classList.toggle("active");
});

