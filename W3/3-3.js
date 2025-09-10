let students = [{name : "Doom",grade : "A" } , {name: "BOB",grade : "B" }, {name : "JAP",grade : "B+" }];
students.forEach((student, index)=> console.log (`Student [${index}]:${student.name}, Grade: ${student.grade}`));
function showStudentCount(){
    console.log(`Total students: ${students.length}`);
}
showStudentCount();