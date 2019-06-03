// lots of globals
var words = ["javascript", "python", "coding", "programming"];
var word = words[Math.floor(Math.random() * words.length)];
var answer = [];
var wrongGuess = [];
var count = 1;
var winning = 0;
var numGuesses = 11;
var remainingLetters = word.length;
var s;
var inputString = "";
var inputEl = document.querySelector('[name="input"]');
var pEl = document.getElementById("text");
var btnEl = document.querySelector("button");
var wrongEl = document.getElementById("wrong");
var winnerEl = document.getElementById("winner");
document.getElementsByClassName("btn btn-primary").disabled = false;

// creates "_ _ _ _" display for word that is randomly generated
function start() {
    for (var i = 0; i < word.length; i++) {
        answer[i] = "_";
    }

    s = answer.join(" ");
    document.getElementById("text").innerHTML = s;
}
start();

// on user submit
btnEl.addEventListener("click", function(e) {
    var textInput = inputEl.value;
    inputEl.value = "";

    //check if user guess is correct
    if (textInput.length > 0) {
    for (var i = 0; i < word.length; i++) {
        if (word[i] === textInput) {
            answer[i] = textInput;
            var correct = true;
            winning++;
            count++;
            console.log(winning);
        }
    }
    //count++;
    inputString = inputString + textInput;
    pEl.textContent = answer.join(" ");
    console.log("count" + count);

    // checks if user guess is incorrect, if true the incorrect letter is shown to the user.
    if(!correct){
		var wrong = document.getElementById("wrong");
        var letter = document.createTextNode(" " + textInput);
		wrong.appendChild(letter); 
        count++;
        // updates hangman image if user guess is incorrect
		var hangman = document.getElementById("hangman");
        hangman.src = "imgs/" + count + ".jpg";
    }

    var winner = false;
    // if user wins
    // turn into a function
    if (winning === word.length) {
        winner = true;
        winnerEl.textContent = "You Survived!";
        document.getElementsByClassName("btn btn-primary").disabled = true;
        setTimeout(function(){
            window.location.reload(1);
         }, 5000);
    }
    // if user loses
    // turn into a function
    if (count === numGuesses) {
        winnerEl.textContent = "You Died!";
        document.getElementsByClassName("btn btn-primary").disabled = true;
        setTimeout(function(){
            window.location.reload(1);
         }, 5000);
    }
}
});
