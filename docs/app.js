

var cont = 1;
const menu=document.getElementById("menuitems")
const button=document.getElementById("btnmenu")
button.addEventListener('click', () => {
   if (cont==1){
    menu.style.display = "block"
    cont = 0;
   }else{
       cont = 1;
       menu.style.display = "none"
   }
  
})