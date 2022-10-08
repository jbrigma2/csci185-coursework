function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // Once you've created your drawCreature function, 
    // invoke drawCreature 5 times with the following arguments
    // (feel free to change the sizes, positions, and colors):
    
    // drawCreature(92, 115, 85, '#5e6976', '#1b324d');
    // drawCreature(487, 110, 101, '#bfdc65', '#abb880');
    // drawCreature(454, 423, 141, '#aebb83', '#227876');
    // drawCreature(333, 227, 99, '#94ba77', '#3f5364');
    // drawCreature(117, 314, 91, '#648d8e', '#afc272');

    drawCircle(550,100, 50, 'red');
    drawCircle(650,100,50, 'red');
    drawCircle(550,100,10,'white');
    drawCircle(650,100,10,'white');


    stroke('red');
    strokeWeight(5);
    line(543, 100, 0, 100);

    drawGrid(canvasWidth, canvasHeight);
}



// define your drawCreature function here:

function drawCircle(centerX, centerY, size, fillColor) {
    fill(fillColor);
    circle(centerX, centerY, size);
}