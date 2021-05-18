var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 360,
    height: 640,
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);
//var uuu;
var bg;
var blueColor;
var redColor;
var yellowColor;
var greenColor;
var purpleColor;
var blueLightColor;
var orangeColor;
var blackColor;
var next1Clicked;

var next;

console.warn = () => {};

function preload ()
{
    //----brushes---
    //works
    this.load.image('balls', './boules/blanc.png');
    //works
    this.load.image('blue', './boules/bleu.png');
    //works
    this.load.image('red', './boules/rouge-01.png');
    //works
    this.load.image('yellow', './boules/jaune2.png');
    //works
    this.load.image('green', './boules/vert-01.png');
//    this.load.image('purple', './boules/rose.png');
    //works
    this.load.image('pink', './boules/rose.png');
    
    //works
    this.load.image('blueLight', './boules/bleuclair.png');
    
    this.load.image('orange', './boules/orange.png');
    
    this.load.image('black', './boules/noir.png');
    
    
    //---background---
    this.load.image('bg', 'p1.jpeg');
    this.load.image('bg2', 'p2-1.jpeg');
    this.load.image('bg3', 'p2-2.jpeg');
    this.load.image('bg4', 'p3-1.jpeg');
    this.load.image('bg5', 'p3-3.jpeg');
    this.load.image('bg6', 'p4-1.jpeg');
    this.load.image('bg7', 'p4-2.jpeg');
    this.load.image('bg8', 'p4-3.jpeg');
    this.load.image('bg9', 'p4-4.jpeg');
    this.load.image('bg10', 'p5-1.jpeg');
    this.load.image('bg11', 'p5-2.jpeg');
    this.load.image('bg12', 'p5-3.jpeg');
    this.load.image('bg13', 'p6-1.jpeg');
    this.load.image('bg14', 'p6-2.jpeg');
    this.load.image('bg15', 'p6-3.jpeg');
    this.load.image('bg16', 'p7-1.jpeg');
    this.load.image('bg17', 'p7-2.jpeg');
    
    
    
}

