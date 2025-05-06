let video;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide(); 
  noStroke();
  createEasyCam()
}

function draw() {
  // image(video, 0, 0, 100, 100);
  background(0);
  video.loadPixels();
  console.log(video.pixels.length, width * height * 4);

  let boxSize = int(map(mouseX, 0, width, 12, 32));

  for (let y = 0; y < video.height; y += boxSize) {
    for (let x = 0; x < video.width; x += boxSize) {
      let index = (x + y * video.width) * 4;
      let r = video.pixels[index];
      let g = video.pixels[index + 1];
      let b = video.pixels[index + 2];
      let a = video.pixels[index + 3];
      let h = 1 - r / 255;

      push();
      fill(r, g, b, a);
      translate(x - width / 2, y - height / 2, boxSize / 2);
      rotateZ(h * TWO_PI);
      box(boxSize - 2, boxSize - 2, h * boxSize * 20);
      pop();
    }
  }
}
