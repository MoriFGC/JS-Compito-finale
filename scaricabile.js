/*
PARTE 1: 
Oggi analizzeremo un problema molto comune: realizzare algoritmi di ricerca.
Il tuo compito è creare una funzione che cercherà per posizione lavorativa E posizione geografica. Questi due valori verranno passati come parametri
Ti abbiamo fornito un array chiamato "jobs" in fondo al file, NON modificarlo in alcun modo.
L'algoritmo che devi realizzare cercherà SIA per posizione lavorativa che per posizione geografica.
Prendi queste tre inserzioni ad esempio:

      job1:  location: "NY, US",     title: "java dev"
      job2:  location: "Genoa, IT"   title: "web dev"
      job3:  location: "US"      title: "dev"

Cercando contemporaneamente come posizione lavorativa "dev" e posizione geografica "US", dovresti ottenere come risultato solamente job1 e job3,
in quanto job2 non soddisfa la condizione posta sulla posizione geografica.

REQUISITI:
- il tuo algoritmo deve tornare i risultati nella seguente forma:
{
  result: [], <-- inserisci qui le inserzioni che rispecchiano la posizione lavorativa e la posizione geografica richiesta
  count: 0 <-- inserisci qui il numero totale delle inserzioni trovate
}

- la tua ricerca deve essere "case insensitive" (non deve essere influenzata da lettere maiuscole o minuscole nelle parole cercate). Questo e' possibile trasformando tutto in lettere minuscole con .toLowerCase()


PARTE 2: 
Nella pagina HTML, inserisci 2 input di tipo testo (uno per la location e uno per il titolo lavorativo, ricordati di diversificarli con un id) e un bottone con valore “cerca”

Al click del bottone, il codice deve raccogliere i valori dei due input e darli in pasto alla funzione che hai creato nella parte 1. 

Dopo aver raccolto ed elaborato i dati, e’ il momento di mostrare i risultati sulla pagina: 
    Puoi scegliere tu se utilizzare un semplice ul / li oppure una tabella 
    Vai passo per passo e usa molti console.log per capire eventualmente dove sbagli
    SUGGERIMENTO: ti servira’ un ciclo for!

*/

// NON MODIFICARE QUESTO ARRAY!
const jobs = [
  { title: "Marketing Intern", location: "US, NY, New York" },
  {
    title: "Customer Service - Cloud Video Production",
    location: "NZ, Auckland",
  },
  {
    title: "Commissioning Machinery Assistant (CMA)",
    location: "US, IA, Wever",
  },
  {
    title: "Account Executive - Washington DC",
    location: "US, DC, Washington",
  },
  { title: "Bill Review Manager", location: "US, FL, Fort Worth" },
  { title: "Accounting Clerk", location: "US, MD," },
  { title: "Head of Content (m/f)", location: "DE, BE, Berlin" },
  {
    title: "Lead Guest Service Specialist",
    location: "US, CA, San Francisco",
  },
  { title: "HP BSM SME", location: "US, FL, Pensacola" },
  {
    title: "Customer Service Associate - Part Time",
    location: "US, AZ, Phoenix",
  },
  {
    title: "ASP.net Developer Job opportunity at United States,New Jersey",
    location: "US, NJ, Jersey City",
  },
  {
    title: "Talent Sourcer (6 months fixed-term contract)",
    location: "GB, LND, London",
  },
  {
    title: "Applications Developer, Digital",
    location: "US, CT, Stamford",
  },
  { title: "Installers", location: "US, FL, Orlando" },
  { title: "Account Executive - Sydney", location: "AU, NSW, Sydney" },
  {
    title: "VP of Sales - Vault Dragon",
    location: "SG, 01, Singapore",
  },
  { title: "Hands-On QA Leader", location: "IL, Tel Aviv, Israel" },
  {
    title: "Southend-on-Sea Traineeships Under NAS 16-18 Year Olds Only",
    location: "GB, SOS, Southend-on-Sea",
  },
  { title: "Visual Designer", location: "US, NY, New York" },
  {
    title: "Process Controls Engineer - DCS PLC MS Office - PA",
    location: "US, PA, USA Northeast",
  },
  { title: "Marketing Assistant", location: "US, TX, Austin" },
  { title: "Front End Developer", location: "NZ, N, Auckland" },
  { title: "Engagement Manager", location: "AE," },
  {
    title: "Vice President, Sales and Sponsorship (Businessfriend.com)",
    location: "US, CA, Carlsbad",
  },
  { title: "Customer Service", location: "GB, LND, London" },
  { title: "H1B SPONSOR FOR L1/L2/OPT", location: "US, NY, New York" },
  { title: "Marketing Exec", location: "SG," },
  {
    title: "HAAD/DHA Licensed Doctors Opening in UAE",
    location: "AE, AZ, Abudhabi",
  },
  {
    title: "Talent Management Process Manager",
    location: "US, MO, St. Louis",
  },
  { title: "Customer Service Associate", location: "CA, ON, Toronto" },
  {
    title: "Customer Service Technical Specialist",
    location: "US, MA, Waltham",
  },
  { title: "Software Applications Specialist", location: "US, KS," },
  { title: "Craftsman Associate", location: "US, WA, Everett" },
  { title: "Completion Engineer", location: "US, CA, San Ramon" },
  { title: "I Want To Work At Karmarama", location: "GB, LND," },
  {
    title: "English Teacher Abroad",
    location: "US, NY, Saint Bonaventure",
  },
]

