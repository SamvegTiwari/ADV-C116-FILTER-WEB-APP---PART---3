Nosex=0;
Nosey=0;
function preload(){
    Weboimage=loadImage("m.png")
}

function setup(){
canvas= createCanvas(300, 300);
canvas.center();
video=createCapture(VIDEO);
video.size(350,350)
video.hide();

posenet=ml5.poseNet(video, model_loaded);
posenet.on('pose', got_Poses);



}

function got_Poses(results){
    if(results.length>0){
        console.log(results);
        console.log("nosex="+results[0].pose.nose.x);
        console.log("nosey="+results[0].pose.nose.y);

        Nosex=results[0].pose.nose.x;
        Nosey=results[0].pose.nose.y;
}}


function model_loaded(){
console.log("I loaded the model");
}

function got_poses(result){
console.log(result);

}

function draw(){
image(video,0,0,300,300);
image(Weboimage, Nosex-35, Nosey-30, 30, 30);
}

function take_sanpshot(){
 save("Filtered.png" );
}