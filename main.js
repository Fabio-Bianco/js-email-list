const ulElement = document.querySelector(".email-list"); // Seleziona la lista <ul>
const refreshMail = document.getElementById("generate-button");
const emailNumber = 10;

const generateTenMail = function () { // creao una funzione e la salvo in una variabile

    ulElement.innerHTML = ""; // Svuota la lista prima di generare nuove email (prima del ciclo for)
  
  for (let i = 0; i < emailNumber; i++) {  // Ciclo for per generare 10 mail;
    
    axios
      .get("https://flynn.boolean.careers/exercises/api/random/mail") // Chiamata all'API per prendere indirizzo mail;
      .then((response) => {
        console.log("Email ricevuta:", response.data.response);


        const li = document.createElement("li"); // creo l'elemento li e lo salvo in una variabie;
        li.textContent = response.data.response; // Imposta il testo dell' <li> come l'email ricevuta;

        ulElement.appendChild(li); // Aggiungi il <li> alla lista <ul>
      })
      .catch((error) => {
        console.error("Errore nella richiesta API:", error);
      });
  }
};
refreshMail.addEventListener("click", generateTenMail); // Associa la funzione al click del bottone
generateTenMail(); //invoco la funzione

