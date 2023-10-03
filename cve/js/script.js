// setTimeout(function(){
//     document.getElementById("load").style.display = "none";

// },1000);


$(function () {
    $("body").append(`<a href='#' id='gotop'><iconify-icon icon="tabler:arrow-big-up-lines-filled" width="40" style="margin-top:10px;"></iconify-icon></a>`);
    $("#gotop").css({
        width: "4em",
        height: "4em",
        color: "#FFF",
        fontWeight: "900",
        fontFamily: "sans-serif",
        textAlign: "center",
        textDecoration: "none",
        lineHeight: "4em",
        display: "block",
        position: "fixed",
        right: "0.5em",
        bottom: "0.5em",
        backgroundColor: "#00000090",
        borderRadius: "50%",
        zIndex: 100,
        boxShadow: "1px 1px 8px gray"
    })
})

