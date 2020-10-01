function setup() {
  createCanvas(400, 400);
}

function draw() {
  
  background(0, 255, 255);
  
  let mouth =color(255,192,203)
let body =color(0,0,0)
stroke(body)
  
  line(200, 75, 200, 200)// Body
  ellipse(200, 46, 55, 55)// Head
  line(150, 150, 200, 100)// Left Arm
  line(260, 150, 200, 100)// Right Arm
  line(200, 200, 170, 300)// Left Leg
  line(200, 200, 230, 300)// Right Leg
  ellipse(215, 40, 5, 5)// Right Eye
  ellipse(190, 40, 5, 5)// Left eye
  stroke(mouth)
 arc(200, 51, 10, 10, 0, PI + QUARTER_PI, CHORD);// Mouth
  stroke (mouth)
}