function setup() {
    createCanvas(1000, 600);
    background('blue')
   }
  
   function draw() { 
     
   stroke('blue');
   fill('white');
    
   // console.login(mouseIsPressed);
   
     if(mouseIsPressed)
   rect(mouseX, mouseY, 20 , 35);
    }   
  
    