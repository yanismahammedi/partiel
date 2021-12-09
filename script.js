const drop = document.querySelectorAll('.drop-hover')

drop.forEach(dropmenu =>{
    dropmenu.addEventListener('mouseover', ()=>{
        dropmenu.lastElementChild.style.cssText = 'opcacity:1; visibility: visible'
        document.querySelector('.navbar-container').style.background = 'linear-gradient(to right, #036bb1, #2f8fdf, #036bb1'
    })

    dropmenu.addEventListener('mouseout', ()=>{
        dropmenu.lastElementChild.style.cssText = 'opcacity:0; visibility: hidden; transition: ease 0.7s'
        document.querySelector('.navbar-container').style.background = '0'
    })
})