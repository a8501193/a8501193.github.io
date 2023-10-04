
let bar = document.getElementsByClassName("bar")[0];
let nav = document.getElementsByTagName("nav")[0];
let navT = document.getElementsByClassName("nav_t")[0];
let navM = document.getElementsByClassName("nav_m")[0];
let navB = document.getElementsByClassName("nav_b")[0];
bar.addEventListener("click",function(){
    if(nav.style.display == "none" || nav.style.display == ""){
        nav.style.display = "block";
        navT.style.transform = "rotate(27deg)";
        navB.style.transform = "rotate(-27deg)";
        navM.style.opacity = 0;
    }
    else{
        MenuClose();
    }
})
let lis = document.getElementsByTagName("li");
for (const li of lis){
    li.addEventListener("click",function(){
        MenuClose();
    })

}
function MenuClose(){
    nav.style.display = "none";
    navT.style.transform = "rotate(0deg)";
    navB.style.transform = "rotate(0deg)";
    navM.style.opacity = 1;
}


