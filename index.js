var gamepattern = [];
var userClick = [];
var btncolors = ["red","blue","green","yellow"];
var isPress = false;
var lvl =0
function nextSeq(){
    userClick = [];
    lvl++;
    $("h1").text("Level "+lvl);
    var randnum = Math.floor(Math.random()*4);
    var rand = btncolors[randnum];
    gamepattern.push(rand);


    $("#"+rand).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(rand);
    
    

}

$(document).keypress(function(){
       if(!isPress){
        $("h1").text("Level "+lvl);
        nextSeq();
        isPress = true;
       }
});


$(".btn").click(function(event){
    var p = event.target.id;
    userClick.push(p);
    console.log(userClick);

    playSound(p);
    animatePress(p);
    checkAnswer(userClick.length-1);

});

function playSound(name){

    var au = new Audio("sounds/"+name+".mp3");
    au.play();

}

function animatePress(curcolor){
    
    $("#"+curcolor).addClass("pressed");

    setTimeout(function(){
        $("#"+curcolor).removeClass("pressed");
    },100);

}

function checkAnswer(curLvl){
    if(gamepattern[curLvl] == userClick[curLvl] ){
        console.log("success");
       if(gamepattern.length == userClick.length){
        setTimeout(function(){
            nextSeq();
        },1000);
       }
    }
    else{
        console.log("Faile");
        var ad = new Audio("sounds/wrong.mp3");
        ad.play();
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);

        $("h1").text("Game Over, Press Any Key to Restart");
        restartmeth();

    }
}

function restartmeth(){
    lvl =0;
    isPress = false;
    gamepattern = [];

}






