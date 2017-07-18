$(document).ready(function () {

  $("#answer").hide();

  var magic8Ball = {};
    magic8Ball.listOfAnswers = ["It is certain, It is decidedly so", "Without a doubt", "Yes, definitely", "You may rely on it", "As I see it, yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy, try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Dont count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"];
    magic8Ball.response = function (question)
    {
      $("#answer").fadeIn(4000);
      var randomNumber = Math.random();
      var randomNumberArray = randomNumber * this.listOfAnswers.length;
      var randomIndex = Math.floor(randomNumberArray);
      var answer = this.listOfAnswers[randomIndex];
      $("#answer").text(answer);
      $("#8ball").attr("src","https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
      console.log(question);
      console.log("Magic 8 Ball says = " + answer);
    };

  function onClick() {
    $("#answer").hide();
    var question = prompt("Ask a YES/NO question", "YES/NO");
    magic8Ball.response(question);
    $("#8ball").effect("shake");
  }


$("#questionButton").click(onClick);
$("#8ball").attr("src","https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");
});
