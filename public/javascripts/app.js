
import { Participant } from './Participant.js';
import { startingInstructions, endingInstructions } from "./components.js";

/** Crée le participant */
let participant = new Participant();

/** Questionnaire de début*/
await startingInstructions()
.then((datas) => {
    console.log(datas.sexe);
    participant.id = datas.id;
    participant.age = datas.age;
    participant.sexe = datas.sexe;
    participant.genre = datas.genre;
    participant.nationalite = datas.nationalite;
    participant.conduite = datas.conduite;
    participant.parentalite = datas.parentalite;
    console.log(participant);});  

/** Commencement de l'expérience */
await participant.load();

/** Page de fin */
await endingInstructions();

/** Envoi des données au serveur */
const response = await fetch('http://localhost:3000', {
  method: 'POST',
  headers: {
	'Content-Type': 'application/json; charset=utf-8',
    'id' : participant.id,
  },
  body: JSON.stringify(participant.makeData()),
})

/** Affichage de la réponse du serveur dans la console */
console.log(response);