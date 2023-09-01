document.getElementById("user").addEventListener("keyup",function(e){
    if(e.keyCode == 13){
        if(user.value.length < 2){
            document.getElementById("star_title").textContent = "請輸入至少兩個字";
        }else{
            for (const key in Data) {
                if(key.indexOf(user.value)>=0){
                    document.getElementById("star_title").textContent = Data[key].name + " " + Data[key].day;
                    document.getElementsByClassName("star")[0].textContent = Data[key].txt;
                    console.log(Data[key].name)
                }
            }
        }
        user.value = "";
    }

})