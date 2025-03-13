
// creao una funzione e la salvo in una variabile
const generateTenMail = function() {
    // Ciclo for per generare 10 mail;
    for (let i = 0; i < 10; i++) {
        axios
            .get("https://flynn.boolean.careers/exercises/api/random/mail") // Chiamata all'API per prendere indirizzo mail;
            .then((response) => {
                console.log("Email ricevuta:", response.data.response);
            })
            .catch((error) => {
                console.error("Errore nella richiesta API:", error);
            });
    }
};

generateTenMail(); //invoco la funzione




