
// document.querySelector("#button").addEventListener("click", function(){
//     let state = document.querySelector("#states").value;
//     let mobile = document.querySelector("#mobile").value;
//     let email = document.querySelector("#email").value;
//     let male = document.querySelector("#male").value;
//     let female = document.querySelector("#female").value;

//     let fname = document.querySelector("#fname").value;
//     let lname = document.querySelector("#lname").value;

//     document.querySelector("#fullName").innerHTML = fname  +  lname;
//     document.querySelector("#myMobile").innerHTML = mobile;
//     document.querySelector("#myEmail").innerHTML = email;
//     document.querySelector("#myGender").innerHTML =male + female ;
//     document.querySelector("#myState").innerHTML = state;

// })


$(document).ready(function(){
    $("#button").click(function(){
        var mobile = $("#mobile").val();
        var fname = $("#fname").val();
        var lname = $("#lname").val();
        var gender = $( "input:checked" ).val();
        var state = $("#states").val();
        var email = $("#email").val();


        $( "#fullName" ).text(fname + " " + lname);
        $( "#myMobile" ).text(mobile);
        $( "#myEmail" ).text(email);
        $( "#myGender" ).text(gender);
        $( "#myState" ).text(state);
        
        $("#myMobile").text(name + mobile );
    })
 
});