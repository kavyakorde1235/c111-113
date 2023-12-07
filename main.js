noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristX=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
     poseNet.on('pose', gotPoses);

}
function modelLoaded(){
    console.log ('posenet is intialised')
}
function gotPoses(results){
 if(results.length>0){
    console.log (results);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    console.log("noseX = " + noseX +" noseY = " + noseY);

    rightWristX=results[0].pose.rightWrist.x;
    leftWristX=results[0].pose.leftWrist.x;
    difference = floor(leftWristX - rightWristX);
     console.log("leftWristX = " + leftWristX + " rightWristX = "+ rightWristX + " difference = " + difference);

 }
}

function draw(){
    background('#5A5A5A');
    document.getElementById("square_sides").innerHTML="Width And Height of a Square will be = " + difference +"px";

    fill('#6699CC');
    stroke('#6699CC');
    square(noseX,noseY,difference);

}