function create ()
{
//    var test = this.add.sprite(100, 100, 'balls');
//    test.setScale(0.5);
    
//    uuu = this.add.text(100,100, 'UUU');
//    uuu.fontSize = 7000;
    
//    var TEST = this.add.image(200,620, 'blue');
//    TEST.setScale(10);
    
    
    //couleur de base de la brush
    blackColor = true;
    next1Clicked = false;
    
    
//image de background 1 = dessin 1
//    localStorage.setItem("dessin fini", "0");
    //si le user clique sur next alors...
    var dessinFini = localStorage.getItem("dessin fini");
    if(dessinFini === "0"){
        bg = this.add.image(180, 300, 'bg');
        bg.setScale(0.5);
    }
    if(dessinFini === "1"){
        bg2 = this.add.image(180, 300, 'bg2');
        bg2.setScale(0.5);
    }
    
    if(dessinFini === "2"){
        bg3 = this.add.image(180, 300, 'bg3');
        bg3.setScale(0.5);
    }
    if(dessinFini === "3"){
        bg4 = this.add.image(180, 300, 'bg4');
        bg4.setScale(0.5);
    }
    
    if(dessinFini === "4"){
        bg5 = this.add.image(180, 300, 'bg5');
        bg5.setScale(0.5);
    }
    
    if(dessinFini === "5"){
        bg6 = this.add.image(180, 300, 'bg6');
        bg6.setScale(0.5);
    }
    
    if(dessinFini === "6"){
        bg7 = this.add.image(180, 300, 'bg7');
        bg7.setScale(0.5);
    }
    
    if(dessinFini === "7"){
        bg8 = this.add.image(180, 300, 'bg8');
        bg8.setScale(0.5);
    }
    
    if(dessinFini === "8"){
        bg9 = this.add.image(180, 300, 'bg9');
        bg9.setScale(0.5);
    }
    
    if(dessinFini === "9"){
        bg10 = this.add.image(180, 300, 'bg10');
        bg10.setScale(0.5);
    }
    
    if(dessinFini === "10"){
        bg11 = this.add.image(180, 300, 'bg11');
        bg11.setScale(0.5);
    }
    
    if(dessinFini === "11"){
        bg12 = this.add.image(180, 300, 'bg12');
        bg12.setScale(0.5);
    }
    if(dessinFini === "12"){
        bg13 = this.add.image(180, 300, 'bg13');
        bg13.setScale(0.5);
    }
    if(dessinFini === "13"){
        bg14 = this.add.image(180, 300, 'bg14');
        bg14.setScale(0.5);
    }
    if(dessinFini === "14"){
        bg15 = this.add.image(180, 300, 'bg15');
        bg15.setScale(0.5);
    }
    if(dessinFini === "15"){
        bg16 = this.add.image(180, 300, 'bg16');
        bg16.setScale(0.5);
    }


    
//    this.add.image(100,100, 'test');
    
    this.input.on('pointermove', function (pointer) {
        
        //si user clique sur btn de couleur...

        if (pointer.isDown && blackColor === true && next1Clicked === false)
        {
            this.add.image(pointer.x, pointer.y, 'black', Phaser.Math.Between(0, 10.3));
        }
        
        if(pointer.isDown && redColor === true){
            this.add.image(pointer.x, pointer.y, 'red', Phaser.Math.Between(0, 10.3));
        }
        
        if(pointer.isDown && yellowColor === true){
            this.add.image(pointer.x, pointer.y, 'yellow', Phaser.Math.Between(0, 10.3));
        }
        
         if(pointer.isDown && greenColor === true){
            this.add.image(pointer.x, pointer.y, 'green', Phaser.Math.Between(0, 10.3));
        }
        
        if(pointer.isDown && purpleColor === true){
            this.add.image(pointer.x, pointer.y, 'purple', Phaser.Math.Between(0, 10.3));
        }
        
        if(pointer.isDown && blueLightColor === true){
            this.add.image(pointer.x, pointer.y, 'blueLight', Phaser.Math.Between(0, 10.3));
        }
        
        if(pointer.isDown && orangeColor === true){
            this.add.image(pointer.x, pointer.y, 'orange', Phaser.Math.Between(0, 10.3));
        }
        
        if(pointer.isDown && blueColor === true){
            this.add.image(pointer.x, pointer.y, 'blue', Phaser.Math.Between(0, 10.3));
        }
        
        

    }, this);
    
    //quand l'user clique sur un des cercles
    this.input.on('pointerdown', function(pointer){
        console.log('hello');
        console.log(pointer.x);
        console.log(pointer.y);
        
        if(pointer.x >= 130 && pointer.x <= 140  && pointer.y >= 250 && pointer.y <=260){
            console.log('cliqué sur le yellow');
            yellowColor = true;
            greenColor = false;
            redColor = false;
            blueColor = false;
            purpleColor = false;
//            brownColor = false;
//            greenKakiColor = false; 
            blackColor = false; 
            orangeColor = false;
//            greyColor = false; 
            blueLightColor = false; 
//            roseColor = false;
        }
        
        if(pointer.x >= 115 && pointer.x <= 125  && pointer.y >= 250 && pointer.y <=260){
            console.log('cliqué sur le red');
            yellowColor = false;
            greenColor = false;
            redColor = true;
            blueColor = false;
            purpleColor = false;
//            brownColor = false;
//            greenKakiColor = false; 
            blackColor = false; 
            orangeColor = false;
//            greyColor = false; 
            blueLightColor = false; 
//            roseColor = false;
        }
        
        if(pointer.x >= 10 && pointer.x <= 15  && pointer.y >= 80 && pointer.y <=85){
            console.log('cliqué sur le green');
            greenColor = true;
            yellowColor = false;
            redColor = false;
            blueColor = false;
        }
        
        if(pointer.x >= 9 && pointer.x <= 13  && pointer.y >= 110 && pointer.y <=120){
            console.log('cliqué sur le purple');
            yellowColor = false;
            greenColor = false;
            redColor = false;
            blueColor = false;
            purpleColor = true;
//            brownColor = false;
//            greenKakiColor = false; 
            blackColor = false; 
            orangeColor = false;
//            greyColor = false; 
            blueLightColor = false; 
//            roseColor = false;
        }
        
        if(pointer.x >= 145 && pointer.x <= 150  && pointer.y >= 250 && pointer.y <=260){
            console.log('cliqué sur le blue light');
            yellowColor = false;
            greenColor = false;
            redColor = false;
            blueColor = false;
            purpleColor = false;
//            brownColor = false;
//            greenKakiColor = false; 
            blackColor = false; 
            orangeColor = false;
//            greyColor = false; 
            blueLightColor = true; 
//            roseColor = false;
        }
        
        if(pointer.x >= 175 && pointer.x <= 180  && pointer.y >= 250 && pointer.y <=260){
            console.log('cliqué sur le orange');
            yellowColor = false;
            greenColor = false;
            redColor = false;
            blueColor = false;
            purpleColor = false;
//            brownColor = false;
//            greenKakiColor = false; 
            blackColor = false; 
            orangeColor = true;
//            greyColor = false; 
            blueLightColor = false; 
//            roseColor = false;
        }
        
        if(pointer.x >= 160 && pointer.x <= 170  && pointer.y >= 250 && pointer.y <=260){
            console.log('cliqué sur le blue');
            yellowColor = false;
            greenColor = false;
            redColor = false;
            blueColor = true;
            purpleColor = false;
    //        brownColor = false;
    //        greenKakiColor = false; 
            blackColor = false; 
            orangeColor = false;
    //      greyColor = false; 
            blueLightColor = false; 
    //        roseColor = false;
        }
        
        if(pointer.x >= 150 && pointer.x <= 186  && pointer.y >= 550 && pointer.y <=562){
            console.log("next cliqué");
            next1Clicked = true;
            
            if(dessinFini === "0"){
                localStorage.setItem("dessin fini", "1");
                bg.setVisible(false);
            }
            
            if(dessinFini === "1"){
                localStorage.setItem("dessin fini", "2");
                bg2.setVisible(false);
            }
            
            if(dessinFini === "2"){
                localStorage.setItem("dessin fini", "3");
//                bg2.setVisible(false);
//                bg.setVisible(false);
            }
            if(dessinFini === "3"){
                localStorage.setItem("dessin fini", "4");
//                bg2.setVisible(false);
//                bg.setVisible(false);
            }
            
            if(dessinFini === "4"){
                localStorage.setItem("dessin fini", "5");
//                bg2.setVisible(false);
//                bg.setVisible(false);
            }
            
            if(dessinFini === "5"){
                localStorage.setItem("dessin fini", "6");
//                bg2.setVisible(false);
//                bg.setVisible(false);
            }
            if(dessinFini === "6"){
                localStorage.setItem("dessin fini", "7");
//                bg2.setVisible(false);
//                bg.setVisible(false);
            }
            
            if(dessinFini === "7"){
                localStorage.setItem("dessin fini", "8");
//                bg2.setVisible(false);
//                bg.setVisible(false);
            }
            
            if(dessinFini === "8"){
                localStorage.setItem("dessin fini", "9");
//                bg2.setVisible(false);
//                bg.setVisible(false);
            }
            if(dessinFini === "9"){
                localStorage.setItem("dessin fini", "10");
//                bg2.setVisible(false);
//                bg.setVisible(false);
            }
            if(dessinFini === "10"){
                localStorage.setItem("dessin fini", "11");
//                bg2.setVisible(false);
//                bg.setVisible(false);
            }
            
            if(dessinFini === "11"){
                localStorage.setItem("dessin fini", "12");
//                bg2.setVisible(false);
//                bg.setVisible(false);
            }
            if(dessinFini === "12"){
                localStorage.setItem("dessin fini", "13");
//                bg2.setVisible(false);
//                bg.setVisible(false);
            }
            if(dessinFini === "13"){
                localStorage.setItem("dessin fini", "14");
//                bg2.setVisible(false);
//                bg.setVisible(false);
            }
            if(dessinFini === "14"){
                localStorage.setItem("dessin fini", "15");
//                bg2.setVisible(false);
//                bg.setVisible(false);
            }
            if(dessinFini === "15"){
                localStorage.setItem("dessin fini", "16");
//                bg2.setVisible(false);
//                bg.setVisible(false);
            }
            location.reload();
            
            
            
        }
        
        
    });
    
    //--------bouton pour mettre fullscreen------
    var button = this.add.image(30, 16, 'fullscreen', 0).setOrigin(1, 0).setInteractive();
    //mettre ce bouton sur le start et mettre une icone belle
    //DOIT etre executé avec btnclick

        button.on('pointerup', function () {

            if (this.scale.isFullscreen)
            {
                button.setFrame(0);

                this.scale.stopFullscreen();
            }
            else
            {
                button.setFrame(1);

                this.scale.startFullscreen();
            }

        }, this);
    
//    var btnNext = this.add.image(100, 100, 'fullscreen', 0).setOrigin(1, 0).setInteractive();
    next = this.add.text(150,550, 'NEXT');
//    problem2.setVisible(false);
}

