// dovremo recuperare il bottone "start"
const startButton = document.getElementById("start");
// e alla sua pressione, applicare al box "go" la classe "moving"
startButton.addEventListener("click", () => {
  // cercare il box sotto al mottone
  const boxToMove = document.getElementById("go");
  // aggiungiamoci la classe "moving"
  boxToMove.classList.add("moving");
  //   faccio anche in modo di "resettare" l'elemento una volta finita l'animazione
  setTimeout(() => {
    // dopo 3 secondi... tolgo la classe "moving"
    boxToMove.classList.remove("moving");
  }, 3000);
});
