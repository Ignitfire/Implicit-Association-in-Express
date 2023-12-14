import {
    choixS_S1,choixS_S2,choixS_S3,choixS_S4,choixS_S5,
    choixR_S1,choixR_S2,choixR_S3,choixR_S4,choixR_S5,
    instructionsS1,instructionsS2,instructionsS3,instructionsS4,instructionsS5
} from "./constants.js"

export const Trial = class{

    /** attributs de l'essai */
    typeBloc;
    situation;
    gender;

    imgPath;
    audioPath;

    Instructions;
    choixL;
    choixR;
    valueL;
    valueR;

    /** Constructeur, initialisation des attributs */
    constructor(situation, typeBloc, gender, PSdirection){
        this.typeBloc = typeBloc;
        this.situation = situation;
        this.gender=gender;
        
        this.imgPath = "images/img"+situation+".png";
        
        if(PSdirection=="L"){
            this.choixL = eval("choixS_"+situation)
            this.valueL = "S"
            this.choixR = eval("choixR_"+situation)
            this.valueR = "R"
        }
        else{
            this.choixL = eval("choixR_"+situation)
            this.valueL = "R"
            this.choixR = eval("choixS_"+situation)
            this.valueR = "S"
        }

        if(this.typeBloc=="Controle") this.audioPath="";
        else this.audioPath = this.generateAudioPath(this.gender);

        this.Instructions = eval("instructions"+situation);
    }

    /** exécution d'un essai */
    async load(){
        return new Promise((resolve) => {
        /** Load Arrows */
        let leftArrow=document.querySelector("#leftArrow");
        let rightArrow=document.querySelector("#rightArrow");
        leftArrow.innerHTML = `<i class="bi bi-caret-left-fill"></i>`;
        rightArrow.innerHTML = `<i class="bi bi-caret-right-fill"></i>`;

        /** Gestion de l'image */
        let imgcontainer= document.querySelector("#imageContainer")
        if(imgcontainer.hasChildNodes()){
            let img = document.querySelector("#image")
            img.src=this.imgPath
        }
        else{
            let img = document.createElement("img")
            img.id = "image"
            img.src = this.imgPath
            imgcontainer.appendChild(img)
        }

        /** Gestion de l'audio */
        let allowArrows=true;
        if(this.typeBloc!="Controle"){
        let audioContainer = document.querySelector("#audioContainer")
        allowArrows=false;
        let audio;
        if(audioContainer.hasChildNodes()){
            audio = document.querySelector("#audio")
            audio.src=this.audioPath
        }
        else{
            audio = document.createElement("audio")
            audio.id = "audio"
            audio.src = this.audioPath
            audioContainer.appendChild(audio)     
            }
        document.querySelector("#playAudio").addEventListener("click",()=>{
            audio.play()
            allowArrows=true;
        }, { once: true}); 
        }

        /** Gestion des instructions */
        document.querySelector("#centerInstructions").innerText = this.Instructions;
        document.querySelector("#leftInstructions").innerText = this.choixL;
        document.querySelector("#rightInstructions").innerText = this.choixR;

       /** Gestion des flèches */
       let arrowController = new AbortController();
        leftArrow.addEventListener("click", () => {
            if(allowArrows){
                arrowController.abort();
                resolve({choice:this.valueL, gender: this.gender});
            }
        }, {signal: arrowController.signal });
        rightArrow.addEventListener("click", () => {
            if(allowArrows){
                arrowController.abort();
                resolve({choice:this.valueR, gender: this.gender});
            }
        }, {signal: arrowController.signal});
    });
    }

    /**
     * Renvoie un audiopath en fonction des paramètres du Trial
     * @param {String} gender "M" ou "F"
     * @returns {String} audioPath correspondant au Trial 
     */
    generateAudioPath(gender){
        let content="";
        switch(true){
            case (this.situation == "S1" && this.typeBloc == "PREnfant"):content="accelere_E";break;
            case (this.situation == "S1" && this.typeBloc == "PRAdulte"):content="accelere_A";break;
            case (this.situation == "S1" && this.typeBloc == "PSEnfant"):content="arrete_E";break;
            case (this.situation == "S1" && this.typeBloc == "PSAdulte"):content="arrete_A";break;

            case (this.situation == "S2" && this.typeBloc == "PREnfant"):content="accelere_E";break;
            case (this.situation == "S2" && this.typeBloc == "PRAdulte"):content="accelere_A";break;
            case (this.situation == "S2" && this.typeBloc == "PSEnfant"):content="ralentis_E";break;
            case (this.situation == "S2" && this.typeBloc == "PSAdulte"):content="ralentis_A";break;

            case (this.situation == "S3" && this.typeBloc == "PREnfant"):content="depasse_E";break;
            case (this.situation == "S3" && this.typeBloc == "PRAdulte"):content="depasse_A";break;
            case (this.situation == "S3" && this.typeBloc == "PSEnfant"):content="attend_E";break;
            case (this.situation == "S3" && this.typeBloc == "PSAdulte"):content="attend_A";break;

            case (this.situation == "S4" && this.typeBloc == "PREnfant"):content="accelere_E";break;
            case (this.situation == "S4" && this.typeBloc == "PRAdulte"):content="accelere_A";break;
            case (this.situation == "S4" && this.typeBloc == "PSEnfant"):content="arrete_E";break;
            case (this.situation == "S4" && this.typeBloc == "PSAdulte"):content="arrete_A";break;

            case (this.situation == "S5" && this.typeBloc == "PREnfant"):content="repond_E";break;
            case (this.situation == "S5" && this.typeBloc == "PRAdulte"):content="repond_A";break;
            case (this.situation == "S5" && this.typeBloc == "PSEnfant"):content="attend_E";break;
            case (this.situation == "S5" && this.typeBloc == "PSAdulte"):content="attend_A";break;

            default:content="noMatch";break;
        }
        return "audios/"+content+"_"+gender+".wav";
    }
}