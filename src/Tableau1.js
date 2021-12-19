
class Tableau1 extends Phaser.Scene {



    preload() {

        this.load.image("BG", "assets/Background.png");
        this.load.image("cav", "assets/cav.png");
        this.load.image("fant", "assets/fant.png");
        this.load.image("bow", "assets/bow.png");
        for(let i=1;i<=17;i++){
            this.load.image('bat'+i, 'assets/ ('+i+').png');
        }

    }
    create() {
        let cavalier = true;
        let fantassin = true;
        let archer = true;
        let bat1 = true;
        let bat2 = true;
        let bat3 = true;
        let bat4 = true;
        let bat5 = true;
        let bat6 = true;
        let bat7 = true;
        let bat8 = true;
        let bat9 = true;
        let bat10 = true;
        let bat11 = true;
        let bat12 = true;
        let bat13 = true;
        let bat14 = true;
        let bat15 = true;
        let bat16 = true;
        let bat17 = true;

        this.fond = this.add.image(950, 435, "BG");
        this.groundContainer=this.add.container(0,0);






        if (bat2 == true) {
            this.add.image(650, -70, 'bat2').setOrigin(0, 0);
        }
        if (bat3 == true) {
            this.add.image(450, 305, 'bat3').setOrigin(0, 0);
        }
        if (bat5 == true) {
            this.add.image(400, 110, 'bat5').setOrigin(0, 0);
        }
        if (bat4 == true) {
            this.add.image(250, 225, 'bat4').setOrigin(0, 0);
        }
        if (bat6 == true) {
            this.add.image(0, 425, 'bat6').setOrigin(0, 0);
        }
        if (bat7 == true) {
            this.add.image(1350, -50, 'bat7').setOrigin(0, 0);
        }
        if (bat8 == true) {
            this.add.image(20, 15, 'bat8').setOrigin(0, 0);
        }
        if (bat9 == true) {
            this.add.image(1550, 775, 'bat9').setOrigin(0, 0);
        }
        if (bat10 == true) {
            this.add.image(850, 90, 'bat10').setOrigin(0, 0);
        }
        if (bat11 == true) {
            this.add.image(420, 615, 'bat11').setOrigin(0, 0);
        }
        if (bat12 == true) {
            this.add.image(1250, 620, 'bat12').setOrigin(0, 0);
        }
        if (cavalier == true) {
            this.add.image(1280, 775, 'cav').setOrigin(0, 0)
        }
        if (bat13 == true) {
            this.add.image(1680, 545, 'bat13').setOrigin(0, 0);
        }
        if (bat14 == true) {
            this.add.image(200, 0, 'bat14').setOrigin(0, 0);
        }
        if (bat15 == true) {
            this.add.image(1250, 230, 'bat15').setOrigin(0, 0);
        }
        if (bat16 == true) {
            this.add.image(920, 400, 'bat16').setOrigin(0, 0);
        }
        if (archer == true) {
            this.add.image(980, 605, 'bow').setOrigin(0, 0)
        }
        if (bat17 == true) {
            this.add.image(600, 375, 'bat17').setOrigin(0, 0);
        }
        if (fantassin == true) {
            this.add.image(780, 605, 'fant').setOrigin(0, 0)
        }
        if (bat1 == true) {
            this.add.image(1450, 415, 'bat1').setOrigin(0, 0);
        }












    }







}
