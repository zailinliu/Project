const items = document.querySelectorAll('.news-text')
items.forEach((list) => {    
    list.addEventListener('click', ()=>{
        if(list.classList.contains('selected')){
            list.classList.remove('selected')
        } else {
            items.forEach((list) => {
            })
            list.classList.add('selected')
        }
    })
})

const side = document.getElementById('sidebar')
const button = document.getElementById('trigger')
trigger.addEventListener('click',() =>{
    if(sidebar.classList.contains('open')){
        sidebar.classList.remove('open')
        trigger.innerHTML = '<iconify-icon icon="ph:x-bold" width="50""></iconify-icon>'
    } else {
        sidebar.classList.add('open')
        trigger.innerHTML = '<iconify-icon icon="ci:hamburger-lg" width="50""></iconify-icon>'
    }
})