// creo una funzione con i parametri title e location che userò dopo per collegarci i due input di testo in cui andrò a inserire la professione e il luogo
function search(title, location) {
  let risultato = {
    lavoro : [],
    count: 0
  };
  
  for (let i = 0; i < jobs.length; i++) {
    // faccio in modo che se ci scrivo in minuscolo o maiuscolo mi trova comunque il risultato e includes mi serve in caso non riesco a scrivere il nome della professioneper intero
    if (jobs[i].title.toLowerCase().includes(title.toLowerCase()) && jobs[i].location.toLowerCase().includes(location.toLowerCase())) {
      // se me li trova aggiungo il risultato dentro l'array lavoro che è dentro all'oggetto risultato
      risultato.lavoro.push(jobs[i]);
      risultato.count = risultato.count + 1;
    }
  }
  return risultato;
}
// console.log(search("software", "us")); FUNZIONAAA

// qui ho creato tutti gli elementi che mi servono per fare la ricerca nei due input text e far comparire il risultato nei console log
let button = document.getElementById("button");
let professione = document.getElementById("title");
let luogo = document.getElementById("location");

button.addEventListener("click", function() {
  risultato = search(professione.value, luogo.value);
  //console.log(risultato);   FUNZIONA!!!
  creaElemento(risultato)
});

// creo una funzione che mi stampa una lista appena invio i dati

function creaElemento(risultato) {
  // collego questa variabile al div che ho creato
  let lista = document.getElementById("lista");
  lista.innerText = ""; // questo mi serve per fare in modo che non la lista non si ripete
  if (risultato.count === 0 && professione.value === "" || luogo.value === "") {
    // se per caso non esce nessun risulato della ricerca che hai fatto allora ti dirà questa frase
    lista.innerText = "Nessun Lavoro trovato" 
  } else {
    let ul = document.createElement("ul"); // creo un ul che poi aggiungerò al div
    // uso un for each per iterare su ogni singolo lavoro che è dentro una variabile di nome risultato che ho creato nella riga 128
    risultato.lavoro.forEach((jobs) => {
      let li = document.createElement("li"); // creo un list item che poi aggiungerò al ul
      li.innerText = `Professione  ${jobs.title} - ${jobs.location}`; // faccio in modo che mi stampi il luogo e la professione in una lista
      ul.appendChild(li); // aggiungo il list item alla lista non ordinata
    })
    lista.appendChild(ul); // aggiungo la lista non ordinata al div che è presente nel html con ID lista
  }
}