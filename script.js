let toggle = {
    day : {
        bg:'url(Images/day.jpg)',
        size:'100% 100%'
    },
    night : {
        bg :'url(Images/night.jpg)',
        size:'100% 100%'
    }
}

let day = document.querySelector('#day')
let night = document.querySelector('#night')
let back = document.querySelector('#back')

day.addEventListener('click',()=>{
    back.style.backgroundImage = toggle.day.bg;
    back.style.backgroundSize = toggle.day.size;
})

night.addEventListener('click',()=>{
    back.style.backgroundImage = toggle.night.bg;
    back.style.backgroundSize = toggle.night.size;
})

