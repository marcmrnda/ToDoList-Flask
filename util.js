const dropBtn = document.querySelector(".dBtn")
const dropDown = document.querySelector(".dropdown")
const closeBtn = document.querySelectorAll('#close')
const myModal = document.querySelectorAll('.MyModal')
const bgLink = document.getElementById('bglink')
const ptLink = document.getElementById('ptlink')
const dpLink = document.getElementById('dplink')
const editBG = document.getElementById('editBGModal')
const editPT = document.getElementById('editTitle')
const deleteP = document.getElementById('deleteProject')
const uploadBtn = document.getElementById('imageFile')
const demoPhoto = document.getElementById('demoPhoto')
const demoName = document.getElementById('demoName')
const addItems = document.getElementById('addItems') 
const addTask =  document.getElementById('addTask')

document.addEventListener('DOMContentLoaded', (e) => {

    e.preventDefault()

    dropBtn.addEventListener('click' , () => {
        if(!dropDown.classList.contains('show')) {
            dropDown.classList.add('show')
        }
        else{
            dropDown.classList.remove('show')
        }
    })
    
    window.onclick = function(e) {
        if(!e.target.matches(".dBtn")) {
            if(dropDown.classList.contains('show')) {
                dropDown.classList.remove('show')
            }
        }
    }

    addItems.addEventListener('click', () => {
        addTask.style.display = "flex"
    })
    
    
    bgLink.addEventListener('click', () => {
        editBG.style.display = "flex"
        
    })
    
    ptLink.addEventListener('click', () => {
        editPT.style.display = "flex"
    })
    
    dpLink.addEventListener('click', () => {
        console.log("gi")
        deleteP.style.display = "flex"
    })
    
    closeBtn.forEach(c => {
        c.addEventListener('click', () => {
            myModal.forEach(m => {
                console.log("hey")
                m.style.display = "none"
            })
        })
    })
    
    
    uploadBtn.onchange = () => {
        const fileReader = new FileReader()
        fileReader.readAsDataURL(uploadBtn.files[0])
        fileReader.onload = () => {
            demoPhoto.setAttribute('src', fileReader.result)
        }
        demoName.textContent = uploadBtn.files[0].name
    }
})


function openPage(id) {
    const tabcontent = document.querySelectorAll('.tab-content')
    const tablinks = document.querySelectorAll('.tab-links')
    tabcontent.forEach(element => {
        element.style.display = "none"        
    });

    const tabs = document.getElementById(id)

    tabs.style.display = "block"

   tablinks.forEach(t => {
        if(t.classList.contains('active')){
            t.classList.remove('active')
        }
        else{
            t.classList.add('active')
        }
   })

}


