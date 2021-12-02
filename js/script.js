const namevalue = prompt('Inserisci qui il tuo nome') ;

const surnamevalue = prompt('Inserisci qui il tuo cognome') ;

const colorvalue = prompt('Inserisci qui il tuo colore preferito') ;

const dataUser = namevalue + surnamevalue + colorvalue + 21 ;

document.getElementById('passwordUser').innerHTML = dataUser ;