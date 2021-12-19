/**
 * ALGO: ceci est une classe...
 * Vous verrez ça plus tard en détail avec Rémi, pour l'instant on n'a pas trop besoin de savoir à quoi ça sert.
 */
class Tableau1 extends Phaser.Scene{
    /**
     * Précharge les assets
     */
    preload(){
        //bg 2 (tout au fond et très flou)
        this.load.image('bg2-terrain-2', 'assets/level/background-2/bg2-terrain-2.png');
        this.load.image('bg2-tree-2', 'assets/level/background-2/bg2-tree-2.png');
        this.load.image('bg2-terrain-2b', 'assets/level/background-2/bg2-terrain-1.png');
        //bg 1 (gris légèrement flou)
        this.load.image('bg1-terrain-3', 'assets/level/background-1/bg-terrain-3.png');
        this.load.image('bg1-terrain-1', 'assets/level/background-1/bg-terrain-1.png');
        this.load.image('bg-tree-1', 'assets/level/background-1/bg-tree-1.png');
        this.load.image('bg-tree-2', 'assets/level/background-1/bg-tree-2.png');
        this.load.image('bg-tree-3', 'assets/level/background-1/bg-tree-3.png');
        this.load.image('bg-bridge', 'assets/level/background-1/bg-wooden-bridge.png');
        //ground (premier plan noir)
        this.load.image('gMid', 'assets/level/ground/g-mid.png');
        this.load.image('gRight', 'assets/level/ground/g-right.png');
        this.load.image('gLeft', 'assets/level/ground/g-left.png');
        this.load.image('gTree1', 'assets/level/ground/g-tree-2.png');
        this.load.image('gMushroom1', 'assets/level/ground/g-mushroom1.png');
        this.load.image('gbridge', 'assets/level/ground/g-wooden-bridge.png');
        this.load.image('gstone1', 'assets/level/ground/g-stone-1.png');
        this.load.image('gbox', 'assets/level/ground/g-box-2.png');
        this.load.image('gstone2', 'assets/level/ground/g-stone-4.png');
        this.load.image('gwater', 'assets/level/ground/g-water.png');
        this.load.image('gTree2', 'assets/level/ground/g-tree-1.png');
        this.load.image('gstone3', 'assets/level/ground/g-stone-5.png');
        this.load.image('Ftree', 'assets/level/ground/g-fellen-tree-1.png');

        // Boucle zombie
        for(let i=1;i<=16;i++){
            this.load.image('Z'+i, 'assets/zombies/z'+i+'.png');
        }
        //au lieu d'écrire 5 lignes quasi identiques, on charge l'herbe avec une boucle
        // ALGO : ceci est une boucle
        for(let i=1;i<=5;i++){
            this.load.image('g-grass-'+i, 'assets/level/ground/g-grass-'+i+'.png');
        }

        //filtre film TODO élève : faire une boucle à la place des 3 lignes qui suivent FAIT
        for(let i=1;i<=3;i++){
            this.load.image('filterFilm'+i, 'assets/level/filters/bloody/frame'+i+'.png');
        }

        //texture au fond  TODO élève : faire une boucle pour charger les 3 images et démontrer par la même que vous savez aller au plus simple FAIT
        for(let i=1;i<=3;i++){
            this.load.image('bg-animation-'+i, 'assets/level/background-2/bg-animation/bg-animation-'+i+'.png');
        }


    }

