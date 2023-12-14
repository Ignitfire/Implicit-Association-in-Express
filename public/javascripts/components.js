import { endingInstructionsText, formHMTL, startingInstructionsText } from "./constants.js";

/**
 * fenetre d'instructions pour les blocs
 * @param {String} instructions 
 * @returns 
 */
export const blocInstructions = function (instructions) {
    return new Promise((resolve) => {
      let InstructionsWindow = instructionWindow(instructions, "Commencer le bloc", "begin");
        InstructionsWindow.id="instructionWindow";
        let frame = document.querySelector('#frame')
        frame.append(InstructionsWindow)
        document.querySelector("#instructionWindow").style.justifyContent = "center";
        document.querySelector("#innerInstructions").style.margin = "100px";
        document.querySelector("#begin").addEventListener("click", () => {
          frame.removeChild(InstructionsWindow)
          resolve();
        });
      });
  };
/**
 * ajoute la fenetre d'instructions du debut à la page qui se ferme lorsqu'on clique sur le bouton commencer
 * @returns { Promise }
 */
export const startingInstructions = function () {
    return new Promise((resolve) => {
        let form = document.createElement("form")
        form.innerHTML = formHMTL;
      let startingInstructionsWindow = instructionWindow(startingInstructionsText, "Commencer l'expérience", "begin", form);
  
      let frame = document.querySelector('#frame')
      frame.append(startingInstructionsWindow)
      let startButton = document.querySelector('button#begin')
      startButton.addEventListener('click', () => {
          let id = document.querySelector('#id').value
          let age = document.querySelector('#age').value
          let genre = document.querySelector('#genre').value
          let sexe = document.querySelector('#sexe').value
          let nationalite = document.querySelector('#nationalite').value
          let conduite = document.querySelector('#conduite').value
          let parentalite = document.querySelector('#parentalite').value
          console.log(age, genre, sexe, nationalite, conduite, parentalite)
          frame.removeChild(startingInstructionsWindow)
          resolve({
            id: id,
            age: age,
            genre: genre,
            sexe: sexe,
            nationalite: nationalite,
            conduite: conduite,
            parentalite: parentalite
          });       
      })
    });
  };

  /** Fenetre d'instructions final */
  export const endingInstructions = function () {
    return new Promise((resolve) => {
      let endingInstructionsWindow = instructionWindow(endingInstructionsText, "Fin", "begin");
      let frame = document.querySelector('#frame')
      frame.append(endingInstructionsWindow)
      let startButton = document.querySelector('button#begin')
      startButton.addEventListener('click', () => {
        frame.removeChild(endingInstructionsWindow)
        resolve();
      });
    });
  };

  /**
 * crée une fenetre d'instruction à partir des textes dans constants.js
 * @param {Boolean} beginOrEnd : true si on veut afficher les instructions du debut, false si c'est les remerciements
 * @returns {HTMLElement}
 */
export const instructionWindow = function (message, buttonText, buttonId, HTMLform = null) {
    let div = document.createElement("div");
    div.classList.add("instructions");
  
    let innerInstructions = document.createElement("p");
    innerInstructions.setAttribute("id", "innerInstructions");
    innerInstructions.innerHTML = message;
    div.append(innerInstructions);
  
    if (HTMLform != null) {
      div.append(innerInstructions, HTMLform);
    }
  
    let startButton = document.createElement("button");
    startButton.setAttribute("id", buttonId);
    startButton.innerText = buttonText;
    div.append(startButton);

    return div;
  };