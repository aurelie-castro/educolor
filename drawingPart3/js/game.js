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

//---------variables globales-----------
//var du background 1
var bg;

var bg2;
var bg3;

//var des couleurs
var blueColor;
var redColor;
var yellowColor;
var greenColor;
var purpleColor;
var blueLightColor;
var orangeColor;
var blackColor;
var greenKakiColor;
var brownColor;
var pinkColor;
var greyColor;

//pas besoin
var next1Clicked;

//var des boules colorées
var testBoules;

//var du bouton next
var next;

var testTest;


let imageIndex = 0;

//façon pour enlever les warn inutiles dans la console
//qui faisaient lagger la page
console.warn = () => {};

function preload ()
{
    var bgImage = this.load.image('testEdu', '../assets/images/covereducolor-02.jpg');
    //--------brushes-------
    //white
    this.load.image('balls', './boules/blanc.png');
    
    //blue
    this.load.image('blue', './boules/boule-bleuvif.png');
    
    //red
    this.load.image('red', './boules/boule-rouge.png');
    
    //yellow
    this.load.image('yellow', './boules/boule-jaune.png');
    
    //green
    this.load.image('green', './boules/boule-vert.png');
    
    //blueLight
    this.load.image('blueLight', './boules/boule-bleu.png');
    
    //orange
    this.load.image('orange', './boules/boule-orange.png');
    
    //black
    this.load.image('black', './boules/dotdot.png');
    
    //purple
    this.load.image('purple', './boules/boule-mauve.png');
    
    //greenKaki
    this.load.image('greenKaki', './boules/boule-vertclair.png');
    
    //brown
    this.load.image('brown', './boules/boule-brun.png');
    
    //pink
    this.load.image('pink', './boules/boule-rose.png');
    
    //grey
    this.load.image('grey', './boules/boule-bleupastel.png');
    
    
    //---background---
    this.load.image('bg', '../assets/images/backgrounds/p1-new.jpeg');
    this.load.image('bg2', '../assets/images/backgrounds/p2-1.jpeg');
    this.load.image('bg3', '../assets/images/backgrounds/p2-2.jpeg');
    this.load.image('bg4', '../assets/images/backgrounds/p3-1.jpeg');
    this.load.image('bg5', '../assets/images/backgrounds/p3-3.jpeg');
    this.load.image('bg6', '../assets/images/backgrounds/p4-1.jpeg');
    this.load.image('bg7', '../assets/images/backgrounds/p4-2.jpeg');
    this.load.image('bg8', '../assets/images/backgrounds/p4-3.jpeg');
    this.load.image('bg9', '../assets/images/backgrounds/p4-4.jpeg');
    this.load.image('bg10', '../assets/images/backgrounds/p5-1.jpeg');
    this.load.image('bg11', '../assets/images/backgrounds/p5-2.jpeg');
    this.load.image('bg12', '../assets/images/backgrounds/p5-3.jpeg');
    this.load.image('bg13', '../assets/images/backgrounds/p6-1.jpeg');
    this.load.image('bg14', '../assets/images/backgrounds/p6-2.jpeg');
    this.load.image('bg15', '../assets/images/backgrounds/p6-3.jpeg');
    this.load.image('bg16', '../assets/images/backgrounds/p7-1.jpeg');
    this.load.image('bg17', '../assets/images/backgrounds/p7-2.jpeg');
    
    //-----rangées de cercles-----------
    this.load.image('testBoules', '../assets/images/palettes/couleurs-version3.png');
    
    
    
}

