x = 0;
y = 0;

draw_apple = "";
screen_width = 0;
screen_height = 0;
speak_data = "";
to_number = "";

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start() {
    document.getElementById("status").innerHTML = "System is listening please speak";
    recognition.start();
}

recognition.onresult = function(event) {

    console.log(event);
    content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "The speech has been recognized: " + content;
    to_number = Number(content);
    if (Number.isInteger(to_number)) {
        document.getElementById("status").innerHTML = "Started drawing apple";
        draw_apple = "set";
    } else(Number.isInteger(to_number))
    document.getElementById("status").innerHTML = "The speech has not recognized a number";

}

function setup() {
    canvas = createCanvas(1535, 570)
    screen_width = window.innerWidth;
    screen_height = window.innerHeight;
    canvas.position(0, 150)
}

function draw() {
    if (draw_apple == "set") {
        document.getElementById("status").innerHTML = to_number + " Apples drawn";
        draw_apple = "";

        for (let i = 1; i < to_number; i++) {
            x = Math.floor(Math.Random() * 700);
            y = Math.floor(Math.Random() * 400);
            image(apple, x, y, 50, 50);
        }
    }
}

function speak() {
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";

}

function image() {

}