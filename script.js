$(document).ready(function() {

    $('#grow').click(function() {
        $('#shrink').animate({
             width: "300px",
             height: "300px"
    }, 'slow', function() {

    $('#shrink').animate({
             width: "0px",
             height: "0px"
    }, 'slow');
});
});

});
