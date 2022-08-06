$(document).ready(function(){

    $(".d2").hide()
    $(".d1").on("click", function(){
        let ind = $(".d1").index(this)
        let d3 = $(".d2").eq(ind)
        d3.slideToggle(500)
    })
})