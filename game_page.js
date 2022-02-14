var name1 = localStorage.getItem("player1");
var name2 = localStorage.getItem("player2");
var player1_score = 0;
var player2_score = 0;
document.getElementById("player1").innerHTML = name1 + ":";
document.getElementById("player2").innerHTML = name2 + ":";
document.getElementById("player1_score").innerHTML = player1_score
document.getElementById("player2_score").innerHTML = player2_score
document.getElementById("player_question").innerHTML = "Question Turn:" + name1
document.getElementById("player_answer").innerHTML = "Answer Turn:" + name2

function send() {

    var get_word = document.getElementById("word").value
    var word = get_word.toLowerCase()
    console.log("Word in lower case is " + word)
    charAt1 = word.charAt(1)
    lenght_divide_2 = Math.floor(word.length / 2)
    chaeAt2 = word.charAt(lenght_divide_2)
    length_minus_1 = word.length - 1
    charAt3 = word.charAt(length_minus_1)
    var remove1 = word.replace(charAt1, "_")
    remove2 = remove1.replace(chaeAt2, "_")
    remove3 = remove2.replace(charAt3, "_")
    quetion_word = "<h4 id='word_display'>Q." + remove3 + "</h4>"
    input_box = "<br> Ans:<input type='text' id='box_input'> "
    check_btn = "<br>  <br> <button class='btn btn-info' onclick='check()'>check</button>"
    outpot = quetion_word + input_box + check_btn
    document.getElementById("output").innerHTML = outpot
    document.getElementById("word").value = ""

}
question_turn = "player1"
Answer_turn = "player2"

function check() {


    var get_answer = document.getElementById("box_input").value
    var Answer = get_answer.toLowerCase()
    if (word == Answer) {
        if (Answer_turn == "player2") {
            player2_score = player2_score + 1
            document.getElementById("player2_score").innerHTML = player2_score
        } else {
            player1score = player1_score + 1
            document.getElementById("player1_score").innerHTML = player1_score


        }
    }
    if (question_turn == "player1") {
        question_turn = "player2"
        document.getElementById("player_question").innerHTML = "Question Turn:" + name2
    } else {
        question_turn = "player1"
        document.getElementById("player_question").innerHTML = "Question Turn:" + name1
    }
    if (Answer_turn == "player1") {
        Answer_turn = "player2"
        document.getElementById("player_answer").innerHTML = "answer Turn:" + name2
    } else {
        Answer_turn = "player1"
        document.getElementById("player_answer").innerHTML = "answer Turn:" + name1
    }
    
    document.getElementById("output").innerHTML = ""
}