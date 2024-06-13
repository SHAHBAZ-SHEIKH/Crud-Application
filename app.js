var selectedRow = null

// Alerts Show

function showAlert(message,className){
    const div = document.createElement("div")
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message))

    const container = document.querySelector(".container")
    const main = document.querySelector(".main");
    container.insertBefore(div,main)

    setTimeout(() =>document.querySelector(".alert").remove() ,3000)

}


//Clear Field

function clearField(){
    document.querySelector("#firstName").value=''
    document.querySelector("#lastName").value=''
    document.querySelector("#rollNo").value=''
}


// Add Data

document.getElementById("your-id").addEventListener("click",function(){

    //Get Form Values
    const firstName = document.querySelector("#firstName").value
    const lastName = document.querySelector("#lastName").value
    const rollNo = document.querySelector("#rollNo").value
    
        if(firstName == "" || lastName ==  "" || rollNo ==""){
            showAlert("Please Fill in all Fields","danger")
        }
        else{
            if(selectedRow == null){
                const studentList = document.querySelector("#student-list")
                const newTr = document.createElement("tr")
                

                newTr.innerHTML = `
                <td>${firstName}</td>
                <td>${lastName}</td>
                <td>${rollNo}</td>
                <td>
                <a href="#" class="btn btn-warning btn-sm edit">Edit</a>
                <a href="#" class="btn btn-danger btn-sm delete">Delete</a>
                </td>

                `
                studentList.appendChild(newTr)
                selectedRow =null
                showAlert("Student data SuccessFully Added","Danger")


            }

            else{
                selectedRow.children[0].textContent = firstName;
                selectedRow.children[1].textContent = lastName;
                selectedRow.children[2].textContent = rollNo;
                selectedRow = null
                showAlert("Student Info Edit","Info")
                

            }
            clearField()
            
        }

})

// Edit Data

document.querySelector("#student-list").addEventListener("click",(e)=>{
    target  = e.target
    if(target.classList.contains("edit")){
        selectedRow  = target.parentElement.parentElement
        console.log(selectedRow.children[0].textContent)
        let firstName = document.querySelector("#firstName")
        let lastName = document.querySelector("#lastName")
        let rollNo = document.querySelector("#rollNo")
        firstName.value =selectedRow.children[0].textContent
        lastName.value = selectedRow.children[1].textContent;
        rollNo.value = selectedRow.children[2].textContent

        // firstName.style.color  ="#fff"
        // firstName.style.backgroundColor  ="green"
        // firstName.style.fontSize = "20px"
        // firstName.style.fontWeight = "600"

        // lastName.style.color  ="#fff"
        // lastName.style.backgroundColor  ="green"
        // lastName.style.fontSize = "20px"
        // lastName.style.fontWeight = "600"

        // rollNo.style.color  ="#fff"
        // rollNo.style.backgroundColor  ="green"
        // rollNo.style.fontSize = "20px"
        // rollNo.style.fontWeight = "600"
        

    }
})
        

        
    





// Delete Data

document.querySelector("#student-list").addEventListener("click",(e) =>{
    target = e.target
    console.log(target)
    if(target.classList.contains("delete")){
        target.parentElement.parentElement.remove()
        showAlert("Student Data Deleted","Danger")

    }
    
    
})