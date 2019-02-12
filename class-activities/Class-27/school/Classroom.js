const Student = require('./Student');

function Classroom( students, professor, roomNumber ) {
    this.students = students
    this.professor = professor
    this.roomNumber = roomNumber
    this.addStudent = function(name,favorite,gpa){
        this.students.push(new Student(name,favorite,gpa))
    }
}

module.exports = Classroom