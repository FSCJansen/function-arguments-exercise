//No arguments
/* const paintWalls = function() {
console.log( "The wall has been painted red");
}

paintWalls(); */

//Single argument
/* const paintWalls = function(color) {
    console.log( "The wall has been painted " + color);
    }
    
    paintWalls("green");
    paintWalls("blue");
    paintWalls();//When we call the function without an argument it prints 'The wall has been painted undefined' */

//Multiple arguments
const paintWalls = function(color, wall) {
    console.log( "The " + wall + " wall has been painted " + color);
    }
    
    paintWalls("north", "orange" );
    paintWalls("orange", "north" ); //the order of the arguments generates a strange sentence
 