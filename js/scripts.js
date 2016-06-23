//Back-end
var pig_latin = function(x) {

  if (x[0] === "a" || x[0] === "e" || x[0] === "i" || x[0] === "o" || x[0] === "u" ) {
    return x + "ay";
  } else if (x[0] === "q") {
    return x.slice(2) + x[0] + x[1] + "ay";
  } else if ( x[0, 1, 2] !== "a" || x[0, 1, 2] !== "e" || x[0, 1, 2] !== "i" || x[0, 1, 2] !== "o" || x[0, 1, 2] !== "u" ) {
    return x.slice(3) + x[0] + x[1] + x[2] + "ay";
  } else if ( x[0, 1] !== "a" || x[0, 1] !== "e" || x[0, 1] !== "i" || x[0, 1] !== "o" || x[0, 1] !== "u" ) {
    return x.slice(2) + x[0] + x[1] + "ay";
  } else if (x[0] !== "a" || x[0] !== "e" || x[0] !== "i" || x[0] !== "o" || x[0] !== "u" ) {  return x.slice(1) + x[0] + "ay";
  } else {
  return false;
}
};




//User-interface
$(document).ready(function () {
  $("form#translator").submit(function(event) {
    event.preventDefault();
    var word = $("input#word").val();
    var result = pig_latin(word);

    $("#piglatin").text(result);
  });
});
