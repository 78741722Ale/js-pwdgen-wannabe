// Chiedi all’utente il suo nome
const first_name = prompt('Type your name');
// 
console.log(first_name);

// Poi chiedi il suo cognome
const last_name = prompt('Type your Surname');
// 
console.log(last_name);

// Poi chiedi il suo colore preferito
const favourite_color = prompt('Type your Favourite Color');
// 
console.log(favourite_color);


// Inizializzazione e dichiarazione numero 22
let number = '22' 
// 
console.log(number);


// Infine scrivi sulla pagina il risultato in questo formato 

// Risultato finale
const password = (`${first_name}${last_name}${favourite_color}${number}`); 
// Risposta nella console log
console.log(password);
// Visualizzazione nel Div
document.getElementById('password').innerHTML = password; 


