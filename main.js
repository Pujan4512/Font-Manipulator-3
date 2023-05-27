rightWristX = 0;
leftWristX = 0;
difference = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(500,500);

    canvas = createCanvas(500,400);
    canvas.position(560,155);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet is Initialized');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);

        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("Nose X = " + noseX + ", Nose Y = " + noseY);

        rightWristX = results[0].pose.rightWrist.x;
        leftWristX = results[0].pose.leftWrist.x;
        difference = Math.floor(leftWristX - rightWristX);
        console.log("Left Wrist X = " + leftWristX + ", Right Wrist X = " + rightWristX + ", Difference = " + difference);
    }
}

function draw(results){
    background("#969A97");

    document.getElementById("text_size").innerHTML = "Font Size of the Text will be = " + difference + "px";
    fill("00ff0a");
    textSize(difference);
    text('Pujan', 50, 400);
}