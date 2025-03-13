
// Chiamata all'API per prendere indirizzo mail;

axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
.then(response => {
    console.log("Email ricevuta:", response.data.response);
})
.catch(error => {
    console.error("Errore nella richiesta API:", error);
});