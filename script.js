 window.addEventListener("load", start);

let points = 0;
let life = 3;
let timeLeft = 120;

function start() {
    console.log("start");
    passingLeft();
    passingLeftM2();
    passingleftbomb();
    time();
}

/*monster1_passingeffect*/

function passingLeft() {
    console.log("passingLeft");
    document.querySelector("#monster1_container1").classList.add("passing_left");
    document.querySelector("#monster1_container1").addEventListener("click", mC11);
    document.querySelector("#monster1_container2").classList.add("passing_left");
    document.querySelector("#monster1_container2").classList.add("speed2");

    document.querySelector("#monster1_container2").addEventListener("click", mC12);

    document.querySelector("#monster1_container3").classList.add("passing_left");
    document.querySelector("#monster1_container3").classList.add("speed3");

    document.querySelector("#monster1_container3").addEventListener("click", mC13);






}

/*monster1_clicking_effect*/

function mC11() {
    console.log("mC11");

    document.querySelector("#monster1_container1").removeEventListener("click", mC11);

    document.querySelector("#monster1_container1").classList.add("pause");
    document.querySelector("#monster1_container1 .sprite").classList.add("disappear");

    document.querySelector("#monster1_container1").addEventListener("animationend", mC11Restart);

    /*points*/
    console.log("your have points");
    console.log(points);

    points++;
    console.log("your points has changed to");
    console.log(points);

    document.querySelector("#score_count").textContent = points;

}

function mC11Restart() {
    console.log(" mC11Restart");

    document.querySelector("#monster1_container1").removeEventListener("animationend", mC11Restart);


    document.querySelector("#monster1_container1").classList.remove("passing_left");
    document.querySelector("#monster1_container1").offsetHeight;

    document.querySelector("#monster1_container1").classList.add("passing_left");


    document.querySelector("#monster1_container1").classList.remove("pause");
    document.querySelector("#monster1_container1 .sprite").classList.remove("disappear");

    document.querySelector("#monster1_container1").addEventListener("click", mC11);



}

function mC12() {
    console.log("mC12");

    document.querySelector("#monster1_container2").removeEventListener("click", mC12);
    document.querySelector("#monster1_container2").classList.add("pause");
    document.querySelector("#monster1_container2 .sprite").classList.add("disappear");

    document.querySelector("#monster1_container2").addEventListener("animationend", mC12Restart);

    /*points*/
    console.log("your have points");
    console.log(points);

    points++;
    console.log("your points has changed to");
    console.log(points);

    document.querySelector("#score_count").textContent = points;
}

function mC12Restart() {
    console.log("mC12Restart");

    document.querySelector("#monster1_container2").removeEventListener("animationend", mC12Restart);
    document.querySelector("#monster1_container2").classList.remove("passing_left");
    document.querySelector("#monster1_container2").offsetHeight;

    document.querySelector("#monster1_container2").classList.add("passing_left");

    document.querySelector("#monster1_container2").classList.remove("pause");
    document.querySelector("#monster1_container2 .sprite").classList.remove("disappear");

    document.querySelector("#monster1_container2").addEventListener("click", mC12);
}

function mC13() {
    console.log("mC13");

    document.querySelector("#monster1_container3").removeEventListener("click", mC13);
    document.querySelector("#monster1_container3").classList.add("pause");
    document.querySelector("#monster1_container3 .sprite").classList.add("disappear");

    document.querySelector("#monster1_container3").addEventListener("animationend", mC13Restart);

    /*points*/
    console.log("your have points");
    console.log(points);

    points++;
    console.log("your points has changed to");
    console.log(points);

    document.querySelector("#score_count").textContent = points;

}

function mC13Restart() {
    console.log("mC13Restart");

    document.querySelector("#monster1_container3").removeEventListener("animationend", mC13Restart);

    document.querySelector("#monster1_container3").classList.remove("passing_left");
    document.querySelector("#monster1_container3").offsetHeight;

    document.querySelector("#monster1_container3").classList.add("passing_left");

    document.querySelector("#monster1_container3").classList.remove("pause");
    document.querySelector("#monster1_container3 .sprite").classList.remove("disappear");

    document.querySelector("#monster1_container3").addEventListener("click", mC13);
}



/*monster2_passingleft*/

function passingLeftM2() {
    console.log("passingLeftM2");
    document.querySelector("#monster2_container1").classList.add("passing_left");
    document.querySelector("#monster2_container1").classList.add("speed6");
    document.querySelector("#monster2_container1").addEventListener("click", mC21);
    document.querySelector("#monster2_container2").classList.add("passing_left");
    document.querySelector("#monster2_container2").classList.add("speed5");

    document.querySelector("#monster2_container2").addEventListener("click", mC22);
    document.querySelector("#monster2_container3").classList.add("passing_left");
    document.querySelector("#monster2_container3").classList.add("speed1");

    document.querySelector("#monster2_container3").addEventListener("click", mC23);

}

