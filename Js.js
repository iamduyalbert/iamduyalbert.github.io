var allbtn= document.querySelectorAll("a");

let hover=(e)=>{
    e.target.classList.add('hover');
}
let end=(e)=>{
    e.target.classList.remove('hover');
}
allbtn.forEach(btn => {
    btn.addEventListener('touchmove',hover);
    btn.addEventListener('touchend',end);
});



