var dots = [];

var value = 150;  //starting value of earthquake

//var img;

var stato1 = "cover"
var stato2 = "shake"
var stato3 = "release"
    

function setup(){
    createCanvas(windowWidth, windowHeight);
    
    //create objects
    for (var i = 0; i < value*8; i++){
        dots.push(new QuakeDots());
    }
    
   // image(img, 0, 0);
}

function draw(){
     background(204);
    // if ( stato1 == "cover"){
    // vedere imagine con text
//}
    // else if ( stato2 == "shake"){
    
    deviceShaken();
    //CREATE THE ELLIPSE AREA
    var x = width/2;
    var y = height/2;
    var r = value*2; 
    
    noFill();
    stroke(0);
    strokeWeight(1);
    ellipse (x, y, r, r);
    
    //draw dots and given methods (actions)
    noStroke();
    fill(0);
    for (var i = 0; i < value*8; i++){
        dots[i].move();
        dots[i]. display();
    }
//} else if(stato3 == "release"){
    
 // touches[random(width/1.9,width/2.1),random(height/1, height/1.2)];
    textSize(22);
    text('SEE RESULTS', width/2, height/1.1);
     
    //*****primo compito, come fare il click-->> arrivare a info---> it depends on the grade of the earthquake
    //If --> depends
    //***** compito due: recoplare la info, e anche fare le imagini, y fare la scala di grade di earthquake
    
   //MAGNITUDE TEXT 
    textFont('Inconsolata');
    textSize(12);
    textAlign(CENTER);
    textStyle(NORMAL);
    text("Magnitude", width - width/6, height/3.5);
    textSize(32);
    textAlign(CENTER);
    textStyle(BOLD);
    text(value, width - width/6, height/3);
    
}
   // il click to TRY AGAIN
    
}

/*
function deviceShaken(){
    QuakeDots();    
    value = (accelerationX * accelerationY * accelerationZ)/3;
    magnitude = map(value, 30, 1000, 0, 10);
    
    text(magnitude, width - width/6, height/2); //COME SOPRA IN DRAW()
}
*/

function QuakeDots(){
    
    var d = dist(width/2,height/2,width/2+value,height/2);
    
    this.xdot = random(width/2 - d, width/2 + d); //according to ellipse area
    this.ydot = random(height/2 - d, height/2 + d); //according to ellipse area
    this.diameter = 4;
    this.speed = 1.5; //magnitude


this.move = function(){
    this.xdot += random(-this.speed,this.speed);
    this.ydot += random(-this.speed,this.speed);
}

this.display = function(){
    ellipse(this.xdot, this.ydot, this.diameter, this.diameter);
};

///////////
    
/*    
function touchStarted(){
    img = loadImage('images/prova2.jpg');
}
 
*/
    
}
