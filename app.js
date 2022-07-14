const yargs = require('yargs')
const students = require('./students')

yargs.command({
    command:'add',
    describe:'add Student',
    builder:{
        id:{
            describe:'the id of the student',
            demandOption:'true',
            type:'number',
        },
        name:{
            describe:'the student name',
            demandOption:'true',
            type:'string',
        },
        arabic:{
            describe:'the arabic dgree of the student',
            type:'number',
        },
        english:{
            describe:'the english dgree of the student',
            type:'number',
        },
        math:{
            describe:'the english dgree of the student',
            type:'number',
        },
        Total:{
            describe:'Total of all degree',
            type:'number'
        },
    },
    handler:()=>{
        students.addStudent(yargs.argv.id,yargs.argv.name,yargs.argv.arabic,yargs.argv.english,yargs.argv.math)
    }
})

yargs.command({
    command:'delete',
    describe:'delete student',
    builder:{
        id:{
            describe:'This is body description in delete command',
            demandOption:true,
            type:'number',
        }
    },

    handler:()=>{
        students.deleteStudent(yargs.argv.id)
    }
})

yargs.command({
    command:'read',
    describe:'Read notes command',
    builder:{
        id:{
            describe:'This is body description in read command',
            demandOption:true,
            type:'number'
        }
    },
    handler:()=>{
       students.readStudent(yargs.argv.id)
    }
})

yargs.command({
    command:'list',
    describe:'List students command',

    handler:()=>{
        students.listStudents()
    }
})
yargs.parse()