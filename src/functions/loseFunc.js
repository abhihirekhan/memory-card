export default function loser() {
    
      const losePopUp = document.querySelector(".losePopUp");
      const main = document.querySelector(".wholePage");
      return(
        losePopUp.style.display = "flex",
        main.style.display = "none"
      )
    
  }