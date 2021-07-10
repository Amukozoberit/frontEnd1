$(document).ready(function() {
    var current_image = 1;
    $(".back").click(function() {


        $("#img-rollover img").hide();
        if (current_image < 4) {
            $("#img-rollover #image_" + (current_image++)).show();
            // $(".container #img2").show();
        } else {

            current_image = 1;
            $("#img-rollover #image_" + (current_image++)).show()
        }
    });

    $(".forward").click(function() {
        current_image;
        $("#img-rollover img").hide();
        if (current_image > 0) {
            $("#img-rollover #image_" + (current_image--)).show();
            // $(".container #img2").show();
        } else {

            current_image = 1;
            $("#img-rollover #image_" + (current_image--)).show()
        }
    })
});