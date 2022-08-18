import { ref, push, set, database, onValue } from "./firebase.js";
let holder=document.getElementById("holder")
let contentInput=document.getElementById("contentInput")
let nameInput = document.getElementById("NameInput")
let subjectInput = document.getElementById("subjectInput")
let titleInput = document.getElementById("titleInput")

let submitBtn=document.getElementById("submitBtn")



let blogsRef=ref(database,"items")

submitBtn.onclick=function(event){
    event.preventDefault()
let contentInputVal=contentInput.value 
let nameInputVal= nameInput.value
let subjectInputVal= subjectInput.value
let titleInputVal=titleInput.value


contentInput.value=""
nameInput.value=""
subjectInput.value=""
titleInput.value=""

let newBlogRef= push(blogsRef)
set(newBlogRef,[nameInputVal,subjectInputVal,titleInputVal,contentInputVal])
}

onValue(blogsRef, (snapshot)=>{
   holder.innerHTMl=""
    let data =snapshot.val()
    console.log(data)

    for(const property in data){
        let section = document.createElement("div")
        console.log(data)
        let name =document.createElement("div")
        let subject= document.createElement("div")
        let title =document.createElement("div")
        let content= document.createElement("p")
        name.innerHTML=data[property][0]
        subject.innerHTML=data[property][1]
        title.innerHTML=data[property][2]
        content.innerHTML=data[property][3]
        
        section.append(name,subject,title,content)
holder.append(section)
section.className="section"
    
    }
})
