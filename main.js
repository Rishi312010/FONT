function setup(){
    video = createCapture(VIDEO);
    video.size(550 , 500);

    canvas = createCanvas(550 , 400);
    canvas.position(550 , 100);

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on("pose" , gotPoses);
}

function draw(){
    background("#969A97");
    fill("#F90093");
    stroke("#F90093");
    textSize(difference);
    text("Rishik" , 100 , 300);
}

function modelLoaded() {
    console.log("PoseNet Is Initialized");
}
noseX = 0;
noseY = 0;
leftWristX = 0;
rightWristX = 0;
difference = 0;

function gotPoses(results){
if(results.length){
console.log(results);
noseX = results[0].pose.nose.x;
noseY = results[0].pose.nose.y;
    console.log("noseX = " + noseX +"noseY = " + noseY);

    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWristX);
}
}