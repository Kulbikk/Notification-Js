const noti = document.getElementById('noti')
const clearNoti = document.getElementById('clearNoti')
const bgRemove = document.getElementById('first-bgRemove')
const sndBgRemove = document.getElementById('second-bgRemove')
const thirdBgRemove = document.getElementById('third-bgRemove')


let amount = 3;

noti.textContent = amount


const takeAmount = () => {
    if (amount > 0 ) {
        amount--
        noti.textContent = amount
    } else {
         return
}
}


clearNoti.onclick = () => {
    noti.textContent = amount = 0
    bgRemove.classList.remove('bg-Lightgrayishblue1');
    sndBgRemove.classList.remove('bg-Lightgrayishblue1');
    thirdBgRemove.classList.remove('bg-Lightgrayishblue1');
}


bgRemove.onclick = () => {
    takeAmount()
    bgRemove.classList.remove('bg-Lightgrayishblue1')
}

sndBgRemove.onclick = () => {
    takeAmount()
    sndBgRemove.classList.remove('bg-Lightgrayishblue1')
}

thirdBgRemove.onclick = () => {
    takeAmount()
    thirdBgRemove.classList.remove('bg-Lightgrayishblue1')
}
