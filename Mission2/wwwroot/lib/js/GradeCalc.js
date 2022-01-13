$("#submit").click(function () {

    // Define variables 

    //form inputs
    var fAssig = parseFloat($("#assignment").val());
    var fGroup = parseFloat($("#groupProject").val());
    var fQuiz = parseFloat($("#quizzes").val());
    var fExam = parseFloat($("#exams").val());
    var fIntex = parseFloat($("#intex").val());

    //grade weights
    var fAsWeight = .55;
    var fGrWeight = .05;
    var fQuWeight = .1;
    var fExWeight = .2;
    var fInWeight = .1;

    // define final score variables by multiplying 
    // the user input by the grade weight
    var fAsScore = fAssig * fAsWeight;
    var fGrScore = fGroup * fGrWeight;
    var fQuScore = fQuiz * fQuWeight;
    var fExScore = fExam * fExWeight;
    var fInScore = fIntex * fInWeight;

    // sum the scores

    var fCalculatedGrade = fAsScore + fGrScore + fQuScore + fExScore + fInScore

    // find the letter grade

    var letterGrade = "";

    if (fCalculatedGrade >= .94) {
        letterGrade = "A"
    }
    else if (fCalculatedGrade < .94 && fCalculatedGrade >= .9) {
        letterGrade = "A-"
    }
    else if (fCalculatedGrade < .9 && fCalculatedGrade >= .87) {
        letterGrade = "B+"
    }
    else if (fCalculatedGrade < .87 && fCalculatedGrade >= .84) {
        letterGrade = "B"
    }
    else if (fCalculatedGrade < .84 && fCalculatedGrade >= .8) {
        letterGrade = "B-"
    }
    else if (fCalculatedGrade < .8 && fCalculatedGrade >= .77) {
        letterGrade = "C+"
    }
    else if (fCalculatedGrade < .77 && fCalculatedGrade >= .74) {
        letterGrade = "C"
    }
    else if (fCalculatedGrade < .74 && fCalculatedGrade >= .7) {
        letterGrade = "C-"
    }
    else if (fCalculatedGrade < .7 && fCalculatedGrade >= .67) {
        letterGrade = "D+"
    }
    else if (fCalculatedGrade < .67 && fCalculatedGrade >= .64) {
        letterGrade = "D"
    }
    else if (fCalculatedGrade < .64 && fCalculatedGrade >= .6) {
        letterGrade = "D-"
    }
    else if (fCalculatedGrade < .6) {
        letterGrade = "E"
    }

    alert("Your final score would be " + fCalculatedGrade + "%. That's a " + letterGrade)

   


})

