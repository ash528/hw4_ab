
$(document).ready(function () {
    var crystalOne = 0;
    var crystalTwo = 0;
    var crystalThree = 0;
    var crystalFour = 0;
    var wins = 0
    var losses = 0
    var counter = 0
    console.log(counter)
    function reset() {
        crystalOne = "";
        crystalTwo = "";
        crystalThree = "";
        crystalFour = "";
    }

    var targetNumber = Math.floor(Math.random() * 120 + 19);
    $("#targetNumber").text(targetNumber);
    $("#wins").append(" " + wins);
    $("#loses").append(" " + losses)
    $("#yourNumber").text(counter)


    var crystalOne = Math.floor(Math.random() * 25) + 1
    console.log("Crystal one: " + crystalOne)
    var crystalTwo = Math.floor(Math.random() * 25) + 1
    console.log("Crystal two: " + crystalTwo)
    var crystalThree = Math.floor(Math.random() * 25) + 1
    console.log("Crystal three: " + crystalThree)
    var crystalFour = Math.floor(Math.random() * 25) + 1
    console.log("Crystal four: " + crystalFour)

   


    function reset() {
        counter = 0;
        $("#yourNumber").text(counter)
        targetNumber=Math.floor(Math.random() * 102 + 1);
        $("#targetNumber").text(targetNumber);
        crystalOne = Math.floor(Math.random() * 25) + 1
        crystalTwo = Math.floor(Math.random() * 25) + 1
        crystalThree = Math.floor(Math.random() * 25) + 1
        crystalFour = Math.floor(Math.random() * 25) + 1


    }

    $("#crystalOne").on("click", function () {
        //new
        counter = crystalOne + counter;
        
        //new
        $("#yourNumber").text(counter)

        if (counter === targetNumber) {
            alert("winner!")
            reset();
            wins++;
            $("#wins").text("Wins: " + wins)
        }
        else if ( counter > targetNumber) {
            alert("loser!")
            reset();
            losses++;
            $("#losses").text("Losses: " + losses)
        }
    })
    $("#crystalTwo").on("click", function () {
        counter = crystalTwo + counter;
        $("#yourNumber").text(counter)
        if (counter === targetNumber) {
            alert("winner!")
            reset();
            wins++;
            $("#wins").text("Wins: " + wins)

        }
        else if ( counter > targetNumber) {
            alert("loser!")
            reset();
            losses++;
            $("#losses").text("Losses: " + losses)
        }
    })
    $("#crystalThree").on("click", function () {
        counter = crystalThree + counter;
        $("#yourNumber").text(counter)
        if (counter === targetNumber) {
            alert("winner!")
            reset();
            wins++;
            $("#wins").text("Wins: " + wins)
        }
        else if ( counter > targetNumber) {
            alert("loser!")
            reset();
            losses++;
            $("#losses").text("Losses: " + losses)
        }
    })
    $("#crystalFour").on("click", function () {
        counter = crystalFour + counter;
        $("#yourNumber").text(counter)
        if (counter === targetNumber) {
            alert("winner!")
            wins++;
            reset();
            $("#wins").text("Wins: " + wins)
        }
        else if ( counter > targetNumber) {
            alert("loser!")
            reset();
            losses++;
            $("#losses").text("Losses: " + losses)
        }
    })
})

