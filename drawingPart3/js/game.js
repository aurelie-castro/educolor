var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 360,
    height: 640,
    scene: {
        preload: preload,
        create: create
    },
    backgroundColor: '#ff8000'
};

var game = new Phaser.Game(config);

//---------variables globales-----------
//var des backgrounds
var bg;
var bg2;
var bg3;
var bg4;
var bg5;
var bg6;
var bg7;
var bg8;
var bg9;
var bg10;

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
var colorPalette;

//var du bouton next
var next;


//conteur du nombre de fois où next a été cliqué
let imageIndex = 0;

//var pour le menu de démarrage
let startClicked;
let gameStarted;


//déclaration des vars relatives à la gomme
let erasingColors;
let eraser;
let currentlyColoring;

//déclaration des vars de son
let testSound;

//façon pour enlever les warn inutiles dans la console
//qui faisaient lagger la page
console.warn = () => {};

function preload ()
{
    //image de cover (educolor) avec le bouton start    
    var bgImage = this.load.image('testEdu', 'assets/Cover-01.jpg');
    
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
    
    
    //---backgrounds---
    this.load.image('bg', 'assets/01 TAPA TRANSPORTS 2.jpg');
    this.load.image('bg2', 'assets/04 TAPA TRANSPORTS 2-01.jpg');
    this.load.image('bg3', 'assets/06 TAPA TRANSPORTS 2-01.jpg');
    this.load.image('bg4', 'assets/07 TAPA TRANSPORTS 2-01.jpg');
    this.load.image('bg5', 'assets/10 TAPA TRANSPORTS 2-01.jpg');
    this.load.image('bg6', 'assets/15 TAPA TRANSPORTS 2-01.jpg');
    this.load.image('bg7', 'assets/16 TAPA TRANSPORTS 2-01.jpg');
    this.load.image('bg8', 'assets/21 TAPA TRANSPORTS 2-01.jpg');
//    this.load.image('bg9', 'assets/p4-4.jpeg');
//    this.load.image('bg10', 'assets/p5-1.jpeg');
//    this.load.image('bg11', 'assets/p5-2.jpeg');
//    this.load.image('bg12', 'assets/p5-3.jpeg');
//    this.load.image('bg13', 'assets/p6-1.jpeg');
//    this.load.image('bg14', 'assets/p6-2.jpeg');
//    this.load.image('bg15', 'assets/p6-3.jpeg');
//    this.load.image('bg16', 'assets/p7-1.jpeg');
//    this.load.image('bg17', 'assets/p7-2.jpeg');
    
    //-----rangées de cercles-----------
    this.load.image('colorPalette', 'assets/couleurs-version3.png');
    
    
    this.load.audio('testAudio', 'assets/airport.wav');
    
}

