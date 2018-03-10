//This code makes sure that the code does'nt run until the HTML on the page is loaded//
$(document).ready(function() {

//Variables created to track the number of wins, losses, total score
var wins=0;
var losses=0;
var totalscore=0;
var numberOptions = [1, 2, 3, 10];
var buttons={
    amethyst: numberOptions[Math.floor(Math.random() * numberOptions.length)],
    crystal: numberOptions[Math.floor(Math.random() * numberOptions.length)],
    black: numberOptions[Math.floor(Math.random() * numberOptions.length)],
    celestine: numberOptions[Math.floor(Math.random() * numberOptions.length)]
};
    var random = Math.floor(Math.random() * 19) + 31;
    //target number function used to randomly chose a number

    $(".target").on("click", "#random-button", function () {
        $("#random-number").text(random);
    })
    
//if (totalscore === random) {
//    alert("");
//}
//else (totalscore !== random) 
//    alert("Better luck next time ...LOSER");
});
    
    //function updates the score text it is nested insde of onclick functions to run when a gem is pressed
    function updateScore (){
        $("totalscore").text(totalscore);
        $(".target").text(target);
    }
    //function updates the current game state
    function gameStart() {
        $("body").on("click", "#button-1", function(){ 
            $("#button-1").text(amethyst);
        $(".button").on("click", "#button-2", function(){ 
            $("#button-2").text(crystal);
        $(".button").on("click", "#button-3", function(){ 
            $("#button-3").text(black);
        $(".button").on("click", "#button-4", function(){ 
            $("#button-4").text(celestine);
        })

        //this line determines whether a game is won or lost on click
        if (target !== totalscore) {
            losses++;
            $(".losses").text(losses);
            gameStart();
            updateScore();
            alert("Better Luck next time Loser");

        }
        //this line runs if your target score and the current score match
        if (target === totalScore) {
            wins++;
            $(".wins").text(wins);
            gameStart();
            updateScore();
            alert("YOU WON!!!!!!!!");
        }
    });