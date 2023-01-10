const noti = document.getElementById('noti')
const clearNoti = document.getElementById('clearNoti')
const bgRemove = document.getElementById('first-bgRemove')
const sndBgRemove = document.getElementById('second-bgRemove')
const thirdBgRemove = document.getElementById('third-bgRemove')

let amount = 3;

clearNoti.onclick = () => {
    noti.textContent = 0 ;
    bgRemove.classList.remove('bg-Lightgrayishblue1');
    sndBgRemove.classList.remove('bg-Lightgrayishblue1');
    thirdBgRemove.classList.remove('bg-Lightgrayishblue1');
}

bgRemove.onclick = () => {
    noti.textContent = amount -= 1
    amount;
    bgRemove.classList.remove('bg-Lightgrayishblue1')
}
sndBgRemove.onclick = () => {
    noti.textContent = amount -= 1
    sndBgRemove.classList.remove('bg-Lightgrayishblue1')
}
thirdBgRemove.onclick = () => {
    noti.textContent = amount -= 1
    thirdBgRemove.classList.remove('bg-Lightgrayishblue1')
}
