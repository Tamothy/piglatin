//Back-end
var pig_latin = function(x) {

  if (x[0] === "a" || x[0] === "e" || x[0] === "i" || x[0] === "o" || x[0] === "u" ) {
    return x + "ay";
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
