/*手機版菜單如何運行，Menu's Design*/
let bar = document.getElementsByClassName("bar")[0];
let nav = document.getElementsByTagName("nav")[0];
let navT = document.getElementsByClassName("nav_t")[0];
let navM = document.getElementsByClassName("nav_m")[0];
let navB = document.getElementsByClassName("nav_b")[0];
bar.addEventListener("click",function(){
    if(nav.style.display == "none" || nav.style.display == ""){
        nav.style.display = "block";
        /*以下是菜單三條線的圖案變化*/
        navT.style.transform = "rotate(27deg)";
        navB.style.transform = "rotate(-27deg)";
        navM.style.opacity = 0;/*0是隱藏中間那條線，透明度*/
    }
    else{
        MenuClose();
    }
})
/*
讓菜單在選擇後收起，lis是監聽所有li，所以如果別的地方也用到li可能會造成誤判
這裡可用是因為只有menu有用到
*/
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

/*Load's Design，製作loading頁面後才讓使用者使用*/
setTimeout(function(){
    document.getElementById("load").style.display = "none";

},5000);/*5000是loading持續時間*/