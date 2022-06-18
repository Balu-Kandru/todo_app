window.onload = ()=>{
    let ourdata=document.getElementById("main")
    let Items=document.getElementById("elements")
    let submit=document.getElementById("submit")
    let editeditem=null
    ourdata.addEventListener("submit", createlist)
    Items.addEventListener("click", Edit_Delete)
}
function createlist(e){
    e.preventDefault()
    let element=document.getElementById("input").value
    if(submit.value != "submit"){
        e.path[2].childNodes[0].data=element
        document.getElementById("input").value=''
        submit.value="submit"
    }
    if(element.trim()==null || element.trim()==''){
        alert("please enter the valid task")
        return false
    }else{
        document.getElementById("input").value=""
    }
    let li =document.createElement("p")
    li.innerText=element
    let div=document.createElement("div")
    div.setAttribute("id", "flexbut")
    let delete_but =document.createElement("button")
    delete_but.setAttribute("class", "buttons")
    delete_but.setAttribute("id", "del")
    delete_but.innerHTML="Delete"
    let edit_but=document.createElement("button")
    edit_but.setAttribute("class", "buttons")
    edit_but.innerHTML="Edit"
    div.appendChild(delete_but)
    div.appendChild(edit_but)

    li.appendChild(div)

    elements.appendChild(li)

}
function Edit_Delete(e){
    e.preventDefault()
    if(e.target.innerText=="Delete"){
        let li=e.path[2]
        elements.removeChild(li)
        return true
    }else{
        document.getElementById("input").value=e.path[2].childNodes[0].data
        editeditem=e
        submit.value="Done"
        let li=e.path[2]
        elements.removeChild(li)

    }
    
}