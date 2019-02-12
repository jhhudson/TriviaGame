console.log("javascript linked");

$(document).ready(function(){
    var correctCounter = 0;
    var wrongCounter = 0;
    var notAnswered = 0;
    var correctAnswers = ["china", "brazil", "50"];

    function initCounter() {
        correctCounter = 0;
        wrongCounter = 0;
        notAnswered = 0;
        $("#result-page").show();
        $("#time").hide();
    }

    initCounter();

    $("#start-button").click(function(){
        console.log("start-button clicked");
        // hide start button
        $("#start-button").hide();
        // show questions
        $("#main").show();
        // show time
        $("#time").show();
        

        run();
       
        //the interval set up to 20 seconds
        var number = 10;
        var intervalId;
        
        
        function run() {
            clearInterval(intervalId);
            intervalId = setInterval(decrement, 1000);
            
        }
      
        function decrement() {
            number--;
            $("#time").html("<h2> Remaining Time is: " + number + "</h2>");
            if (number === 0) {
                stop();
                alert("Time Up!");
                displayResult();    
            }
        } 
        
        function stop() {
            clearInterval(intervalId);
        }
    })

    $("input[type='button']").click(function(){
        var answer1 = $("input[name='q1']:checked").val();
        if(answer1 === correctAnswers[0]){
            correctCounter ++;
        } else {
            wrongCounter ++;
        }

        var answer2 = $("input[name='q2']:checked").val();
        if(answer2 === correctAnswers[1]){
            correctCounter ++;
        } else {
            wrongCounter ++;
        }

        var answer3 = $("input[name='q3']:checked").val();
        if(answer3 === correctAnswers[2]){
            correctCounter ++;
        } else {
            wrongCounter ++;
        }

        console.log(correctCounter, wrongCounter, notAnswered);
        
        displayResult();
        
    });

    function displayResult() {
        $("#result-page").show();
        var correctResult = $("<div>").text("Correct Answers: " + correctCounter);
        var incorrectResult = $("<div>").text("Wrong Answers: " + wrongCounter);
        var unansweredResult = $("<div>").text("Unanswered: " + notAnswered);
        $("#result-page").append(correctResult, incorrectResult, unansweredResult);

    };
    
});