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

//façon pour enlever les warn inutiles dans la console
//qui faisaient lagger la page
console.warn = () => {};

function preload ()
{
    //image de cover (educolor) avec le bouton start    
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
    
    
    //---backgrounds---
    this.load.image('bg', '../assets/images/newcover-01.jpg');
    this.load.image('bg2', '../assets/images/bateau.jpg');
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
    this.load.image('colorPalette', '../assets/images/palettes/couleurs-version3.png');
    
    //-----eraser---------------
    this.load.image('eraser', '../assets/images/eraser (2).png');
    
//     this.objects = {};
    
}

function create ()
{
 
//    this.objects.camera.setBackgroundColor('rgba(255, 0, 0, 0.5)');
    //---tests for responsive---
    let screenWidth = screen.width;
    let screenHeight = screen.height;
    console.log( 'the screen width is ' + screenWidth);
    console.log( 'the screen height is ' + screenHeight);
    
    //works
//     var x = document.getElementsByTagName("CANVAS");
//    console.log(x);
//    x[0].style.display = "block";
//    if (screenWidth <= 400){
//         x[0].style.width = "1000"; 
//    }
    
    
    
    //didnt work
//    if (screenWidth < 500 && screenWidth >400){
//        x[0].style.height = "1900"; 
//    }
    console.log(screenWidth === 360);
  
    
    
    //---start menu of game (cover)---
    var value = Phaser.Math.Between(1, 3);
    bgImage = this.add.image(160, 320, 'testEdu');
    bgImage.setDepth(2);
    bgImage.setScale(1);
    
    bg2 = this.add.image(180, 320, 'bg2');    
//    textBtn.setDepth(0);
    bg2.setVisible(false);
//    bg2.setDepth(1);
    
    bg3 = this.add.image(100, 100, 'bg3');
//    bg3.setDepth(1);
    bg3.setVisible(false);
    
    bg4 = this.add.image(100, 100, 'bg4');
//    bg3.setDepth(1);
    bg4.setVisible(false);
    
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
    eraser = this.add.image(90, 580, 'eraser');
    eraser.setDepth(1);
    eraser.setScale(0.1);
    
    
//--------background images------------
//image de background 1 = dessin 1
// localStorage.setItem("dessin fini", "0"); 
    
//si le user clique sur next alors ça va chercher la valeur de 'dessin fini' dans le localstorage
//et en dépendant de cette valeur, ça affiche la bonne image
    
    gameStarted = sessionStorage.getItem("start clicked");
    console.log("is start clicked? " + gameStarted);
    if (gameStarted === "yes"){
        bgImage.setVisible(false);
    }
//    if(dessinFini === "0"){
//        bg = this.add.image(180, 300, 'bg');
//        bg.setScale(0.5);
//    }
    bg = this.add.image(180, 320, 'bg');
    bg.setVisible(false);
    
//    if(screenHeight > 640){
//        bg.setScale(1.2);
//    }
//    if(screenWidth <= 300){
//        bg.setScale(0.8);
//    }
//    bg.setScale(0.7);
    
//   
//    this.add.image(100,100, 'test');
    
    if(value === 1){
                bg.setVisible(true);
            }
            if (value === 2){
                bg2.setVisible(true);
//                bg2.setVisible(false);
//                brushStroke.setDepth(-2);
            }
            if (value === 3){
                bg3.setVisible(true);
            }
              if (value === 4){
                bg5.setVisible(true);
            }
              if (value === 5){
                bg6.setVisible(true);   
            }
             if (value === 6){
                bg7.setVisible(true);
            }
             if (value === 7){
                bg8.setVisible(true);
            }
             if (value === 8){
                bg9.setVisible(true);
            }
             if (value === 9){
                bg10.setVisible(true);
            }
    console.log(value +"is the value");
    
    //----------------interaction des brush = dessin---------------------------
    
    this.input.on('pointermove', function (pointer) {
        
        //si user déplace sa souris/doigt sur l'image 
        //cela fait apparaître une boule colorée (de la couleur choisie)
        //à l'endroit où il a fait cela
        //si le user ne selectionne pas de couleur, alors la couleur de la brush sera d'office noire
        
        if(pointer.y > 108 && pointer.y < 610 && pointer.x > 38
          ){
            
            //--black brush--
            if (pointer.isDown && blackColor === true)
            {
                if(currentlyColoring === true){
                    brushStroke = this.add.image(pointer.x, pointer.y, 'black').setInteractive();
                }
                brushStroke.on('pointermove', function(pointer){
                     if(erasingColors === true){
                        this.destroy();
                         console.log(pointer.x);
                         currentlyColoring = false;
                     }});
            }

            //--red brush--
            if(pointer.isDown && redColor === true){
                if(currentlyColoring === true){
                    brushStroke = this.add.image(pointer.x, pointer.y, 'red').setInteractive();
                }
                brushStroke.on('pointermove', function(pointer){
                     if(erasingColors === true){
                        this.destroy();
                         console.log(pointer.x);
                         currentlyColoring = false;
                     }});
            }
            
            //--yellow brush--
            if(pointer.isDown && yellowColor === true){
                //permet de dessiner
                if(currentlyColoring === true){
                    brushStroke = this.add.image(pointer.x, pointer.y, 'yellow').setInteractive();
                }
                //permet d'effacer
                brushStroke.on('pointermove', function(pointer){
                     if(erasingColors === true){
                        this.destroy();
                         console.log(pointer.x);
                         currentlyColoring = false;
                     }});
            }
            
            //--green brush--
             if(pointer.isDown && greenColor === true){
                 if(currentlyColoring === true){
                    brushStroke = this.add.image(pointer.x, pointer.y, 'green').setInteractive();
                }
                brushStroke.on('pointermove', function(pointer){
                     if(erasingColors === true){
                        this.destroy();
                         console.log(pointer.x);
                         currentlyColoring = false;
                     }});
            }

            //--purple brush--
            if(pointer.isDown && purpleColor === true){
                if(currentlyColoring === true){
                    brushStroke = this.add.image(pointer.x, pointer.y, 'purple').setInteractive();
                }
                brushStroke.on('pointermove', function(pointer){
                     if(erasingColors === true){
                        this.destroy();
                         console.log(pointer.x);
                         currentlyColoring = false;
                     }});
            }

            //--light blue brush--
            if(pointer.isDown && blueLightColor === true){
                if(currentlyColoring === true){
                    brushStroke = this.add.image(pointer.x, pointer.y, 'blueLight').setInteractive();
                }
                brushStroke.on('pointermove', function(pointer){
                     if(erasingColors === true){
                        this.destroy();
                         console.log(pointer.x);
                         currentlyColoring = false;
                     }});
            }

            //--orange brush--
            if(pointer.isDown && orangeColor === true){
                if(currentlyColoring === true){
                    brushStroke = this.add.image(pointer.x, pointer.y, 'orange').setInteractive();
                }
                brushStroke.on('pointermove', function(pointer){
                     if(erasingColors === true){
                        this.destroy();
                         console.log(pointer.x);
                         currentlyColoring = false;
                     }});
            }

            //--blue brush--
            if(pointer.isDown && blueColor === true){
                if(currentlyColoring === true){
                    brushStroke = this.add.image(pointer.x, pointer.y, 'blue').setInteractive();
                }
                brushStroke.on('pointermove', function(pointer){
                     if(erasingColors === true){
                        this.destroy();
                         console.log(pointer.x);
                         currentlyColoring = false;
                     }});
            }

            //--kaki green brush--
            if(pointer.isDown && greenKakiColor === true){
                if(currentlyColoring === true){
                    brushStroke = this.add.image(pointer.x, pointer.y, 'greenKaki').setInteractive();
                }
                brushStroke.on('pointermove', function(pointer){
                     if(erasingColors === true){
                        this.destroy();
                         console.log(pointer.x);
                         currentlyColoring = false;
                     }});
            }

            //--brown brush--
            if(pointer.isDown && brownColor === true){
                if(currentlyColoring === true){
                    brushStroke = this.add.image(pointer.x, pointer.y, 'brown').setInteractive();
                }
                brushStroke.on('pointermove', function(pointer){
                     if(erasingColors === true){
                        this.destroy();
                         console.log(pointer.x);
                         currentlyColoring = false;
                     }});
            }

            //--pink brush--
            if(pointer.isDown && pinkColor === true){
                if(currentlyColoring === true){
                    brushStroke = this.add.image(pointer.x, pointer.y, 'pink').setInteractive();
                }
                brushStroke.on('pointermove', function(pointer){
                     if(erasingColors === true){
                        this.destroy();
                         console.log(pointer.x);
                         currentlyColoring = false;
                     }});
            }

            //--grey brush--
            if(pointer.isDown && greyColor === true){
                if(currentlyColoring === true){
                    brushStroke = this.add.image(pointer.x, pointer.y, 'grey').setInteractive();
                }
                brushStroke.on('pointermove', function(pointer){
                     if(erasingColors === true){
                        this.destroy();
                         console.log(pointer.x);
                         currentlyColoring = false;
                     }});
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
            brushStroke.setVisible(false);
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
         if(pointer.x >= 2 && pointer.x <= 146  && pointer.y >= 430 && pointer.y <=580){
             bgImage.setVisible(false);
             startClicked = true;
            sessionStorage.setItem("start clicked", "yes");
         }
        
        //interaction si clic sur la gomme
        if(pointer.x >= 66 && pointer.x <= 112  && pointer.y >= 557 && pointer.y <=600){
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
            
//            imageIndex++;
//            
//            if(imageIndex === 1){
//                bg2.setVisible(true);
//            }
//            if (imageIndex === 2){
//                bg3.setVisible(true);
////                bg2.setVisible(false);
////                brushStroke.setDepth(-2);
//            }
//            if (imageIndex === 3){
//                bg4.setVisible(true);
//            }
//              if (imageIndex === 4){
//                bg5.setVisible(true);
//            }
//              if (imageIndex === 5){
//                bg6.setVisible(true);   
//            }
//             if (imageIndex === 6){
//                bg7.setVisible(true);
//            }
//             if (imageIndex === 7){
//                bg8.setVisible(true);
//            }
//             if (imageIndex === 8){
//                bg9.setVisible(true);
//            }
//             if (imageIndex === 9){
//                bg10.setVisible(true);
//            }
            
        }
        
        
    });
    
    //--------bouton pour mettre fullscreen------
//    var button = this.add.image(30, 160, 'fullscreen', 0).setOrigin(1, 0).setInteractive();
    //mettre ce bouton sur le start et mettre une icone belle
    //DOIT etre executé avec btnclick

//        button.on('pointerup', function () {
//
//            if (this.scale.isFullscreen)
//            {
//                button.setFrame(0);
//
//                this.scale.stopFullscreen();
//            }
//            else
//            {
//                button.setFrame(1);
//
//                this.scale.startFullscreen();
//            }
//
//        }, this);
    

}

