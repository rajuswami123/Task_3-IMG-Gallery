const imgBtn = document.getElementById('click');
const lightbox = document.getElementById('lightbox');
const closeBtn = document.getElementById('close');


closeBtn.addEventListener('click', () => {
  lightbox.classList.add('hidden');
});
let btns=document.querySelectorAll("img");
btns.forEach(element => {
    element.addEventListener('click',() => {
        imh.src=element.src
        console.log("ddsf"+element.src)
        lightbox.classList.remove('hidden');

        
    })  
});