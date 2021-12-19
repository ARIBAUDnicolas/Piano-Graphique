/**
 * ALGO: ceci est une classe...
 * Vous verrez ça plus tard en détail avec Rémi, pour l'instant on n'a pas trop besoin de savoir à quoi ça sert.
 */
class Tableau1 extends Phaser.Scene{
    /**
     * Précharge les assets
     */
    preload(){
        this.load.image("fond","assets/Background.jpg");
        this.load.image("fant","assets/fant.png");
        this.load.image("bow","assets/bow.png");
        this.load.image("cav","assets/cav.png");
    }

    /**
     * Crée la scène
     */
    create(){

        //met en place les éléments
        this.creerFormes();

        /**
         * Liste des lettres
         * @type {string[]}
         */
        this.lettres="azertyuiopqsdfghjklmwxcvbn".split("")
        console.log("liste des touches prises en charge...");
        console.log(this.lettres);

        // pour chaque lettre on va créer un élément graphique
        this.creerClavier();


        //initialise les écoutes de touches pressées et relâchées
        this.initKeyboard();


    }
    /**
     * Crée le décor
     */
    creerFormes(){
        this.fond=this.add.image(300,300,"fond");

    };


