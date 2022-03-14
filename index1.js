// $("button").click( function(){
//      $("h2").text("You have clicked the button");
// });

// $("button").click( function(){
//     $("h2").toggleClass("style");
// });

$(".btn").click( function(){
    var value = this.innerHTML;
    $("h2").text("You have " + value);
});