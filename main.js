import { ref, push, set, database, onValue } from "./firebase.js";
// The Education and Article section


let linkSpot= document.getElementById("linkContainer")



let OptionsButton=document.getElementById("Optionsbutton")
let selectBox = document.getElementById("topics")


OptionsButton.onclick=function(event){
  event.preventDefault
   linkSpot.innerHTML=""
    let selectValue= selectBox.value
    let currRef=ref(database,selectValue)

    onValue(currRef, snapshot=>{
        console.log(snapshot.val())
        const data= snapshot.val()
        for(let i= 0;i<data.length;i++){
            let articleHeading=document.createElement("h1")
            let articleLink= document.createElement("a")
           
            let articleDiv= document.createElement("div")
            articleDiv.append(articleHeading,articleLink)
            articleDiv.className = "articleDiv"
            articleHeading.className = "articleHeading"
            articleLink.className = "articleLink"
            
            articleLink.innerHTML ="click Here"
            articleLink.href=data[i].url
            articleLink.target = "_blank"
            articleHeading.innerHTML=data[i].name
            linkSpot.append(articleDiv)
        }
        

    })
}