/*monster2_clicking_effect*/

function mC21() {
    console.log("mC21");

    document.querySelector("#monster2_container1").removeEventListener("click", mC21);
    document.querySelector("#monster2_container1").classList.add("pause");
    document.querySelector("#monster2_container1 .sprite").classList.add("disappear");

    document.querySelector("#monster2_container1").addEventListener("animationend", mC21Restart);

    /*points*/
    console.log("your have points");
    console.log(points);

    points++;
    console.log("your points has changed to");
    console.log(points);

    document.querySelector("#score_count").textContent = points;
}

function mC21Restart() {
    console.log("mC21Restart");

    document.querySelector("#monster2_container1").removeEventListener("animationend", mC21Restart);

    document.querySelector("#monster2_container1").classList.remove("passing_left");
    document.querySelector("#monster2_container1").offsetHeight;

    document.querySelector("#monster2_container1").classList.add("passing_left");


    document.querySelector("#monster2_container1").classList.remove("pause");
    document.querySelector("#monster2_container1 .sprite").classList.remove("disappear");

    document.querySelector("#monster2_container1").addEventListener("click", mC21);


}

function mC22() {
    console.log("mC22");

    document.querySelector("#monster2_container2").removeEventListener("click", mC22);
    document.querySelector("#monster2_container2").classList.add("pause");
    document.querySelector("#monster2_container2 .sprite").classList.add("disappear");

    document.querySelector("#monster2_container2").addEventListener("animationend", mC22Restart);

    /*points*/
    console.log("your have points");
    console.log(points);

    points++;
    console.log("your points has changed to");
    console.log(points);

    document.querySelector("#score_count").textContent = points;

}

function mC22Restart() {
    console.log("mC22Restart");

    document.querySelector("#monster2_container2").removeEventListener("animationend", mC22Restart);

    document.querySelector("#monster2_container2").classList.remove("passing_left");
    document.querySelector("#monster2_container2").offsetHeight;

    document.querySelector("#monster2_container2").classList.add("passing_left");

    document.querySelector("#monster2_container2").classList.remove("pause");
    document.querySelector("#monster2_container2 .sprite").classList.remove("disappear");

    document.querySelector("#monster2_container2").addEventListener("click", mC22);

}

function mC23() {
    console.log("mC23");


    document.querySelector("#monster2_container3").removeEventListener("click", mC23);
    document.querySelector("#monster2_container3").classList.add("pause");
    document.querySelector("#monster2_container3 .sprite").classList.add("disappear");

    document.querySelector("#monster2_container3").addEventListener("animationend", mC23Restart);

    /*points*/
    console.log("your have points");
    console.log(points);

    points++;
    console.log("your points has changed to");
    console.log(points);

    document.querySelector("#score_count").textContent = points;

}

function mC23Restart() {
    console.log("mC23Restart");

    document.querySelector("#monster2_container3").removeEventListener("animationend", mC23Restart);

    document.querySelector("#monster2_container3").classList.remove("passing_left");
    document.querySelector("#monster2_container3").offsetHeight;

    document.querySelector("#monster2_container3").classList.add("passing_left");


    document.querySelector("#monster2_container3").classList.remove("pause");
    document.querySelector("#monster2_container3 .sprite").classList.remove("disappear");

    document.querySelector("#monster2_container3").addEventListener("click", mC23)

}



/*bomb_passingleft*/

function passingleftbomb() {

    console.log("passingleftbomb");
    document.querySelector("#bomb_container1").classList.add("passing_left");

    document.querySelector("#bomb_container1").addEventListener("click", bombClick);

    document.querySelector("#bomb_container2").classList.add("passing_left");
    document.querySelector("#bomb_container2").classList.add("speed7");

     document.querySelector("#bomb_container2").addEventListener("click", bomb2Clicked);

     document.querySelector("#bomb_container3").classList.add("passing_left");
       document.querySelector("#bomb_container3").classList.add("speed8");

    document.querySelector("#bomb_container3").addEventListener("click", bomb3Clicked);


}

