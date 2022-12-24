// Song Variables ------
song1 = '';
song2 = '';
// Song Variables ends ------

// X , Y of wrists --------
leftWristX = '';
leftWristY = '';
RightWristX = '';
RightWristY = '';
// X , Y of wrists ends ------- 

// X , Y for score of wrists --------
scoreLeftWrist = 0;
scoreRightWrist = 0;
// X , Y for score of wrists ends --------

// p5.js functions -----

function setup(){
    canvas = createCanvas(500, 350);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotposes);
}

function preload(){
    song2 = loadSound("music2.mp3");
    song1 = loadSound("music.mp3");
}

function draw(){
    image(video, 0, 0, 500, 350)
}

// p5.js functions end-----

function gotposes(results){
    if(results.length > 0) {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        rightWristX = results[0].pose.rightWrist.x;
        rightWristX = results[0].pose.rightWrist.y;

        scoreLeftWrist = results[0].pose.keypoints[9];
        scoreRightWrist = results[0].pose.keypoints[10];
    }

    if(scoreLeftWrist > 0.00000001){
        song2.play();
        console.log(scoreLeftWrist);
    }
    if(scoreRightWrist > 0.00000002){
        song1.play();
        console.log(scoreRightWrist);
    }

}

function modelLoaded(){
    console.log('Model has loaded');
}

// function play(){
//     aa = Math.round(Math.random() * 2);
//     difference = leftWristX - rightWristX;

//     if(aa = 1) {
//         song1.play();
//     }else {
//         song2.play();
//     }
// }