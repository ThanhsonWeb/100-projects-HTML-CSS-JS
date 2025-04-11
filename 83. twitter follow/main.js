let body = document.body;
let theme = document.querySelector(".theme");
const followButtons = document.querySelectorAll(".follow-button");

theme.addEventListener("click", toggleTheme);

function toggleTheme() {
  if (body.className === "light-theme") {
    body.className = "dark-theme";
    theme.innerText = "Light";
  } else {
    body.className = "light-theme";
    theme.innerText = "Dark";
  }
}

followButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => followUnFollow(e.target));
});

function followUnFollow(button) {
  button.classList.toggle("followed");
  if (button.innerText == "Follow") button.innerText = "Unfollow";
  else button.innerText = "Follow";
}