$(function(){
    $(".timezone").animate({"height" : ($(".time li").length)*100},3000);
    $(".time li").each(function(index, element) {
        $(this).css("top",index*100);
    });
})
$(function () {
    $(".timezone").click(function(){
        return false;
    })
})