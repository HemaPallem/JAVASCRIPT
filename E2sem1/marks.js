function calculateGrades(){
    const gradePointsMap = {
        'Ex': 10,
        'A': 9,
        'B': 8,
        'C': 7,
        'D': 6,
        'F': 0
    };

    let psGrade = document.getElementById('ps').value;
    let daaGrade = document.getElementById('daa').value;
    let dldGrade = document.getElementById('dld').value;
    let dbmsGrade = document.getElementById('dbms').value;
    let flatGrade = document.getElementById('flat').value;
    let daalabGrade = document.getElementById('daalab').value;
    let dldlabGrade = document.getElementById('dldlab').value;
    let dbmslabGrade = document.getElementById('dbmslab').value;
    
    const overallGradePoints = (
        (gradePointsMap[psGrade] * 4) +
        (gradePointsMap[daaGrade] * 4) +
        (gradePointsMap[dldGrade] * 3) +
        (gradePointsMap[dbmsGrade] * 3) +
        (gradePointsMap[flatGrade] * 3) +
        (gradePointsMap[daalabGrade] * 1.5) +
        (gradePointsMap[dldlabGrade] * 1.5) +
        (gradePointsMap[dbmslabGrade] * 1.5)
    );

    const result =  overallGradePoints/215;
    document.getElementById('gradePoints').textContent =parseFloat(result.toFixed(4)) * 10;
}