function create ()
{
//    var test = this.add.sprite(100, 100, 'balls');
//    test.setScale(0.5);
    
//    var TEST = this.add.image(200,620, 'blue');
//    TEST.setScale(10);
    bgImage = this.add.image(160, 320, 'testEdu');
    bgImage.setDepth(2);
    bgImage.setScale(1);
    
    bg2 = this.add.image(100,100, 'bg2');    
//    textBtn.setDepth(0);
    bg2.setVisible(false);
//    bg2.setDepth(1);
    
    bg3 = this.add.image(100, 100, 'bg3');
//    bg3.setDepth(1);
    bg3.setVisible(false);
    
//-----couleur de base de la brush----
    blackColor = true;
    next1Clicked = false;
    
//---------image des deux rangées de cercles-----------
    testBoules = this.add.image(204, 52, 'testBoules');
    testBoules.setScale(0.6);
    
    
//--------background images------------
//image de background 1 = dessin 1
// localStorage.setItem("dessin fini", "0"); 
    
//si le user clique sur next alors ça va chercher la valeur de 'dessin fini' dans le localstorage
//et en dépendant de cette valeur, ça affiche la bonne image
    
    var dessinFini = localStorage.getItem("dessin fini");
//    if(dessinFini === "0"){
//        bg = this.add.image(180, 300, 'bg');
//        bg.setScale(0.5);
//    }
    bg = this.add.image(175, 330, 'bg');
    bg.setScale(0.7);
    
//   
//    this.add.image(100,100, 'test');
    
    //----------------interaction des brush = dessin---------------------------
    
    this.input.on('pointermove', function (pointer) {
        
        //si user déplace sa souris/doigt sur l'image 
        //et cela fait apparaître une boule colorée (de la couleur choisie)
        //à l'endroit où il a fait cela
        //si le user ne selectionne pas de couleur, alors la couleur de la brush sera d'office noire
        
        if(pointer.y > 108 && pointer.y < 535){
                
            if (pointer.isDown && blackColor === true)
            {
                    this.add.image(pointer.x, pointer.y, 'black');
            }


            if(pointer.isDown && redColor === true){
                testIDK = this.add.image(pointer.x, pointer.y, 'red');

            }

            if(pointer.isDown && yellowColor === true){
                this.add.image(pointer.x, pointer.y, 'yellow');
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

            if(pointer.isDown && greenKakiColor === true){
                this.add.image(pointer.x, pointer.y, 'greenKaki', Phaser.Math.Between(0, 10.3));
            }

            if(pointer.isDown && brownColor === true){
                this.add.image(pointer.x, pointer.y, 'brown', Phaser.Math.Between(0, 10.3));
            }

            if(pointer.isDown && pinkColor === true){
                this.add.image(pointer.x, pointer.y, 'pink', Phaser.Math.Between(0, 10.3));
            }

            if(pointer.isDown && greyColor === true){
                this.add.image(pointer.x, pointer.y, 'grey', Phaser.Math.Between(0, 10.3));
            }
        }
        
        

    }, this);
    
    
    

    //-----------------changement de couleur----------------------
    //quand l'user clique sur un des cercles pour choisir la couleur de sa brush
    this.input.on('pointerdown', function(pointer){
        console.log('hello');
        console.log(pointer.x);
        console.log(pointer.y);
    
        
        if(pointer.x >= 134 && pointer.x <= 164  && pointer.y >= 21 && pointer.y <=49){
            console.log('cliqué sur le yellow');
            yellowColor = true;
            greenColor = false;
            redColor = false;
            blueColor = false;
            purpleColor = false;
            brownColor = false;
            greenKakiColor = false; 
            blackColor = false; 
            orangeColor = false;
            greyColor = false; 
            blueLightColor = false;
            pinkColor = false;
        }
        
        if(pointer.x >= 75 && pointer.x <= 103  && pointer.y >= 68 && pointer.y <=95){
            console.log('cliqué sur le red');
            yellowColor = false;
            greenColor = false;
            redColor = true;
            blueColor = false;
            purpleColor = false;
            brownColor = false;
            greenKakiColor = false; 
            blackColor = false; 
            orangeColor = false;
            greyColor = false; 
            blueLightColor = false;
            pinkColor = false;
        }
        
        if(pointer.x >= 252 && pointer.x <= 281  && pointer.y >= 20 && pointer.y <=49){
            console.log('cliqué sur le green');
            greenColor = true;
            yellowColor = false;
            redColor = false;
            blueColor = false;
            purpleColor = false;
              brownColor = false;
            greenKakiColor = false; 
            blackColor = false; 
            orangeColor = false;
            greyColor = false; 
            blueLightColor = false;
            pinkColor = false;
        }
        
        if(pointer.x >= 133 && pointer.x <= 161  && pointer.y >= 67 && pointer.y <=98){
            console.log('cliqué sur le purple');
            yellowColor = false;
            greenColor = false;
            redColor = false;
            blueColor = false;
            purpleColor = true;
            brownColor = false;
            greenKakiColor = false; 
            blackColor = false; 
            orangeColor = false;
            greyColor = false; 
            blueLightColor = false;
            pinkColor = false;
        }
        
        if(pointer.x >= 310 && pointer.x <= 338  && pointer.y >= 67 && pointer.y <=97){
            console.log('cliqué sur le blue light');
            yellowColor = false;
            greenColor = false;
            redColor = false;
            blueColor = false;
            purpleColor = false;
            brownColor = false;
            greenKakiColor = false; 
            blackColor = false; 
            orangeColor = false;
            greyColor = false; 
            blueLightColor = true;
            pinkColor = false;
        }
        
        if(pointer.x >= 15 && pointer.x <= 45  && pointer.y >= 20 && pointer.y <=47){
            console.log('cliqué sur le orange');
            yellowColor = false;
            greenColor = false;
            redColor = false;
            blueColor = false;
            purpleColor = false;
            brownColor = false;
            greenKakiColor = false; 
            blackColor = false; 
            orangeColor = true;
            greyColor = false; 
            blueLightColor = false;
            pinkColor = false;
        }
        
        if(pointer.x >= 309 && pointer.x <= 337  && pointer.y >= 19 && pointer.y <=49){
            console.log('cliqué sur le blue');
            yellowColor = false;
            greenColor = false;
            redColor = false;
            blueColor = true;
            purpleColor = false;
            brownColor = false;
            greenKakiColor = false; 
            blackColor = false; 
            orangeColor = false;
            greyColor = false; 
            blueLightColor = false;
            pinkColor = false;
        }
        
        if(pointer.x >= 193 && pointer.x <= 223  && pointer.y >= 18 && pointer.y <=50){
            console.log('cliqué sur le greenKaki');
            yellowColor = false;
            greenColor = false;
            redColor = false;
            blueColor = false;
            purpleColor = false;
            brownColor = false;
            greenKakiColor = true; 
            blackColor = false; 
            orangeColor = false;
            greyColor = false; 
            blueLightColor = false;
            pinkColor = false;
        }
        
        if(pointer.x >= 74 && pointer.x <= 103  && pointer.y >= 18 && pointer.y <=51){
            console.log('cliqué sur le brown');
            yellowColor = false;
            greenColor = false;
            redColor = false;
            blueColor = false;
            purpleColor = false;
            brownColor = true;
            greenKakiColor = false; 
            blackColor = false; 
            orangeColor = false;
            greyColor = false; 
            blueLightColor = false; 
            pinkColor = false;
        }
        
        if(pointer.x >= 193 && pointer.x <= 221  && pointer.y >= 68 && pointer.y <=98){
            console.log('cliqué sur le pink');
            yellowColor = false;
            greenColor = false;
            redColor = false;
            blueColor = false;
            purpleColor = false;
            brownColor = false;
            greenKakiColor = false; 
            blackColor = false; 
            orangeColor = false;
            greyColor = false; 
            blueLightColor = false; 
            pinkColor = true;
        }
        
        if(pointer.x >= 254 && pointer.x <= 279  && pointer.y >= 69 && pointer.y <=97){
            testIDK.setVisible(false);
            console.log('cliqué sur le grey');
            yellowColor = false;
            greenColor = false;
            redColor = false;
            blueColor = false;
            purpleColor = false;
            brownColor = false;
            greenKakiColor = false; 
            blackColor = false; 
            orangeColor = false;
            greyColor = true; 
            blueLightColor = false; 
            pinkColor = false;
            
        }
        if(pointer.x >= 15 && pointer.x <= 44  && pointer.y >= 67 && pointer.y <=96){
            console.log('cliqué sur le black');
            yellowColor = false;
            greenColor = false;
            redColor = false;
            blueColor = false;
            purpleColor = false;
            brownColor = false;
            greenKakiColor = false; 
            orangeColor = false;
            greyColor = false; 
            blueLightColor = false; 
            pinkColor = false;
            blackColor = true;
            
        }
        
        //interaction si clic sur le btn play du start
         if(pointer.x >= 2 && pointer.x <= 146  && pointer.y >= 430 && pointer.y <=580){
             bgImage.setVisible(false);
         }
        
    //-------------interaction du bouton next-------------
        if(pointer.x >= 150 && pointer.x <= 186  && pointer.y >= 550 && pointer.y <=562){
            console.log("next cliqué");
            bg.setVisible(false);
            next1Clicked = true;
            imageIndex++;
            
            if(imageIndex === 1){
                bg2.setVisible(true);
                bg.setVisible(false);
            }
            if (imageIndex === 2){
                bg3.setVisible(true);
                bg2.setVisible(false);
//                testIDK.setDepth(-2);
            }

            
        }
        
        
    });
    
    //--------bouton pour mettre fullscreen------
    var button = this.add.image(30, 160, 'fullscreen', 0).setOrigin(1, 0).setInteractive();
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

