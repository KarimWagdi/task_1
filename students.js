const fs = require('fs')

const addStudent = (id,name,arabic,english,math) =>{
    const students = loadNotes();

    const duplicateID = students.find((el) => {
        return el.id === id;
      });

      let total = 0;

      for (let i = 0; i < degree.length; i++) {
        total += degree[i];
      }
    
      if (!duplicateID) {

    students.push({
       id,
       name,
       arabic,
       english,
       math,
    });

    saveStudents(students);
    console.log("Saved Successfully");
  } else {
    console.log("Error");
  }
};


const loadStudents = () =>{
    try{
    const data = fs.readFileSync('students.json').toString()
    return JSON.parse(data) 
    }
    catch(e){
        return []
    }

}

const saveStudents = (students) =>{
    const saveData = JSON.stringify(students)
    console.log(saveData)
    fs.writeFileSync('students.json',saveData) 
}

const deleteStudent = (id) =>{
    const students = loadStudents ()
    const studentsToKeep = students.filter((el)=>{
        return el.id !== id
    })
 
    if(studentsToKeep.length = students.length){
        console.log('this ID not found')
    }else{
        saveStudents(studentsToKeep)
        console.log('deleted sucessfully')
    }
    
}

const readStudents = (id) =>{
    const students = loadStudents()
    const student = students.find((el)=>{
        return el.id === id
    })
    if(student){
        console.log("Name: " + student.name +" Total degree: "+ student.total)
    }
    else {
        console.log('Not found')
    }
}

const listStudents =() => {
    const students = loadStudents()

    students.forEach((el)=>{

        console.log(el.name)
    
    });
}

module.exports = {
   addStudent, 
   deleteStudent,
   readStudents,
   listStudents
}