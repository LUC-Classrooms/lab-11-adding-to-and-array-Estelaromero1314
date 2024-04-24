
/*
COMP 125 Lab 11 - Adding to an Array with mouse clicks
Step 1 - add a line of code to function mousePressed() that will add a new object to the array when the mouse is pressed. The first part (creating a new object where the mouse is pressed) is done for you. Just add the line that appends it to the array.
Step 2 - add comments explaining each line of code in this sketch.
*/
// declare array dots with one element
var dots = new Array(1);

// set up function runs 
function setup() {
  createCanvas(500, 300); 
  dots[0] = new Dot(width/2, height/2); //first dot at center of the canvas
}
// loops unless stopped
function draw() {
  background(200); // background set to grey
  
  // loops through dots in the array
  for(let i = 0; i < dots.length; i++){
    dots[i].move(); // calls the move of each dot
    dots[i].display(); // calls the move of each dot
  }

  // display lenghth of dots
  textSize(24); // text set to 24
  fill(100, 0, 200); // set text color purple
  text("'dots' array length: " + dots.length, 100, 100); // display text at (100,100)

}
// function used when mouse is pressed
function mousePressed(){
  let obj = new Dot(mouseX, mouseY); // create new dot when mouse is pressed in each location
  dots.push(obj); // adds new dot
  /* add a line of code that adds "obj" to the "dots" array. Use the .push() method of the dots array object to append the new "obj" to the end of an existing array. Check the Array.push() documentation first to make sure you are using it correctly.
  */

}

// define dot positions x and y
function Dot(X, Y){
  
  this.x = X; // x coordinate
  this.y = Y; // y coordinate
  this.w = random (20, 50); // width of dot between 20 and 50
  this.sx = random(-5, 5); // horizontal speed of dot between -5 and 5
  this.sy = random(-5, 5); // vertical speed of dot between -5 and 5
  this.r = random(0, 255);
  this.g = random(0, 255);
  this.b = random(0, 255);
  
  this.display = function(){
    fill(this.r, this.g, this.b); // set fill color
    ellipse(this.x, this.y, this.w, this.w); // draw ellipse at x,y 
  }
  // update position of the dot
  this.move = function(){ //update x adds horizontal speed
    this.x += this.sx; // update y adds vertical speed
    this.y += this.sy;
    
    if (this.x < 0 || this.x > width){
        this.sx *= -1;
    }
    if (this.y < 0 || this.y > height){
        this.sy *= -1;
    }
  }
    
}