    /**
     * Crée la scène
     * TODO élèves : reproduire à l'identique assets/level/00-preview-example/sample1.jpg
     * TODO élèves : plus tard, continuez le décor vers la droite en vous servant des assets mis à votre disposition
     */
    create(){

        /**
         * Fond très clair avec une trame
         * @type {Phaser.GameObjects.Sprite}
         */
        let bgAnimationA=this.add.sprite(0,0, 'bg-animation-1').setOrigin(0,0);

        //--------------background 2 (tout au fond et flou)--------------------

        /**
         * contient tous les éléments du background 2 (gris clair très flou)
         * @type {Phaser.GameObjects.Container}
         * @see https://photonstorm.github.io/phaser3-docs/Phaser.GameObjects.Container.html
         */
        this.bg2Container=this.add.container(0,0);
        /**
         * Terrain dans bg2
         * @type {Phaser.GameObjects.Image}
         */
        let bg2Terrain2=this.add.image(-100,100, 'bg2-terrain-2').setOrigin(0,0);
        this.bg2Container.add(bg2Terrain2);

        let bg2Terrain2b=this.add.image(780,110, 'bg2-terrain-2b').setOrigin(0,0);
        this.bg2Container.add(bg2Terrain2b);
        bg2Terrain2b.scaleX = 0.8
        /**
         * Arbre dans bg2
         * @type {Phaser.GameObjects.Image}
         */
        let bg2Tree2=this.add.image(400,-50, 'bg2-tree-2').setOrigin(0,0);
        this.bg2Container.add(bg2Tree2);
        bg2Tree2.angle=-5;//pencher l'arbre de -5 degrès

        let bg2Tree2b=this.add.image(900,-50, 'bg2-tree-2').setOrigin(0,0);
        bg2Tree2b.scaleY=0.8;
        bg2Tree2b.scaleX=0.8;
        this.bg2Container.add(bg2Tree2b);


        //--------------background 1 (gris) --------------------

        /**
         * contient tous les éléments du background 1 (gris)
         * @type {Phaser.GameObjects.Container}
         */
        this.bg1Container=this.add.container(0,0);
        /**
         * Terrain
         * @type {Phaser.GameObjects.Image}
         */
        let bg1Terrain3=this.add.image(-300,200, 'bg1-terrain-3').setOrigin(0,0);
        this.bg1Container.add(bg1Terrain3);
        let bg1Terrain1=this.add.image(700,250, 'bg1-terrain-1').setOrigin(0,0);
        this.bg1Container.add(bg1Terrain1);
        let bg1Terrain2=this.add.image(1250,250, 'bg1-terrain-1').setOrigin(0,0);
        this.bg1Container.add(bg1Terrain2);
        bg1Terrain1.scaleX = 0.6;
        bg1Terrain2.scaleX = 0.6;
        /**
         * TREE
         * @type {Phaser.GameObjects.Image}
         */
        let bg1Tree1=this.add.image(-15,-100, 'bg-tree-1').setOrigin(0,0);
        bg1Tree1.scaleY=1;
        bg1Tree1.scaleX=0.75;
        this.bg2Container.add(bg1Tree1);
        let bg1Tree2=this.add.image(185,-125, 'bg-tree-3').setOrigin(0,0);
        bg1Tree2.scaleY=0.8;
        bg1Tree2.scaleX=0.55;
        this.bg2Container.add(bg1Tree2);



        //-------------ground (premier plan noir)---------------------------

        /**
         * contient tous les éléments du premier plan (noir)
         * @type {Phaser.GameObjects.Container}
         */
        this.groundContainer=this.add.container(0,0);
        /**
         * Tree
         * @type {Phaser.GameObjects.Image}
         */
        let tree1=this.add.image(300,360, 'gTree1').setOrigin(0,1);
        //tree1.setTintFill(0xFF0000); // pratique pour dbugger
        this.groundContainer.add(tree1);
        tree1.scaleX=0.7;
        tree1.scaleY=0.65;
        /**
         * Tree2
         * @type {Phaser.GameObjects.Image}
         */
        let tree2=this.add.image(150,360, 'gTree1').setOrigin(0,1);
        //tree2.setTintFill(0xFF0000); // pratique pour dbugger
        tree2.angle=-1;
        tree2.scaleX=-0.7;
        tree2.scaleY=0.8;
        this.groundContainer.add(tree2);
        /**
         * Chroom
         * @type {Phaser.GameObjects.Image}
         */
        let mushr=this.add.image(250,360, 'gMushroom1').setOrigin(0,1);
        //mushr.setTintFill(0xFF0000); // pratique pour dbugger
        mushr.angle=-1;
        mushr.scaleX=-1.1;
        mushr.scaleY=1.2;
        this.groundContainer.add(mushr);

        /**
         * Stone
         * @type {Phaser.GameObjects.Image}
         */
        let Stone=this.add.image(580,360, 'gstone1').setOrigin(0,1);
        //Stone.setTintFill(0xFF0000); // pratique pour dbugger
        Stone.scaleX=-1.3;
        Stone.scaleY=2;
        this.groundContainer.add(Stone);

        /**
         * Bridge
         * @type {Phaser.GameObjects.Image}
         */
        let Bridge=this.add.image(1170,405, 'gbridge').setOrigin(0,1);
        //Bridge.setTintFill(0xFF0000); // pratique pour dbugger
        Bridge.scaleX=-1.1;
        Bridge.scaleY=1.2;
        this.groundContainer.add(Bridge);

        /**
         * Box
         * @type {Phaser.GameObjects.Image}
         */
        let Box=this.add.image(680,348, 'gbox').setOrigin(0,1);
        //Box.setTintFill(0xFF0000); // pratique pour dbugger
        Box.angle=6
        Box.scaleX=0.9;
        Box.scaleY=0.9;
        this.groundContainer.add(Box);
        /**
         * Stone2
         * @type {Phaser.GameObjects.Image}
         */
        let Stone2=this.add.image(1075,440, 'gstone2').setOrigin(0,1);
        //Stone2.setTintFill(0xFF0000); // pratique pour dbugger
        Stone2.scaleX=1.3;
        Stone2.scaleY=2;
        this.groundContainer.add(Stone);
        /**
         * a bow' o' wo'er
         * @type {Phaser.GameObjects.Image}
         */
        let Water=this.add.image(575,650, 'gwater').setOrigin(0,1);
        //Water.setTintFill(0xFF0000); // pratique pour dbugger
        Water.scaleX=1.5;
        this.groundContainer.add(Water);
        this.groundContainer.sendToBack();
        /**
         * Tree3
         * @type {Phaser.GameObjects.Image}
         */
        let Tree3=this.add.image(1305,430, 'gTree2').setOrigin(0,1);
        //Tree3.setTintFill(0xFF0000); // pratique pour dbugger
        Tree3.angle=-7;
        Tree3.scaleX=-0.9;
        Tree3.scaleY=1.1;

        this.groundContainer.add(Tree3);
        /**
         * Grass
         * @type {Phaser.GameObjects.Image}
         */
        let Grass=this.add.image(1200,415, 'g-grass-5').setOrigin(0,1);
        //Grass.setTintFill(0xFF0000); // pratique pour dbugger
        Grass.scaleY=1.1;

        this.groundContainer.add(Grass);
        /**
         * Grassbis
         * @type {Phaser.GameObjects.Image}
         */
        let Grass1=this.add.image(1250,415, 'g-grass-5').setOrigin(0,1);
        //Grass1.setTintFill(0xFF0000); // pratique pour dbugger
        Grass1.scaleY=1.1;

        this.groundContainer.add(Grass);
        /**
         * Tree4
         * @type {Phaser.GameObjects.Image}
         */
        let tree4=this.add.image(1350,400, 'gTree1').setOrigin(0,1);
        //tree4.setTintFill(0xFF0000); // pratique pour dbugger
        this.groundContainer.add(tree4);
        tree4.scaleX=0.7;
        tree4.scaleY=1.2;
        /**
         * it's Big Stone Time
         * @type {Phaser.GameObjects.Image}
         */
        let stone3=this.add.image(1330,410, 'gstone3').setOrigin(0,1);
        //stone3.setTintFill(0xFF0000); // pratique pour dbugger
        this.groundContainer.add(stone3);
        stone3.scaleX=1.5;
        stone3.scaleY=1.5;
        /**
         * Chroom2.O
         * @type {Phaser.GameObjects.Image}
         */
        let mushr2=this.add.image(1670,425, 'gMushroom1').setOrigin(0,1);
        //mushr2.setTintFill(0xFF0000); // pratique pour dbugger
        mushr2.angle=-1;
        mushr2.scaleX=0.8;
        mushr2.scaleY=1;
        this.groundContainer.add(mushr2);
        /**
         * Grass2
         * @type {Phaser.GameObjects.Image}
         */
        let Grass2=this.add.image(1610,425, 'g-grass-2').setOrigin(0,1);
        //Grass2.setTintFill(0xFF0000); // pratique pour dbugger
        Grass2.angle=-1;
        Grass2.scaleY=1.1;
        this.groundContainer.add(mushr2);
        /**
         * Grass3
         * @type {Phaser.GameObjects.Image}
         */
        let Grass3=this.add.image(1610,425, 'g-grass-2').setOrigin(0,1);
        //Grass3.setTintFill(0xFF0000); // pratique pour dbugger
        Grass3.angle=-1;
        Grass3.scaleY=1.1;
        this.groundContainer.add(Grass3);
        /**
         * F for respect
         * @type {Phaser.GameObjects.Image}
         */
        let Fallen=this.add.image(1790,405, 'Ftree').setOrigin(0,1);
        //Fallen.setTintFill(0xFF0000); // pratique pour dbugger
        Fallen.angle=5.5;
        Fallen.scaleY=1;
        this.groundContainer.add(Fallen);
        /**
         * Grass again
         * @type {Phaser.GameObjects.Image}
         */
        let Grass5=this.add.image(1745,425, 'g-grass-1').setOrigin(0,1);
        //Grass5.setTintFill(0xFF0000); // pratique pour dbugger
        this.groundContainer.add(Grass5);
        /**
         * Grass again again
         * @type {Phaser.GameObjects.Image}
         */
        let Grass6=this.add.image(1770,430, 'g-grass-1').setOrigin(0,1);
        //Grass6.setTintFill(0xFF0000); // pratique pour dbugger
        this.groundContainer.add(Grass6);
        /**
         * Maitre Gims
         * @type {Phaser.GameObjects.Image}
         */
        let Zombo=this.add.image(370,360, 'Z1').setOrigin(0,1);
        //Zombo.setTintFill(0xFF0000); // pratique pour dbugger
        this.groundContainer.add(Zombo);
        /**
         * Fzombo
         * @type {Phaser.GameObjects.Image}
         */
        let Zombo2=this.add.image(1950,370, 'Z4').setOrigin(0,1);
        //Zombo2.setTintFill(0xFF0000); // pratique pour dbugger
        Zombo2.angle=10.5;
        this.groundContainer.add(Zombo2);
        /**
         * G plus d'inspi
         * @type {Phaser.GameObjects.Image}
         */
        let Zombo3=this.add.image(2450,430, 'Z5').setOrigin(0,1);
        //Zombo3.setTintFill(0xFF0000); // pratique pour dbugger
        Zombo3.scaleX=-1;
        Zombo3.angle=-6.5;
        this.groundContainer.add(Zombo3);
        /**
         * a f'nish'n bow' o' wo'er
         * @type {Phaser.GameObjects.Image}
         */
        let Water2=this.add.image(2575,700, 'gwater').setOrigin(0,1);
        //Water2.setTintFill(0xFF0000); // pratique pour dbugger
        Water2.scaleX=10;
        this.groundContainer.add(Water2);
        this.groundContainer.sendToBack();

        /**
         * Terrain 1
         * @type {Phaser.GameObjects.Image}
         */
            //ici on va calculer les positions
        let gMid1=this.add.image(0,350, 'gMid').setOrigin(0,0);
        this.groundContainer.add(gMid1);
        /**
         * Terrain 2
         * @type {Phaser.GameObjects.Image}
         */
        let gMid2=this.add.image(gMid1.x+gMid1.width,350, 'gMid').setOrigin(0,0); //on rajoute 1 px pour l'exemple
        this.groundContainer.add(gMid2);
        /**
         * Terrain 3
         * @type {Phaser.GameObjects.Image}
         */
        let gMid3=this.add.image(gMid2.x+gMid2.width,350, 'gRight').setOrigin(0,0);
        this.groundContainer.add(gMid3);
        /**
         * Terrain 4
         * @type {Phaser.GameObjects.Image}
         */
        let gMid4=this.add.image(1050,400, 'gLeft').setOrigin(0,0);
        this.groundContainer.add(gMid4);
        /**
         * Terrain 5
         * @type {Phaser.GameObjects.Image}
         */
        let gMid5=this.add.image(gMid4.x+gMid4.width,400, 'gMid').setOrigin(0,0);
        this.groundContainer.add(gMid5);
        /**
         * Terrain 6
         * @type {Phaser.GameObjects.Image}
         */
        let gMid6=this.add.image(gMid5.x+gMid5.width,400, 'gMid').setOrigin(0,0);
        this.groundContainer.add(gMid6);
        /**
         * Terrain 7
         * @type {Phaser.GameObjects.Image}
         */
        let gMid7=this.add.image(gMid6.x+gMid6.width,400, 'gRight').setOrigin(0,0);
        this.groundContainer.add(gMid7);
        /**
         * Terrain 8
         * @type {Phaser.GameObjects.Image}
         */
        let gMid8=this.add.image(2200,425, 'gLeft').setOrigin(0,0);
        this.groundContainer.add(gMid8);
        /**
         * Terrain 9
         * @type {Phaser.GameObjects.Image}
         */
        let gMid9=this.add.image(gMid8.x+gMid8.width,425, 'gRight').setOrigin(0,0);
        this.groundContainer.add(gMid9);



        /**
         * De l'herbe en textures qui se répète
         * @type {Phaser.GameObjects.TileSprite}
         */
        let grass=this.add.tileSprite(0,370,gMid3.x+gMid3.width-40,50,'g-grass-1').setOrigin(0,1)
        this.groundContainer.add(grass);
        /**
         * encore de l'herbe
         * @type {Phaser.GameObjects.TileSprite}
         */
        let grass2=this.add.tileSprite(0,370,gMid3.x+gMid3.width-40,50,'g-grass-3').setOrigin(0,1)
        this.groundContainer.add(grass2);
        /**
         * filtre type film au premier plan
         * @type {Phaser.GameObjects.Sprite}
         */
        this.filterFilm = this.add.sprite(0, 0, 'filterFilm1').setOrigin(0,0);
        //animation de 3 images
        this.anims.create({
            key: 'film',
            frames: [
                {key:'filterFilm1'},
                {key:'filterFilm2'},
                {key:'filterFilm3'},
            ],
            frameRate: 16,
            repeat: -1
        });
        this.filterFilm.play('film');

        //TODO élève faire une animation du même genre que filter mais pour bgAnimationA

        //gestion du parallaxe
        /**
         * Vitesse de déplacement du décor
         * @type {number}
         */
        this.speed=0;
        //initialise ce qui se passe avec le clavier
        this.initKeyboard();
        // Définit l'espace de déplacement de la caméra
        this.cameras.main.setBounds(0, 0, 3000, 540);
        //définit à quelles vitesse se déplacent nos différents plans
        bgAnimationA.scrollFactorX=0;
        this.filterFilm.scrollFactorX=0;
        this.bg2Container.scrollFactorX=0.2;
        this.bg1Container.scrollFactorX=0.4;
        this.groundContainer.scrollFactorX=1;
    }
    /**
     * Définit ce qui se passe quand on appuie ou relache une touche du clavier
     * ALGO : ceci est une fonction ou méthode
     */
    initKeyboard(){
        let me=this;
        this.input.keyboard.on('keydown', function(kevent)
        {
            switch (kevent.keyCode)
            {
                case Phaser.Input.Keyboard.KeyCodes.RIGHT:
                    me.speed=20;
                    break;
                case Phaser.Input.Keyboard.KeyCodes.LEFT:
                    me.speed=-20;
                    break;
                case Phaser.Input.Keyboard.KeyCodes.Q:
                    me.speed=-50;
                    break;
                case Phaser.Input.Keyboard.KeyCodes.D:
                    me.speed=50;
                    break;
            }
        });
        this.input.keyboard.on('keyup', function(kevent)
        {
            switch (kevent.keyCode)
            {
                case Phaser.Input.Keyboard.KeyCodes.RIGHT:
                case Phaser.Input.Keyboard.KeyCodes.LEFT:
                case Phaser.Input.Keyboard.KeyCodes.D:
                case Phaser.Input.Keyboard.KeyCodes.Q:
                    me.speed=0;
                    break;
            }
        });
    }

    /**
     * Cette fonction s'exécute en boucle (à peu près 60 fois par secondes)
     */
    update(){
        //déplacement de la caméra
        this.cameras.main.scrollX+=this.speed; // on aurait pu écrire : this.cameras.main.scrollX= this.cameras.main.scrollX + this.speed;

        //petit effet de vibrance sur le filtre film au tout premier plan
        this.filterFilm.setAlpha(Phaser.Math.Between(95,100)/100)
    }


}