function create ()
{
    
    testSound = this.sound.add('testAudio');
    
    //---tests for responsive---
    let screenWidth = screen.width;
    let screenHeight = screen.height;
    console.log( 'the screen width is ' + screenWidth);
    console.log( 'the screen height is ' + screenHeight);
    
    //---start menu of game (cover)---
    bgImage = this.add.image(180, 315, 'testEdu');
    bgImage.setDepth(2);
    
    //--------background images------------
    
    //makes all images invisible
    bg = this.add.image(180, 315, 'bg');
    bg.setVisible(false);
    
    bg2 = this.add.image(180, 315, 'bg2');    
    bg2.setVisible(false);
    
    bg3 = this.add.image(180, 315, 'bg3');
    bg3.setVisible(false);
    
    bg4 = this.add.image(180, 315, 'bg4');
    bg4.setVisible(false);
    
    bg5 = this.add.image(180, 315, 'bg5');
    bg5.setVisible(false);
    
    bg6 = this.add.image(180, 315, 'bg6');
    bg6.setVisible(false);
    
    bg7 = this.add.image(180, 315, 'bg7');
    bg7.setVisible(false);
    
    bg8 = this.add.image(180, 315, 'bg8');
    bg8.setVisible(false);
    
    //draws a random number from which
    //to pick a bg image at every reload
    var value = Phaser.Math.Between(1, 8);
    
    if(value === 1){
            bg.setVisible(true);
    }
    if (value === 2){
            bg2.setVisible(true);
    }
    if (value === 3){
            bg3.setVisible(true);
    }
    if (value === 4){
            bg4.setVisible(true);
    }
    if (value === 5){
            bg5.setVisible(true);   
    }
    if (value === 6){
            bg6.setVisible(true);
    }
    if (value === 7){
            bg7.setVisible(true);
    }
    if (value === 8){
            bg8.setVisible(true);
    }
    if (value === 9){
            bg10.setVisible(true);
    }
    
//-----couleur de base de la brush----
    blackColor = true;
    next1Clicked = false;
    currentlyColoring = true;
    
//---------image des deux rangées de cercles-----------
    colorPalette = this.add.image(204, 52, 'colorPalette');
    colorPalette.setScale(0.6);
    colorPalette.setDepth(1);
    
//-------valeur des vars par rapport à la gomme-----------------
    erasingColors = false;
    
    gameStarted = sessionStorage.getItem("start clicked");
    console.log("has start been clicked ? " + gameStarted);
    if (gameStarted === "yes"){
        bgImage.setVisible(false);
    }
    console.log(value +" is the value for the bg image");
    
    //----------------interaction des brush = dessin---------------------------
    
    this.input.on('pointermove', function (pointer) {
        
        //si user déplace sa souris/doigt sur l'image 
        //cela fait apparaître une boule colorée (de la couleur choisie)
        //à l'endroit où il a fait cela
        //si le user ne selectionne pas de couleur, alors la couleur de la brush sera d'office noire
        
        if(pointer.y > 108 && pointer.y < 610
          ){
            //--black brush--
            if (pointer.isDown && blackColor === true)
            {
                //permet de dessiner
                game.sound.mute = true;
                if(currentlyColoring === true){
                    brushStroke = this.add.image(pointer.x, pointer.y, 'black').setInteractive();
                }
                //permet d'éffacer
                if(typeof brushStroke !== 'undefined'){
                     brushStroke.on('pointermove', function(pointer){
                     if(erasingColors === true){
                        this.destroy();
                         currentlyColoring = false;
                     }});
                }
                if (pointer.x >= 290 && pointer.x <= 300  && pointer.y >= 185 && pointer.y <=192){
                    console.log("yeayjfhdfg");
                }
               
            }

            //--red brush--
            if(pointer.isDown && redColor === true){
                if(currentlyColoring === true){
                    brushStroke = this.add.image(pointer.x, pointer.y, 'red').setInteractive();
                }
                if(typeof brushStroke !== 'undefined'){
                    brushStroke.on('pointermove', function(pointer){
                         if(erasingColors === true){
                            this.destroy();
                             currentlyColoring = false;
                         }});
                }
            }
            
            //--yellow brush--
            if(pointer.isDown && yellowColor === true){
                //permet de dessiner
                if(currentlyColoring === true){
                    brushStroke = this.add.image(pointer.x, pointer.y, 'yellow').setInteractive();
                }
                //permet d'effacer
                if(typeof brushStroke !== 'undefined'){
                    brushStroke.on('pointermove', function(pointer){
                     if(erasingColors === true){
                        this.destroy();
                         currentlyColoring = false;
                     }});
                }

            }
            
            //--green brush--
             if(pointer.isDown && greenColor === true){
                 if(currentlyColoring === true){
                    brushStroke = this.add.image(pointer.x, pointer.y, 'green').setInteractive();
                }
                 
                 if(typeof brushStroke !== 'undefined'){
                     brushStroke.on('pointermove', function(pointer){
                     if(erasingColors === true){
                        this.destroy();
                         currentlyColoring = false;
                     }});
                 }
            }

            //--purple brush--
            if(pointer.isDown && purpleColor === true){
                if(currentlyColoring === true){
                    brushStroke = this.add.image(pointer.x, pointer.y, 'purple').setInteractive();
                }
                if(typeof brushStroke !== 'undefined'){
                   brushStroke.on('pointermove', function(pointer){
                     if(erasingColors === true){
                        this.destroy();
                         currentlyColoring = false;
                     }}); 
                }
                
            }

            //--light blue brush--
            if(pointer.isDown && blueLightColor === true){
                if(currentlyColoring === true){
                    brushStroke = this.add.image(pointer.x, pointer.y, 'blueLight').setInteractive();
                }
                if(typeof brushStroke !== 'undefined'){
                   brushStroke.on('pointermove', function(pointer){
                     if(erasingColors === true){
                        this.destroy();
                         currentlyColoring = false;
                     }}); 
                }
                
            }

            //--orange brush--
            if(pointer.isDown && orangeColor === true){
                if(currentlyColoring === true){
                    brushStroke = this.add.image(pointer.x, pointer.y, 'orange').setInteractive();
                }
                if(typeof brushStroke !== 'undefined'){
                    brushStroke.on('pointermove', function(pointer){
                     if(erasingColors === true){
                        this.destroy();
                         currentlyColoring = false;
                     }});
                }
            }

            //--blue brush--
            if(pointer.isDown && blueColor === true){
                if(currentlyColoring === true){
                    brushStroke = this.add.image(pointer.x, pointer.y, 'blue').setInteractive();
                }
                if(typeof brushStroke !== 'undefined'){
                    brushStroke.on('pointermove', function(pointer){
                     if(erasingColors === true){
                        this.destroy();
                         currentlyColoring = false;
                     }});
                }
                
            }

            //--kaki green brush--
            if(pointer.isDown && greenKakiColor === true){
                if(currentlyColoring === true){
                    brushStroke = this.add.image(pointer.x, pointer.y, 'greenKaki').setInteractive();
                }
                if(typeof brushStroke !== 'undefined'){
                    brushStroke.on('pointermove', function(pointer){
                     if(erasingColors === true){
                        this.destroy();
                         currentlyColoring = false;
                     }});
                }
            }

            //--brown brush--
            if(pointer.isDown && brownColor === true){
                if(currentlyColoring === true){
                    brushStroke = this.add.image(pointer.x, pointer.y, 'brown').setInteractive();
                }
                if(typeof brushStroke !== 'undefined'){
                    brushStroke.on('pointermove', function(pointer){
                     if(erasingColors === true){
                        this.destroy();
                         currentlyColoring = false;
                     }});
                }
                
            }

            //--pink brush--
            if(pointer.isDown && pinkColor === true){
                if(currentlyColoring === true){
                    brushStroke = this.add.image(pointer.x, pointer.y, 'pink').setInteractive();
                }
                if(typeof brushStroke !== 'undefined'){
                    brushStroke.on('pointermove', function(pointer){
                     if(erasingColors === true){
                        this.destroy();
                         currentlyColoring = false;
                     }});
                }
                
            }

            //--grey brush--
            if(pointer.isDown && greyColor === true){
                if(currentlyColoring === true){
                    brushStroke = this.add.image(pointer.x, pointer.y, 'grey').setInteractive();
                }
                if(typeof brushStroke !== 'undefined'){
                    brushStroke.on('pointermove', function(pointer){
                     if(erasingColors === true){
                        this.destroy();
                         currentlyColoring = false;
                     }});
                }
                
            }
            
        }
        
        

    }, this);
    
    
    

    //-----------------changement de couleur----------------------
    //quand l'user clique sur un des cercles pour choisir la couleur de sa brush
    this.input.on('pointerdown', function(pointer){
        console.log(pointer.x);
        console.log(pointer.y);
    
        
        if(pointer.x >= 134 && pointer.x <= 164  && pointer.y >= 21 && pointer.y <=49){
            //couleur choisie
            console.log('cliqué sur le yellow');
            yellowColor = true;
            
            //couleurs desactivées
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
            
            //pour arrêter d'effacer
            currentlyColoring = true;
            erasingColors = false;
            
            
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
            
            currentlyColoring = true;
            erasingColors = false;
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
            
            currentlyColoring = true;
            erasingColors = false;
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
            
            currentlyColoring = true;
            erasingColors = false;
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
            
            currentlyColoring = true;
            erasingColors = false;
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
            
            currentlyColoring = true;
            erasingColors = false;
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
            
            currentlyColoring = true;
            erasingColors = false;
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
            
            currentlyColoring = true;
            erasingColors = false;
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
            
            currentlyColoring = true;
            erasingColors = false;
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
            
            currentlyColoring = true;
            erasingColors = false;
        }
        
        if(pointer.x >= 254 && pointer.x <= 279  && pointer.y >= 69 && pointer.y <=97){
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
            
            currentlyColoring = true;
            erasingColors = false;
            
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
            
            currentlyColoring = true;
            erasingColors = false;
            
        }
        
        //interaction si clic sur le btn play du start
         if(pointer.x >= 44 && pointer.x <= 157  && pointer.y >= 383 && pointer.y <=497){
             console.log("cliqué sur start");
             bgImage.setVisible(false);
             startClicked = true;
            sessionStorage.setItem("start clicked", "yes");
         }
        
        //interaction si clic sur la gomme
        if(pointer.x >= 3 && pointer.x <= 92  && pointer.y >= 560 && pointer.y <=629){
            erasingColors = true;
            console.log("clicked on eraser");
            currentlyColoring = false;
         }
        
    //-------------interaction du bouton next-------------
//        next = this.add.text(150,550, 'NEXT');
        if(pointer.x >= 273 && pointer.x <= 356  && pointer.y >= 562 && pointer.y <=636){
            console.log("next cliqué");
            bg.setVisible(false);
            next1Clicked = true;
            location.reload();
            
        }
        
        
    });
}

