export default function winner({ score }) {
  if (score === 10) {
    const winPopUp = document.querySelector(".winPopUp");
    const main = document.querySelector(".wholePage");
    return (winPopUp.style.display = "flex"), (main.style.display = "none");
  }
}
