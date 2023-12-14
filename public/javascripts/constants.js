
//** Script */

export const formHMTL= `<div id="inputs">
<div id="inputID"><label for="id">ID participant:</label>
<input type="number" class="form-control" id="id" name="ID" min="1" max="1000" required></div>
<div id="input1"><label for="age">Age:</label>
<input type="number" class="form-control" id="age" name="age" min="1" max="100" required></div>
<div id="input2"><label for="genre">Genre:</label>
<select class="form-control" id="genre" required>
  <option>Masculin</option>
  <option>Féminin</option>
  <option>Autre</option>
</select></div><br>
<div id="input3"><label for="sexe">Sexe:</label>
<select class="form-control" id="sexe" required>
  <option>Masculin</option>
  <option>Féminin</option>
</select></div>
<div id="input4"><label for="nationalite">Nationalité:</label>
<input type="text" class="form-control" id="nationalite" name="nationalite" required></div>
<div id="input5"><label for="conduite">Nombre d'année de conduite:</label>
<input type="number" class="form-control" id="conduite" name="conduite" min="1" max="100" required></div>
<div id="input6"><label for="parentalite">Avez-vous des enfants ?</label>
<select class="form-control" id="parentalite" required>
  <option>Oui</option>
  <option>Non</option>
</select></div>
</div>
<br>
</div>  
`

//** Textes */

/**
 * Instructions des boites de dialogues de début et de fin
 */
export const startingInstructionsText = `Dans un premier temps, merci de répondre à ce bref questionnaire avant de commencer l'expérience.`
export const endingInstructionsText = `Merci d'avoir participé à cette expérience. Vos données ont été enregistrées.`

/**
 * Instructions des blocs
 */
export const instructionsControle=`Imaginez-vous que vous êtes en train de conduire une voiture. En conduisant, vous rencontrez 5 situations différentes. Nous vous demandons de nous indiquer ce que vous feriez dans chaque situation en cliquant sur la flèche correspondante. Il n’y a pas des bonnes et des mauvaises réponses. Essayez d'imaginer comment vous réagiriez instinctivement à ces situations dans votre vie quotidienne.<b> Il n'y pas d'audio à écouter pour ce bloc.</b>`
export const instructionsAdulte=  `Imaginez-vous que vous êtes en train de conduire une voiture. <b> Un.e adulte est assis.e à l'arrière.</b> En conduisant, vous rencontrez 5 situations différentes. Dans chaque situation, <b> lisez attentivement le texte, puis appuyez sur le bouton du son situé en bas de l'écran pour écouter la demande de l'adulte assis derrière vous </b>. A la fin cliquer sur une des deux flèches situés à gauche et à droite de l'écran pour nous indiquer ce que vous feriez dans cette situation. Il n’y a pas des bonnes et des mauvaises réponses. Essayez d'imaginer comment vous réagiriez instinctivement à ces situations dans votre vie quotidienne.`
export const instructionsEnfant=  `Imaginez-vous que vous êtes en train de conduire une voiture. <b> Un.e enfant est assis.e à l'arrière.</b> En conduisant, vous rencontrez 5 situations différentes. Dans chaque situation, <b> lisez attentivement le texte, puis appuyez sur le bouton du son situé en bas de l'écran pour écouter la demande de l'enfant assis derrière vous </b>. A la fin cliquer sur une des deux flèches situés à gauche et à droite de l'écran pour nous indiquer ce que vous feriez dans cette situation. Il n’y a pas des bonnes et des mauvaises réponses. Essayez d'imaginer comment vous réagiriez instinctivement à ces situations dans votre vie quotidienne.`


/**
 * Instructions des situations
 */
export const instructionsS1 = `Cette personne attend pour traverser la route. Vous roulez à une vitesse normale mais vous avez hâte de rentrez à la maison.`
export const instructionsS2 = `Vous êtes un peu pressé.e. La limite de vitesse est de 30 km/heure. Cependant, la circulation est lente et la route est vide.`
export const instructionsS3= `Un camion vous bloque la route et vous oblige à rouler beaucoup plus lentement. Vous n'avez pas une visibilité claire de la direction opposée.`
export const instructionsS4 = `Vous êtes un peu pressé.e. Le feu est rouge. La route est vide et il n'y a pas de véhicule ou de piéton qui arrive.`
export const instructionsS5 = `Votre téléphone sonne pendant que vous conduisez.`

/**
 * Instruction des choix
 */
export const choixS_S1 = `Je m’arrête et laisse la personne passer.`
export const choixR_S1 = `Je continue à rouler.`

export const choixS_S2 = `Je roule à 30km/heure.`
export const choixR_S2 = `J’accélère un peu.`

export const choixS_S3 = `Je continue à rouler lentement derrière le camion.`
export const choixR_S3 = `Je dépasse le camion.`

export const choixS_S4 = `J’attends le feu vert.`
export const choixR_S4 = `Je continue à rouler.`

export const choixS_S5 = `J'attends de trouver un endroit où m'arrêter et je rappelle.`
export const choixR_S5 = `Je réponds et continue à conduire prudemment.`


//** Fonctions utils */

export function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}