/*bomb_passingClicking effect*/
function bombClick() {
    console.log("bombClick");

    document.querySelector("#bomb_container1").removeEventListener("click", bombClick);



    document.querySelector("#bomb_container1").classList.add("pause");
    document.querySelector("#bomb_container1 .sprite").classList.add("explode");

    document.querySelector("#game").classList.remove("shake");

    document.querySelector("#bomb_container1 .sprite").addEventListener("animationend", explosion);

      /*loselife*/
    console.log("you have life");
    console.log(life);

    life--;

    document.querySelector("#heart .active_heart").classList = "broken_heart"  + life;

    console.log("you have " + life + " life left");



}

function restartBombClick() {
    console.log("restartBombClick");

    document.querySelector("#game").removeEventListener("animationend", restartBombClick);

     document.querySelector("#bomb_container1").classList.remove("passing_left");
    document.querySelector("#bomb_container1").offsetHeight;
    document.querySelector("#bomb_container1").classList.add("passing_left");

    document.querySelector("#bomb_container1").classList.remove("pause");
    document.querySelector("#bomb_container1 .sprite").classList.remove("explode");

    document.querySelector("#bomb_container1").addEventListener("click", bombClick);

    if (life == 0) {
        gameend();
    }
    else {
        document.querySelector("#bomb_container1").addEventListener("click", bombClick);

    }


}

function gameend() {
    console.log("gameend");
    document.querySelector("#gameover").textContent= "game over";

    document.querySelector("#gameover").style.opacity = 100;
}

function bomb2Clicked() {
    console.log("bomb2Clicked");

     document.querySelector("#bomb_container2").removeEventListener("click", bomb2Clicked);

     document.querySelector("#bomb_container2").classList.add("pause");
     document.querySelector("#bomb_container2 .sprite").classList.add("explode");

    document.querySelector("#game").classList.remove("shake");

    document.querySelector("#bomb_container2 .sprite").addEventListener("animationend", explosion);

      /*loselife*/
    console.log("you have life");
    console.log(life);

    life--;


    document.querySelector("#heart .active_heart").classList = "broken_heart"  + life;

    console.log("you have " + life + " life left");
}

function restartBomb2Clicked() {
    console.log("restartBomb2Clicked");

     document.querySelector("#game").removeEventListener("animationend", restartBomb2Clicked);

    document.querySelector("#bomb_container2").classList.remove("passing_left");
    document.querySelector("#bomb_container2").offsetHeight;
    document.querySelector("#bomb_container2").classList.add("passing_left");

    document.querySelector("#bomb_container2").classList.remove("pause");
     document.querySelector("#bomb_container2 .sprite").classList.remove("explode");

    document.querySelector("#bomb_container2").addEventListener("click", bomb2Clicked);

}

function bomb3Clicked() {
    console.log("bomb3Clicked");

     document.querySelector("#bomb_container3").removeEventListener("click", bomb3Clicked);
       document.querySelector("#bomb_container3").classList.add("pause");
       document.querySelector("#bomb_container3 .sprite").classList.add("explode");

      document.querySelector("#game").classList.remove("shake");

    document.querySelector("#bomb_container3 .sprite").addEventListener("animationend", explosion);

    /*loselife*/
    console.log("you have life");
    console.log(life);

    life--;


     document.querySelector("#heart .active_heart").classList = "broken_heart"  + life;




    console.log("you have " + life + " life left");
}

function restartBomb3Clicked() {
    console.log("restartBomb3Clicked");

     document.querySelector("#game").removeEventListener("animationend", restartBomb3Clicked);


     document.querySelector("#bomb_container3").classList.remove("passing_left");
    document.querySelector("#bomb_container3").offsetHeight;
    document.querySelector("#bomb_container3").classList.add("passing_left");

    document.querySelector("#bomb_container3").classList.remove("pause");
       document.querySelector("#bomb_container3 .sprite").classList.remove("explode");

     document.querySelector("#bomb_container3").addEventListener("click", bomb3Clicked);

}


/*shaking effect*/
function explosion() {
    console.log("explosion");

    document.querySelector("#bomb_container1 .sprite").removeEventListener("animationend", explosion);

    document.querySelector("#bomb_container2 .sprite").removeEventListener("animationend", explosion);

    document.querySelector("#bomb_container3 .sprite").removeEventListener("animationend", explosion);
    document.querySelector("#game").classList.add("shake");

    document.querySelector("#game").addEventListener("animationend", restartBombClick);

    document.querySelector("#game").addEventListener("animationend", restartBomb2Clicked);

    document.querySelector("#game").addEventListener("animationend", restartBomb3Clicked);



}



/* time */
function time() {
    console.log("time");

    document.querySelector("#time_board .sprite2").classList.add("timeend");
    /*time left*/

    timeLeft-- ;
    document.querySelector("#time_left").textContent = "time left " + timeLeft + " second";
}

