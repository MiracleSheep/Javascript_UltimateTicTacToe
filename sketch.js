/**********************************************************************************************
*                                                                                             *
* Author: John Khalife                                                                        *
* Date Created: 17/08/2022                                                                    *
* Description: This is a javascript version of the bigtictactoe game that I made in C++.      *
* It will hopefully be better coded than the last one, and I will first create the game       *
* then convert it into a multiplayer game hosted on my web server.                            *
*                                                                                             *
**********************************************************************************************/


// This file is meant to be the home of the class for the larger tic tac that holds all the other small tic tacs.
// this file is meant to hold the class for the small tic tac.

//These are the game constants. Modifying them changes the game itself.
//This variable changes the number of spots in the big tic tac
const GRID_LENGTH = 3;
//this variable changes the number of spots in the small tic tac
const SMALL_GRID_LENGTH = 3;
//This variable changes the number of players in a game.
const PLAYER_NUMBER = 2;
//this variable determines the size of the x and o based on the size of the gap in the small tic tac it is meant to fill
const SMALL_BOARD_PERCENT = 75;
//this variable determines the size of the small tictac bsed on the size of the gap in the bigtictac it is supposed to fill
const SMALLEST_BOARD_PERCENT = 75;
//this variable determines the suze of the big tic tac based on the size of the canvas
const BOARD_PERCENT = 75;
//this is input delay, measured in frames
const INPUT_DELAY = 10;
//Amount of time that the flashing sqaure will be on the screen small tictac
const HOVER_TIME_SMALL = 45;
//amount of time that the flashing will be on  the screen big tic tac
const HOVER_TIME = 45;
//constance used on the creation oc the big tic tac
//exactly what it says
const LINEWIDTH_TO_BOARDWIDTH_RATIO = 0.01;
const SMALL_LINEWIDTH_TO_BOARDWIDTH_RATIO = 0.01;
//percent of the length or width of the convas that the board will take up
//This is the percentage that the button's size will grow when it is selected
const GROWTH_PERCENT = 25;
const CONFIRMED_GROWTH_PERCENT = 100;
//This is the speed at which the button will perform the selected animation, measured in frames
const SELECTED_ANIMATION_TIME = 5;
//this is the speed at which the button will perform the unselected animation, measured in frames as well
const UNSELECTED_ANIMATION_TIME = 5;
//animation time for the conirmed animation
const CONFIRMED_ANIMATION_TIME = 60;
//This is the default shade of gray of the button fill (0-255)
const DEFAULT_BUTTON_SHADE = 0;
//this is the desired shade of gray of the button when it is seleceted
const SELECTED_BUTTON_SHADE = 255;
//This controls the text size
const TEXT_SIZE_PERCENTAGE = 50;
//the weight of the stroke around the btton during the confirmed animation
const STROKEWEIGHT = 5;


//it's messy, but I have to declare some undefined variables here to define in the setup function.
//I need them to be global variables so I can call them in the other script files
// they are being defined in the setup function because I need access to the variables width and length.

//variable that will hold the gui
var graphicalUserInterface;

//variable that will hold a game
var tictactoe;

//variables for the font
let fontSquareo, fontmono, fontminecraft, fontAldoApache, fontPointless, fontPixeled, fontRobot, fontommy;

//variables for images
let whiteTicTac;


//The setup function is run once at the first execution of the script.
function setup() {
    //creating the canvas at the size of the window, setting the canvas to a variable.

    if (windowHeight >= windowWidth) {
        var cnv = createCanvas(windowWidth, windowWidth);
    } else {
        var cnv = createCanvas(windowHeight, windowHeight);
    }
    
    //making sure that the canvas does not accidentally make a scroll bar appear on different browsers.
    cnv.style("display", "block");

    //framerate
    frameRate(60);

    //This is where the graphical user interface is declared. It is responsible for switching screens and user interctions.
    graphicalUserInterface = new gui();

    //variable that holds a game
    tictactoe = new game();

}

//This method is run once before the setup function and is used to load images, fonts, and other assets
function preload() {
    fontSquareo = loadFont('assets/Squareo.ttf');
    fontAldoApache = loadFont('assets/AldotheApache.ttf');
    fontPointless = loadFont('assets/Pointless.ttf');
    fontPixeled = loadFont('assets/Pixeled.ttf');
    fontRobot = loadFont('assets/Robot Crush.ttf');
    fontommy = loadFont('assets/tommy.otf')
    fontmono = loadFont('assets/mono.otf')
    fontminecraft = loadFont('assets/minecraft.ttf')
    whiteTicTac = loadImage('assets/whitetictac.png')
}
  
//This method is called whenever the window is resized, and it's job is to resize the canvas back to the size of the window.
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}







//This is the draw function, which is called over and over again. It is the main event loop.
function draw() {
        graphicalUserInterface.drawScreen();
}

//this functio will be used to get an integer within a certain range
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//this function is meant to return the smallest window size.
function getSmallestWindowSize() {
    if (windowWidth <= windowHeight) {
        return windowWidth
    } else {
        return windowHeight
    }
}