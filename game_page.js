player_1 = localStorage.getItem("player1_name");
player_2 = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

console.log(player_1);
console.log(player_2);

document.getElementById("player1_name").innerHTML = player_1 + " : ";
document.getElementById("player2_name").innerHTML = player_2;

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "<h3> Question Turn - " + player_1;
document.getElementById("player_answer").innerHTML = "<h3> Answer Turn - " + player_2;

function send() {
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log(word);

    charAt1 = word.charAt(1);
    length_charAt2 = Math.floor(word.length/2);

    charAt2 = word.charAt(length_charAt2);

    length_minus_1 = word.length - 1;
    charAt3 = word.charAt(length_minus_1);

    replace_1 = word.replace(charAt1, "_");
    replace_2 = replace_1.replace(charAt2, "_");
    replace_3 = replace_2.replace(charAt3, "_");

    question_word = "<h4 id='word_display'> Q."+replace_3+"</h4>";
    input_box = "<br> Answer : <input type='text' id='input_check'>";
    check_button = "<br> <button class='btn btn-info' onclick='check()'> Check </button>"
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}

var question_turn = "player_1";
var answer_turn = "player_2;"
function check() {
    get_answer = document.getElementById("input_check").value;
    answer = get_answer.toLowerCase();
    console.log("Lower Case Answer -" + answer);
    if(answer == word) {
        if (answer_turn == "player_1") {
            player1_score = player1_score +1;
            document.getElementById("player1_score").innerHTML= player1_score;
        }
        else {
            player2_score= player2_score +1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }
    if (question_turn == "player_1") {
        question_turn = "player_2";
        document.getElementById("player_question").innerHTML = "Question Turn - " + player_2;
    }
    else {
        question_turn = "player_1";
        document.getElementById("player_question").innerHTML = "Question Turn - " + player_1;
    }

    if(answer_turn == "player_1") {
        answer_turn = "player_2";
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player_2;
    }
    else {
        answer_turn = "player_1";
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player_1;
    }
    document.getElementById("output").innerHTML = "";
}
