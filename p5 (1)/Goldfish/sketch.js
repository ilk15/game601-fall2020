let x = 500;
let y = 500;
let r1 = 53; //65, 45
let r2 = 38; //55, 38
let score = 0;
let velX;
let velY;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(60,100,200);
	x = random(0,windowWidth);
	y = random(0, windowHeight);
	r1 = random(45,65);
	r2 = random(55,38);
	velX = random(-8,8);
	velY = random(-8,8);
	textAlign(CENTER, CENTER);
	textSize(32);
}

function draw() {
	background(60,100,200);

	text('Score:', windowWidth/2, 50);
		text(score, windowWidth/2, 85);

	//fish
	noStroke();
	fill(255,140,30);
	ellipse(x, y, 100, 95);
	triangle(x-90, y-60, x-90, y+60, x-50, y);
	ellipse(x+55, y-45, 50, 50);
	triangle(x-48, y-18, x-25, y-80, x+12, y-48);
	ellipse(x+50, y-5, 35, 35);
	fill(255,255,255);
	ellipse(x+r1, y-r2, 30, 30);
	fill(0);
	ellipse(x+r1, y-r2, 20, 20);

	x = x + velX;
	y = y + velY;

	if (x > width || x < 0) {
		velX = velX * -1;

	}
	if (y > height || y < 0) {
		velY = velY * -1;
	}

	if (mouseIsPressed) {
		if (dist(x,y,mouseX,mouseY) < 51) {
			score++;
			x = random(0,windowWidth);
			y = random(0, windowHeight);
			r1 = random(45,65);
			r2 = random(55,38);
			velX = random(-10,10);
			velY = random(-10,10);
		}
	}

}
