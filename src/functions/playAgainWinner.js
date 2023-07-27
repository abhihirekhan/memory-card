export default function playAgainLoser() {
  const winPopUp = document.querySelector(".winPopUp");
  const main = document.querySelector(".wholePage");
  return (winPopUp.style.display = "none"), (main.style.display = "flex");
}
