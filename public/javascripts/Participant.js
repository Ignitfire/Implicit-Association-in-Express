import { shuffle } from "./constants.js";
import { Bloc } from "./Bloc.js";

export const Participant = class{

    //** Profile Attributes */
    
    /** 
     * @property {string}: age du participant
     */
    age;

    /**
     * @property {string}: sexe du participant
     */
    sexe;

    /**
     * @property {string}: genre du participant
     */
    genre;

    /**
     * @property {string}: nationalité du participant
     */
    nationalite;

    /**
     * @property {string}: nombre d'année de conduite du participant
     */
    conduite;

    /**
     * @property {string}: breve description de la parentalité du participant.
     */
    parentalite; 

     //** Decisions Attributes */

    /**
     * @property {Array<Integer>}: ICE 1: Controle
     */
    Controle;

    /**
     * @property {Array<Integer>}: ICE 2: PR Adulte
     */
    PSEnfant;

    /**
     * @property {Array<Integer>}: ICE 3: PR Enfant
     */
    PSAdulte;

    /**
     * @property {Array<Integer>}: ICE 4: PS Adulte
     */
    PREnfant;

    /**
     * @property {Array<Integer>}: ICE 5: PS Enfant
     */
    PSAdulte;

    //** Experimental Attributes */

    id;
    /**
     * @property {Array<Integer>}: ordre de passation des 5 ICE
     */
    blocOrder;

    /**
     * @property {Array<Integer>}: Bloc d'essais
     */
    blocs;

        /** Constructeur, initialisation des attributs */
    constructor(){
        this.age = "";
        this.sexe = "";
        this.genre = "";
        this.nationalite = "";
        this.conduite = "";
        this.parentalite = "";
        this.id = "";

        this.ControleA = [];
        this.PSEnfantA = [];
        this.PSAdulteA = [];
        this.PREnfantA = [];
        this.PRAdulteA = [];

        this.ControleG = [];
        this.PSEnfantG = [];
        this.PSAdulteG = [];
        this.PREnfantG = [];
        this.PRAdulteG = [];

        let tab = ["Controle","PSEnfant","PSAdulte","PREnfant","PRAdulte"];
        this.BlocOrder = shuffle(tab);
        this.blocs = [];

        for(let i = 0; i < 5; i++){
            this.blocs.push(new Bloc(this.BlocOrder[i]));
        }
    }

    /** lance l'éxécution des blocs */
    async load(){
        for(let i = 0; i < 5; i++){
            let bloc= this.blocs[i]
            let blocData = await bloc.load();     
            switch(bloc.typeBloc){
                case "Controle":
                    this.ControleA = blocData.answers;
                    this.ControleG = blocData.genders;
                    break;
                case "PSEnfant":
                    this.PSEnfantA = blocData.answers;
                    this.PSEnfantG = blocData.genders;
                    break;
                case "PSAdulte":
                    this.PSAdulteA = blocData.answers;
                    this.PSAdulteG = blocData.genders;
                    break;
                case "PREnfant":
                    this.PREnfantA = blocData.answers;
                    this.PREnfantG = blocData.genders;
                    break;
                case "PRAdulte":
                    this.PRAdulteA = blocData.answers;
                    this.PRAdulteG = blocData.genders;
                    break;
            }
        }
    }
    
        /** Crée un objet JSON contenant les données du participant */
    makeData(){
        let data = {
            "id": this.id,
            "infos":{
                "age": this.age,
                "sexe": this.sexe,
                "genre": this.genre,
                "nationalite": this.nationalite,
                "conduite": this.conduite,
                "parentalite": this.parentalite
            },
            "situations":{
                "Controle": {
                    answers: this.ControleA,
                    genders: this.ControleG
                },
                "PSEnfant": {
                    answers: this.PSEnfantA,
                    genders: this.PSEnfantG,
                },
                "PSAdulte": {
                    answers: this.PSAdulteA,
                    genders: this.PSAdulteG,
                },
                "PREnfant": {
                    answers: this.PREnfantA,
                    genders: this.PREnfantG,
                },
                "PRAdulte": {
                    answers: this.PRAdulteA,
                    genders: this.PRAdulteG,
                }
            }
        }
        return data;
    }
}