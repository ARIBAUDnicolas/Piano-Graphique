
class Tableau1 extends Phaser.Scene {



    preload() {
        /** Images **/
        this.load.image("BG", "assets/Background.png");
        this.load.image("cav", "assets/cav.png");
        this.load.image("fant", "assets/fant.png");
        this.load.image("bow", "assets/bow.png");
        for(let i=1;i<=17;i++){
            this.load.image('bat'+i, 'assets/ ('+i+').png');
        }
        /** sons **/
        this.load.audio('barrack','sons/barrack.MP3');
        this.load.audio('castle','sons/castle.MP3');
        this.load.audio('church','sons/church.MP3');
        this.load.audio('house','sons/house.MP3');
        this.load.audio('lcamp','sons/lcamp.MP3');
        this.load.audio('mcamp','sons/mcamp.MP3');
        this.load.audio('mill','sons/mill.MP3');
        this.load.audio('forge','sons/forge.MP3');
        this.load.audio('market','sons/market.MP3');
        this.load.audio('range','sons/range.MP3');
        this.load.audio('siegews','sons/siegews.MP3');
        this.load.audio('stable','sons/stable.MP3');
        this.load.audio('tower','sons/tower.MP3');
        this.load.audio('university','sons/university.MP3');
        this.load.audio('cav','sons/cav.MP3');
        this.load.audio('recruit','sons/recruit.MP3');
        this.load.audio('archer','sons/archer.MP3');
    }
    create() {
        /**  Les SONS  **/
        this.barrack = this.sound.add('barrack');
        this.castle = this.sound.add('castle');
        this.church = this.sound.add('church');
        this.house = this.sound.add('house');
        this.lcamp = this.sound.add('lcamp');
        this.mcamp = this.sound.add('mcamp');
        this.mill = this.sound.add('mill');
        this.forge = this.sound.add('forge');
        this.market = this.sound.add('market');
        this.range = this.sound.add('range');
        this.siegews = this.sound.add('siegews');
        this.stable = this.sound.add('stable');
        this.tower = this.sound.add('tower');
        this.university = this.sound.add('university');
        this.cavsound = this.sound.add('cav');
        this.recruit = this.sound.add('recruit');
        this.archer = this.sound.add('archer');


        /**  Les BATIMENTS  **/
        this.add.image(0, 0, 'BG').setOrigin(0, 0)


        this.appears = this.add.container(0, 0);

        /**  BAT  **/
        this.bat1= this.add.image(1450, 415, 'bat1').setOrigin(0, 0);
        this.bat1.visible = false

        /**  BAT  **/
        this.bat2= this.add.image(650, -70, 'bat2').setOrigin(0, 0);
        this.bat2.visible = false

        /**  BAT  **/
        this.bat3= this.add.image(450, 305, 'bat3').setOrigin(0, 0);
        this.bat3.visible = false

        /**  BAT  **/
        this.bat5= this.add.image(400, 110, 'bat5').setOrigin(0, 0);
        this.bat5.visible = false

        /**  BAT  **/
        this.bat4= this.add.image(250, 225, 'bat4').setOrigin(0, 0);
        this.bat4.visible = false

        /**  BAT  **/
        this.bat6= this.add.image(0, 425, 'bat6').setOrigin(0, 0);
        this.bat6.visible = false

        /**  BAT  **/
        this.bat7= this.add.image(1350, -50, 'bat7').setOrigin(0, 0);
        this.bat7.visible = false

        /**  BAT  **/
        this.bat8= this.add.image(20, 15, 'bat8').setOrigin(0, 0);
        this.bat8.visible = false

        /**  BAT  **/
        this.bat9= this.add.image(1550, 775, 'bat9').setOrigin(0, 0);
        this.bat9.visible = false

        /**  BAT  **/
        this.bat10= this.add.image(850, 90, 'bat10').setOrigin(0, 0);
        this.bat10.visible = false

        /**  BAT  **/
        this.bat11= this.add.image(420, 615, 'bat11').setOrigin(0, 0);
        this.bat11.visible = false

        /**  BAT  **/
        this.bat12= this.add.image(1250, 620, 'bat12').setOrigin(0, 0);
        this.bat12.visible = false

        /**  BAT  **/
        this.cav= this.add.image(1280, 775, 'cav').setOrigin(0, 0);
        this.cav.visible = false

        /**  BAT  **/
        this.bat13= this.add.image(1680, 545, 'bat13').setOrigin(0, 0);
        this.bat13.visible = false

        /**  BAT  **/
        this.bat14= this.add.image(200, 0, 'bat14').setOrigin(0, 0);
        this.bat14.visible = false

        /**  BAT  **/
        this.bat15= this.add.image(1250, 230, 'bat15').setOrigin(0, 0);
        this.bat15.visible = false

        /**  BAT  **/
        this.bat16= this.add.image(920, 400, 'bat16').setOrigin(0, 0);
        this.bat16.visible = false

        /**  BAT  **/
        this.bow= this.add.image(980, 605, 'bow').setOrigin(0, 0);
        this.bow.visible = false

        /**  BAT  **/
        this.bat17= this.add.image(600, 375, 'bat17').setOrigin(0, 0);
        this.bat17.visible = false

        /**  BAT  **/
        this.fant= this.add.image(780, 605, 'fant').setOrigin(0, 0);
        this.fant.visible = false




        this.initKeyboard();
    }
    initKeyboard(){
        let me=this
        this.input.keyboard.on('keydown', function(kevent) {
            switch (kevent.keyCode) {
                case Phaser.Input.Keyboard.KeyCodes.A:
                    me.bat2.visible = true;
                    me.castle.play();
                    break;
                case Phaser.Input.Keyboard.KeyCodes.Z:
                    me.bat1.visible = true;
                    me.forge.play();
                    break;
                case Phaser.Input.Keyboard.KeyCodes.E:
                    me.bat3.visible = true;
                    me.house.play();
                    break;
                case Phaser.Input.Keyboard.KeyCodes.R:
                    me.bat4.visible = true;
                    me.house.play();
                    break;
                case Phaser.Input.Keyboard.KeyCodes.T:
                    me.bat5.visible = true;
                    me.house.play();
                    break;
                case Phaser.Input.Keyboard.KeyCodes.Y:
                    me.bat6.visible = true;
                    me.lcamp.play();
                    break;
                case Phaser.Input.Keyboard.KeyCodes.U:
                    me.bat7.visible = true;
                    me.market.play();
                    break;
                case Phaser.Input.Keyboard.KeyCodes.I:
                    me.bat8.visible = true;
                    me.mill.play();
                    break;
                case Phaser.Input.Keyboard.KeyCodes.O:
                    me.bat9.visible = true;
                    me.mcamp.play();
                    break;
                case Phaser.Input.Keyboard.KeyCodes.P:
                    me.bat10.visible = true;
                    me.church.play();
                    break;
                case Phaser.Input.Keyboard.KeyCodes.Q:
                    me.bat11.visible = true;
                    me.siegews.play();
                    break;
                case Phaser.Input.Keyboard.KeyCodes.S:
                    me.bat12.visible = true;
                    me.stable.play();
                    break;
                case Phaser.Input.Keyboard.KeyCodes.D:
                    me.bat13.visible = true;
                    me.tower.play();
                    break;
                case Phaser.Input.Keyboard.KeyCodes.F:
                    me.bat14.visible = true;
                    me.tower.play();
                    break;
                case Phaser.Input.Keyboard.KeyCodes.G:
                    me.bat15.visible = true;
                    me.university.play();
                    break;
                case Phaser.Input.Keyboard.KeyCodes.H:
                    me.bat16.visible = true;
                    me.range.play();
                    break;
                case Phaser.Input.Keyboard.KeyCodes.J:
                    me.bat17.visible = true;
                    me.barrack.play();
                    break;
                case Phaser.Input.Keyboard.KeyCodes.W:
                    me.cav.visible = true;
                    me.cavsound.play();
                    break;
                case Phaser.Input.Keyboard.KeyCodes.X:
                    me.fant.visible = true;
                    me.recruit.play();
                    break;
                case Phaser.Input.Keyboard.KeyCodes.C:
                    me.bow.visible = true;
                    me.archer.play();
                    break;

            }
        })
    }
}
