export default function playAgainLoser() {
  const losePopUp = document.querySelector(".losePopUp");
  const main = document.querySelector(".wholePage");
  return (losePopUp.style.display = "none"), (main.style.display = "flex");
}
