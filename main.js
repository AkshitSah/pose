function preload(){
img=loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png");
    }
    function setup(){
        canvas=createCanvas(300,300);
        canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();

posenet=ml5.poseNet(video,modelLoaded);
posenet.on('pose',gotPoses);
    }
    function modelLoaded(){
        console.log('PoseNet is Intialized');
    }
    function gotPoses(result)
    {
        if(result.length>0)
        {
            console.log(results);
            console.log("nose x="+results[0].pose.nose.x);
            console.log("nose y="+results[0].pose.nose.y);
        }
    }

    function draw(){
image(video,0,0,300,300)
    }
    function take_snapshot(){
        save('myFilterImage.png');
    }
    noseX=0;
    noseY=0;

   
    function gotPoses(results)
    {
        if(results.length>0)
        {
            console.log(results);
            noseX=results[0].pose.nose.x;
            noseY=results[0].pose.nose.y;
            console.log("nose x="+ noseX);
            console.log("nose y="+ noseY);
        }
    }
    function draw(){
        image(video,0,0,300,300);
        /*fill(255,0,0);
        stroke(255,0,0);
        circle(noseX,noseY,20);*/
image(img,noseX-10,noseY-10,25,25);

    }