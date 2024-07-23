const checkbox = document.getElementById("checkbox");
const checkboxText = document.querySelector(".checkbox__label--text");

checkbox.addEventListener("change", () => {
  const delayedText1 = `<span class="delayed-text delayed-text1">Kinda!</span>`;
  const delayedText2 = `<span class="delayed-text delayed-text2">Right?</span>`;

  if (checkbox.checked) {
    checkboxText.innerHTML = `<span>Now you do not! ${delayedText1}</span> <span>${delayedText2}</span>`;
    // checkbox.classList.remove("ticker");
  } else {
    checkboxText.textContent = "Now you see me!";
    // checkbox.classList.add("ticker");
  }
});

console.log(checkbox);
