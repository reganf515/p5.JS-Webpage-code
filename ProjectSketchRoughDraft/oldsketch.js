var button;

function setup() {
  createCanvas(900, 900);
  background(69,0,143);
  blanket();
  //background(0);
  // button = createButton('AEI Explorable Page');
  // button.position(19, 19);
  // button.mousePressed(writeText);
  // button.style("background-color", color(13,255,159));
  // button.size (80,80);
  // s = "The quick brown fox jumped over the lazy dog.";
  // fill(200);
  // text(s, 125, 288, 170, 45); // Text wraps within text box

  button = createButton('Artificial Emotional Intelligence Introduction');
 button.position(40, 100);
 button.mousePressed(writeText);

 button2 = createButton('AEI Interaction');
button2.position(300, 100);
//button.mousePressed(writeText);

button3 = createButton('The Future of AEI');
button3.position(410, 100);
//button.mousePressed(writeText);


}


function changeBG() {
  var val = random(255);
  background(val);
}

function writeText() {
  ellipse(5,10,23,20);
//code from Thomas
var myDiv = createDiv("What is artificial emotional intelligence? Artificial emotional intelligence is a combination of emotional and artificial intelligence. Emotional intelligence is the capacity to recognize the emotions of oneself and others, the ability to regulate and distinguish various emotions, and a guide to our thought processes and behavior. By 2020 AEI is expected to be a technological reality. In the next five years, artificial emotional intelligence is projected to grow into a multibillion-dollar industry, completely transforming industries, market research, innovation, R&D, and just so much more. In a bid to harness the human-like aspect of AI, Amazon, Microsoft, and Google are already in the process of hiring comedians and scriptwriters to build personality into their technologies.")
myDiv.style("position", 0, 210,);
myDiv.style("color", "#F8F8FF");
myDiv.style("font-size", "12px");
  // var txt = text("What is artificial emotional intelligence? Artificial emotional intelligence is a combination of emotional and artificial intelligence. Emotional intelligence is the capacity to recognize the emotions of oneself and others, the ability to regulate and distinguish various emotions, and a guide to our thought processes and behavior. By 2020 AEI is expected to be a technological reality. In the next five years, artificial emotional intelligence is projected to grow into a multibillion-dollar industry, completely transforming industries, market research, innovation, R&D, and just so much more. In a bid to harness the human-like aspect of AI, Amazon, Microsoft, and Google are already in the process of hiring comedians and scriptwriters to build personality into their technologies.", 100, 190, 200, 400);
  // txt.color = 255


//
//
//   s = "What is artificial emotional intelligence? Artificial emotional intelligence is a combination of emotional and artificial intelligence. Emotional intelligence is the capacity to recognize the emotions of oneself and others, the ability to regulate and distinguish various emotions, and a guide to our thought processes and behavior. By 2020 AEI is expected to be a technological reality. In the next five years, artificial emotional intelligence is projected to grow into a multibillion-dollar industry, completely transforming industries, market research, innovation, R&D, and just so much more. In a bid to harness the human-like aspect of AI, Amazon, Microsoft, and Google are already in the process of hiring comedians and scriptwriters to build personality into their technologies.";
//   var val = random(255);
//   fill(val);
//
// //fill();
//   text(s, 100, 100, 100, 150); // Text wraps within text box
//   textFont(Arial,12);
//
//
//
}

//from Sam Fine
function blanket() {
     createCanvas(windowWidth, windowHeight+200);
     frameRate(15);
     background(255);
     noStroke();

     // This is the gold rectange containing the header and buttons
     fill(255,215,0);
     rect(0,0,windowWidth,175);

     //title
     textSize(50);
     fill(255,255,255);
     text("Intro to Artificial Emotional Intelligence", 10,45);

     //subtitle
     fill(125,255);
     textSize(12);
     text("An Interactive AI", 10,70);

     //blue page
     fill(0);
     rect(0,200,windowWidth,windowHeight);

     textSize(50);
     text("Is AEI the Future of Artificial Intelligence", 500,500);

   }


















































// //stuff from before
//
//   // button = createButton('press me');
//   // button.position(19, 19);
//   // button.mousePressed(changeBG);
//
//
//
//   //function setup() {
//     // slider = createSlider(0, 255, 100);
//     // slider.position(10, 10);
//     // slider.style('width', '80px');
//
//     // sliderA = createSlider(0,255,100);
//     // slider.position(10,10);
//     // slider.style('width','80px');
//
//
//
// function draw() {
//   var val = slider.value();
//   background(val);
//   // var fillval = sliderA.value();
//   introtext();
// }
//
// function changeBG() {
//   var val = random(255);
//   background(val);
//
//
// }
//
// function introtext(){
//   s = "Artificial emotional intelligence is a combination of emotional and artificial intelligence. Emotional intelligence is the capacity to recognize the emotions of oneself and others, the ability to regulate and distinguish various emotions, and a guide to our thought processes and behavior.";
//   fill(25); // should be "fillval" if using slider
//   text(s, 50, 50, 200, 200); // Text wraps within text box
//
// }
