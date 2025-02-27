const ringButtons = document.querySelectorAll(".ring-button");

for (let i = 0; i < ringButtons.length; i++) {
  const ringBtn = ringButtons[i];
  ringBtn.addEventListener("click", function (event) {
    const color = event.target.id.replace("-color", "");
    for (let j = 0; j < ringButtons.length; j++) {
      ringButtons[j].classList.remove("border-purple-500");
    }
    event.target.classList.add("border-purple-500");

    const productImage = document.getElementById("product-image");
    productImage.src = "../images/" + color + ".png";
  });
}
