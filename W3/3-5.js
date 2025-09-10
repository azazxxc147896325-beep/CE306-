let students = [{name:"Doom", score:85},{name:"Bob", score:40},{name:"Jap", score:72},{name:"Jab", score:55},{name:"Jot", score:90},{name:"Jum", score:30}
];

function filterPassedStudents(minScore){
    students.forEach(function(s){
        if(s.score >= minScore){
            console.log("Student " + s.name + " passed with score " + s.score);
        }
    });
}

filterPassedStudents(50);
