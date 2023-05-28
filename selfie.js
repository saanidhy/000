img_id=0;
var SpeechRecognition=window.webkitSpeechRecognition;

var recognition=new SpeechRecognition();
function save(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}

recognition.onresult=function(event){
    console.log(event);

    var Content=event.results[0][0].transcript;
    console.log(Content);

    document.getElementById("textbox").innerHTML=Content;
    if (Content=="selfie"){
        console.log("taking your selfie");
        speak();
    }
}


function speak(){
    var synth=window.speechSynthesis;
    speak_data="taking your selfie in 5 seconds.";
    speak_data1="taking your selfie in 10 seconds.";
    speak_data2="taking your selfie in 15 seconds.";

    var utterThis=new SpeechSynthesisUtterance(speak_data);
    utterThis1=new SpeechSynthesisUtterance(speak_data1);
    utterThis2=new SpeechSynthesisUtterance(speak_data2);
    synth.speak(utterThis);
    Webcam.attach(camera);

    setTimeout(function(){
        img_id=1;
        take_snapshot();
        
    }, 5000);
    synth.speak(utterThis1);
    setTimeout(function(){
        img_id=2;
        take_snapshot();
        
    }, 10000);
    synth.speak(utterThis2);
    setTimeout(function(){
        img_id=3;
        take_snapshot();
        
    }, 15000);
}

Webcam.set({
    width:600,
    height:500,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");

function take_snapshot(){
    Webcam.snap(function(data_uri){
        if(img_id==1){
            document.getElementById("result1").innerHTML='<img id="selfie_image" src="'+data_uri+'">';
        }
        if(img_id==2){
            document.getElementById("result2").innerHTML='<img id="selfie_image" src="'+data_uri+'">';
            }
        if(img_id==3){
            document.getElementById("result3").innerHTML='<img id="selfie_image" src="'+data_uri+'">';
               }

    });
}


