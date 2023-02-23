document.addEventListener("DOMContentLoaded",function(event){
    var hit_wall = false;
    var score = 0;
    var refresh = false; 


    var click_start = document.getElementById("start");
    click_start.addEventListener("click", clickStart);
    click_start.addEventListener("mouseover",hoverStart)
    var hit_boundary = document.getElementsByClassName("boundary");
    for (var i = 0; i < hit_boundary.length-1; i++){
        hit_boundary[i].addEventListener("mouseover",hitBoundary);
        }
    var hit_end = document.getElementById("end");
    hit_end.addEventListener("mouseover", displayResult);



function hitBoundary() {
    var status_text = document.getElementById("status");
    status_text.innerHTML= "You Lost (if hit was after a win or before hovering over S no points are deducted)";
    hit_wall = true;
    var all_boundaries = document.getElementsByClassName("boundary");
    for (var i = 0; i < all_boundaries.length-1; i++) {
        all_boundaries[i].classList.add("youlose");
    }
}
function hoverStart(){
    if(hit_wall && refresh){
        score -=10;
    }
    refresh = true;
    hit_wall = false;
    var status_text = document.getElementById("status");
    status_text.innerHTML= "Your Score is "+score;
    var all_boundaries = document.getElementsByClassName("boundary");
    for (var i = 0; i < all_boundaries.length-1; i++) {
        all_boundaries[i].classList.remove("youlose");
    }
}

function clickStart() {
    refresh = true;
    hit_wall = false;
    score = 0;
    var status_text = document.getElementById("status");
    status_text.innerHTML= "Begin by moving your mouse over the 'S'.";
    var all_boundaries = document.getElementsByClassName("boundary");
    for (var i = 0; i < all_boundaries.length-1; i++) {
        all_boundaries[i].classList.remove("youlose");
    }
}

function displayResult() {
    var status_text = document.getElementById("status");
    if(refresh){
    if(hit_wall) {
        score -=10;
        status_text.innerHTML= "You Lost - Your Total Score is "+ score;
    } else {
        score += 5;
        status_text.innerHTML= "You Won - Your Total Score is " + score;
    }
}
    refresh = false;
}
})
