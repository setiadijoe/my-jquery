function validation(email) {
    var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
}

function validate() {
    // console.log('test');
    // $("#email").valu
    let email = $("#email").val();
    if(validation(email)){
        $("div").text("It is valid")
        $("#email").css("color", "green")
        $("#email").css("border", "2px")
    } else {
        $("div").text("It is not valid")
        $("#email").css("color", "red")
        $("#email").css("border", "3px")
    }
    
}

$("#email").keyup("click", validate);