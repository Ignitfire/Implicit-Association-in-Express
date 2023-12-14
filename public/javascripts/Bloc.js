import { shuffle, instructionsControle, instructionsEnfant, instructionsAdulte } from "./constants.js";
import { Trial } from "./Trial.js";
import { blocInstructions } from "./components.js";

export const Bloc = class{
    typeBloc;
    situationOrder;
    trials;
    instructions;
    answers;
    genders;

    constructor(typeBloc){
        
        /** Controlled randomization pour situations */
        this.typeBloc = typeBloc;
        let situationTab = [1,2,3,4,5];
        this.situationOrder = shuffle(situationTab);

        /** Controlled randomization pour genres */
        let genderTab=[]
        let flip = Math.floor(Math.random() * 2);
        if(flip==0) genderTab= shuffle(["M","M","M","F","F"])
        else genderTab=shuffle(["M","M","F","F","F"]);
        let genderOrder=shuffle(genderTab)

        /** Controlled randomization pour flèches */
        let directionTab=[]
        flip = Math.floor(Math.random() * 2);
        if(flip==0) directionTab= ["L","L","L","R","R"]
        else directionTab=["L","L","R","R","R"];
        let PSdirectionOrder=shuffle(directionTab)
        
        /** Initialisation des trials */
        this.trials = [];
        for(let i = 0; i < 5; i++){
            this.trials.push(new Trial("S"+this.situationOrder[i],this.typeBloc,genderOrder[i],PSdirectionOrder[i]));
        }
        if(typeBloc=="Controle") this.instructions=instructionsControle;
        else if(typeBloc=="PSEnfant" || typeBloc=="PREnfant") this.instructions=instructionsEnfant;
        else this.instructions=instructionsAdulte;
        this.answers = new Array(5);
        this.genders = new Array(5);
        }

    /** Execution du bloc */
    async load(){
        console.log("début du bloc "+this.typeBloc);
        // Instructions
        await blocInstructions(this.instructions);
        
        // Trials
        for(let i = 0; i < 5; i++){
            await this.trials[i].load().then((data) => {
                let choice = data.choice;
                let gender = data.gender;
                this.answers[this.situationOrder[i]-1] = choice;
                this.genders[this.situationOrder[i]-1] = gender;
                });
            }
        return {answers: this.answers,genders: this.genders};
    }
}