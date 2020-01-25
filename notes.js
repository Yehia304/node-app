const fs = require('fs')
const chalk = require('chalk')

const getnotes = function () {
    return 'Your notes......'
}
const addnote = function (title,body) {
    const notes = Loadnote()

    const duplicatenotes = notes.filter(function(note){
        
        return note.title === title

    })
    
    if(duplicatenotes.length === 0){
        notes.push({
            title: title,
            body: body
        })
        savenotes(notes)
        console.log('New note added!')

    }
    else{
        console.log('Note title taken!')
    }
    
    
    
    console.log(notes)
    
}
const savenotes = function (notes){
    JSONData = JSON.stringify(notes)
    fs.writeFileSync('notes.json',JSONData)

}
const removenote = function(title){
    const loadednotes = Loadnote()
    console.log('loadednotes : ! '+ loadednotes)
    console.log('Title to be deleted ! : '+ title)
    const newarray = loadednotes.filter(function(note){
        return note.title !== title
    })

    if(loadednotes.length > newarray.length){
        console.log(chalk.blue.inverse('Note removed'))
    }
    else{
        console.log(chalk.green.inverse('Note doesnt exist'))
    }
    JSONarray = JSON.stringify(newarray)
    fs.writeFileSync('notes.json',JSONarray)

    //console.log(newarray)

}
const Loadnote = function () {
    try{
        const databuffer = fs.readFileSync('notes.json')
        const dataJSON = databuffer.toString()
        return JSON.parse(dataJSON)

    }
    catch (e){
        return []

    }

}
    


module.exports = {

    getnotes : getnotes,
    addnote : addnote,
    removenote : removenote
}