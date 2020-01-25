const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

yargs.command({
    command : 'add' ,
    describe :'adding notes',
    builder : {
        title:{
            demandOption: true,
            descirbe : 'note title',
            type :'string'

        },
        body :{
            demandOption : true,
            describe : 'The body',
            type : 'string'
        }

    },
    handler : function (argv){
        console.log('Body is '+ argv.body)
        console.log('Title is' + argv.title)
       notes.addnote(argv.title,argv.body)

    }
})
yargs.command({
    command: 'remove',
    descirbe: 'Remove an element',
    builder : {
        title: {
            demandOption:true,
            describe:'note title',
            type:'string'
        }
    },
    handler : function(argv){
        notes.removenote(argv.title)
       

    }

})
yargs.command({
    command : 'List' ,
    describe :'Listing notes',
    handler : function (){
        console.log('Listing notes!')
    }
})
yargs.command({
    command : 'Read' ,
    describe :'Reading notes',
    handler : function (){
        console.log('Read notes!')
    }
})

//console.log(process.argv)
//console.log(yargs.argv)
yargs.parse()




