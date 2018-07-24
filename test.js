function call (tmp) {
    // $.ajax({
    //     url: url,
    //     dataType: "script",
    //     success: success
    //   });
    var myJSON = console.log(JSON.stringify(tmp));
}

$(document).ready(function(){
    var tmp = {
        "user" : "Celje",
        "password" : "usercelje",
        "name":"PrimarySchool",
        "city":"Poznan",
        "country":"SLO",
        "classes": "C1%%%C2%%%C3",
        "sensors": "temp_C%%%elec_W"
    };
    call(tmp);
});