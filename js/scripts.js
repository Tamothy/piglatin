//Back-end

var pig_latin = function(x) {
  return false;

};




//User Interface
$(document).ready(function () {
  $("form#translator").submit(function(event) {
    event.preventDefault();
    var word = $("input#word").val();
    var result = pig_latin(word);

    $("#piglatin").text(result);
  });
});
