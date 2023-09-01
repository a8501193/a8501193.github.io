let share = document.getElementsByClassName("share")[0];
document.getElementsByTagName("nav")[0].addEventListener("click",function(){
    if(share.style.display == "none" || share.style.display == ""){
        share.style.display = "block";
    }else{
        share.style.display = "none";
    }
})