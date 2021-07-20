class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    question.hide()
    background("yellow")
    

    //write code to change the background color here
    fill("Red")

    //write code to show a heading for showing the result of Quiz
      textSize(35)
      text("Results Of The Quiz",120,100)

    //call getContestantInfo( ) here
   Contestant.getPlayerInfo()

    //write condition to check if contestantInfor is not undefined
     if(allContestants !== undefined){
     fill("Blue")
     textSize(20)
     text("Note Contestants Who Answered The Question Correctly Are Highlited Green",130,200)
     for(var plr in allContestants){
     var correctAns = "2";
     if(correctAns===allContestants[plr].answer){
     fill("Green")}
      else{
     fill("Red")
      }
    display_Answers=displayAnswers+30
    textSize(20)
    text(allContestants[plr].name+":"+allContestants[plr].answer,250,display_Answers)

    }
     }
       
     }
    //write code to add a note here

    //write code to highlight contest who answered correctly
    
  }


