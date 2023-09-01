//List 抽籤主題
let ul = document.getElementById("list");
for (const key in Data) {
    let li = document.createElement("li");
    li.setAttribute("class","listBtn")
    li.textContent = key;
    ul.appendChild(li);
    console.log(key);
}

//抽籤結果
let listBtns = document.getElementsByClassName("listBtn");
for (const listBtn of listBtns) {
    listBtn.addEventListener("click",function(){
        for (const b of listBtns){
            b.style.transform = "scale(1)";
            b.style.color = "white";
        }
        this.style.transform = "scale(1.2)";
        this.style.color = "indigo";
        let x = Math.floor(Math.random()*Data[this.textContent].length);
        let t = this.textContent;
        let result = document.getElementById("result");
        result.textContent = Data[this.textContent][x];
        document.getElementsByClassName("btn")[0].addEventListener("click",function(){
            //抽籤動畫
            let load = document.getElementById("load");
            load.style.display = "block";
            setTimeout(function(){
                load.remove();
                document.getElementById("title").textContent = t;
                ul.style.display = "none";
                result.style.display = "block";
            },3000);
            this.style.display = "none";
            document.getElementsByClassName("rebtn")[0].style.display = "block";
        })
    })

}
